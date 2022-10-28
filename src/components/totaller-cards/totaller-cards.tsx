import { FireEnjinFetchEvent } from "@fireenjin/sdk";
import {
  Build,
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
  Listen,
  State,
} from "@stencil/core";
import formatUSD from "../../helpers/formatUSD";

@Component({
  tag: "floodteam-totaller-cards",
  styleUrl: "totaller-cards.css",
})
export class TotallerCards implements ComponentInterface {
  @Event() fireenjinFetch: EventEmitter<FireEnjinFetchEvent>;

  @Prop() totallerId: string;
  @Prop() totals: { [sumName: string]: any };

  @State() totaller: any;

  @Listen("fireenjinSuccess")
  async onSuccess(event) {
    if (event.detail.endpoint === "findTotaller") {
      this.totaller = event?.detail?.data?.totaller || null;
    }
  }

  formatValue(value: number, sum: any) {
    return sum?.format === "usd" ? formatUSD(value) : value;
  }

  async fetchTotaller() {
    this.fireenjinFetch.emit({
      endpoint: "findTotaller",
      params: {
        id: this.totallerId,
      },
    });
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.fetchTotaller();
  }

  render() {
    return (
      <div class="flex-container">
        {Object.entries(
          (this.totaller?.sums || {}) as { [sumName: string]: any }
        ).map(([sumName, value]) => (
          <ion-card class="card">
            <h2>{value?.name}</h2>
            <h3>{value?.description}</h3>
            <h1>{this.formatValue(this.totals?.[sumName] || 0, value)}</h1>
          </ion-card>
        ))}
      </div>
    );
  }
}
