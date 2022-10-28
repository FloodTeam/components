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
  Watch,
} from "@stencil/core";
import { FireEnjinFetchEvent } from "@fireenjin/sdk";
import renderHandlebars from "../../helpers/renderHandlebars";

@Component({
  tag: "floodteam-total-graph",
  styleUrl: "total-graph.css",
})
export class TotalGraph implements ComponentInterface {
  sumKeyToIndex: { [sumKey: string]: number } = {};
  groupToDateFormat: {
    [groupBy: string]: string;
  } = {
    week: "yyyy-Q-MM-ww",
  };

  @Event() fireenjinFetch: EventEmitter<FireEnjinFetchEvent>;

  @Prop() totallerId: string;
  @Prop() type: "bar" | "line" | "pie" = "line";
  @Prop({ mutable: true }) totaller: any;
  @Prop({ mutable: true }) labels: string[] = [];
  @Prop({ mutable: true }) dataSets: any[] = [];
  @Prop({ mutable: true }) groupBy: string = "month";

  @State() options: string[] = [];
  @State() paths: {
    [totallerId: string]: any;
  } = {};
  @State() totals: {
    [totallerId: string]: any;
  } = {};
  @State() sumKeys: string[] = [];

  @Watch("groupBy")
  ongroupByChanged() {
    this.populateGraph(this.totaller);
  }

  @Listen("fireenjinSuccess")
  async onSuccess(event) {
    if (event.detail.endpoint === "findTotaller") {
      this.totaller = event?.detail?.data?.totaller || null;
      this.populateGraph(this.totaller);
    } else if (event?.detail?.endpoint === "listTotals") {
      console.log(event.detail);
      this.filterTotals(event?.detail?.data?.totals || []);
      const totallerId = event?.detail?.event?.detail?.params?.totallerId;
      this.totals = {
        ...this.totals,
        [totallerId]: event?.detail?.data?.totals,
      };
    }
  }

  filterTotals(allTotals: any[]) {
    // formatDate(new Date());
    const labels = [];
    let i = 0;

    for (const totals of (allTotals || []).reverse()) {
      if (this.groupBy === "week" && this.groupToDateFormat["week"] && i > 12)
        continue;
      i = i + 1;
      labels.push(totals?.id);
      this.sumKeys.map((sumKey) => {
        this.dataSets[this.sumKeyToIndex[sumKey]].data.push(
          totals[sumKey] || 0
        );
      });
      this.labels = labels;
    }
  }

  populateGraph(totaller) {
    this.sumKeys = Object.keys(this.totaller?.sums || {});
    this.dataSets = Object.values(this.totaller?.sums || {}).map(
      (sum: any, index) => {
        this.sumKeyToIndex[sum?.id] = index;
        return {
          label: sum?.name || sum?.id,
          data: [],
          borderColor: sum?.color || this.randomColor(),
          backgroundColor: sum?.color || this.randomColor(),
        };
      }
    );
    const totallerId = totaller?.id;
    for (const [key, path] of Object.entries(totaller?.paths || {})) {
      if (!this.paths[totallerId]) this.paths[totallerId] = {};
      this.paths[totallerId][key] = path;
      if (this.groupBy === key) this.fetchTotals(totallerId, path as string);
      if (!this.options.includes(key)) this.options.push(key);
    }
    this.options = [...this.options];
    this.paths = { ...this.paths };
  }

  randomNumber() {
    return Math.random() * 10;
  }

  randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  renderPathTemplate(totallerId: string, pathStr: string, timestamp?: Date) {
    return renderHandlebars(pathStr, {
      totaller: {
        id: totallerId,
      },
      data: {
        // THIS NEEDS TO BE CHANGED
        createdAt: timestamp || new Date(),
      },
    });
  }

  async fetchTotaller() {
    this.fireenjinFetch.emit({
      endpoint: "findTotaller",
      params: {
        id: this.totallerId,
      },
    });
  }

  async fetchTotals(totallerId: string, totalsPath: string, timestamp?: Date) {
    let path = this.renderPathTemplate(totallerId, totalsPath, timestamp);
    const pathParts = path.split("/");
    pathParts.pop();
    path = pathParts.join("/");
    this.fireenjinFetch.emit({
      endpoint: "listTotals",
      params: {
        totallerId,
        path,
      },
    });
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.fetchTotaller();
  }

  render() {
    return (
      <fireenjin-graph
        type={this.type}
        labels={this.labels}
        datasets={this.dataSets}
        options={{
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "rgb(255, 99, 132)",
              },
            },
          },
        }}
      ></fireenjin-graph>
    );
  }
}
