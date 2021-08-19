import {
  Component,
  ComponentInterface,
  Element,
  Method,
  Prop,
  State,
  Watch,
  h,
  Build,
} from "@stencil/core";
import { ChartDataset } from "chart.js";

@Component({
  tag: "fireenjin-graph-pay-splits",
  styleUrl: "graph-pay-splits.css",
})
export class GraphPaySplits implements ComponentInterface {
  @Element() graphPaySplitsEl: any;

  @Prop() users = [];
  @Prop() graphTitle: string;

  @State() datasets: ChartDataset[] = [];
  @State() labels: string[] = [];
  @State() currentUsers: any[] = [];

  @Method()
  async setUsers(users) {
    try {
      this.currentUsers =
        typeof users === "string"
          ? JSON.parse(users)
          : users.length > 0
          ? users
          : this.graphPaySplitsEl.getAttribute("users")
          ? JSON.parse(this.graphPaySplitsEl.getAttribute("users"))
          : [];

      const backgroundColor = [
        "#3e95cd",
        "#8e5ea2",
        "#3cba9f",
        "#e8c3b9",
        "#c45850",
      ];
      const data = [];
      this.users.map((record) => {
        this.labels.push(record.user.user_name);
        data.push(record.amount);
      });

      this.datasets = [
        {
          backgroundColor,
          data,
        },
      ];

      return this.currentUsers;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  @Watch("users")
  onUsersUpdate() {
    this.setUsers(this.users);
  }

  formatUSD(amount: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  }

  getPaymentText(payment) {
    let paymentText = "";
    if (payment.type === "manual") {
      paymentText = `${this.formatUSD(payment.amount)} paid manually`;
    } else if (payment.type === "charge") {
      paymentText = `${this.formatUSD(payment.amount)} paid on ${
        payment.brand
      } card ending in ${payment.ending_in}`;
    } else if (payment.type === "check") {
      paymentText = `${this.formatUSD(payment.amount)} paid by check ${
        payment.check_number
      }`;
    }

    return paymentText;
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      this.setUsers(this.users);
    }
  }

  render() {
    return (
      <div class="graph-pay-splits-wrapper">
        {this.graphTitle ? <h1>{this.graphTitle}</h1> : null}
        <fireenjin-graph
          type="doughnut"
          datasets={this.datasets}
          labels={this.labels}
        />
        {this.users.map((record) => (
          <ion-item>
            <floodteam-avatar
              src={
                record?.user?.user_avatar
                  ? record.user.user_avatar
                  : "./img/avatar.png"
              }
              slot="start"
            />
            <h4>{record.user.user_name}</h4>
            {record.payables && record.payables.length > 0 ? (
              record.payables.map((payable) => [
                <p>
                  {payable.type === "percent"
                    ? payable.percent * 100 + "%"
                    : "Flat"}{" "}
                  - {record.user.group.group_name}
                </p>,
                payable.payment ? (
                  <p>{this.getPaymentText(payable.payment)}</p>
                ) : null,
              ])
            ) : (
              <floodteam-error message="No payment is tied to this payable!" />
            )}
            <ion-badge slot="end">{this.formatUSD(record.amount)}</ion-badge>
          </ion-item>
        ))}
      </div>
    );
  }
}
