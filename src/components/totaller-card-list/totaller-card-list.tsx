import {
  Component,
  EventEmitter,
  Event,
  h,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import renderHandlebars from "../../helpers/renderHandlebars";
import { FireEnjinFetchEvent } from "@fireenjin/sdk";

@Component({
  tag: "floodteam-totaller-card-list",
})
export class TotallerCardList {
  selectEl: HTMLFireenjinSelectElement;

  @Event() fireenjinFetch: EventEmitter<FireEnjinFetchEvent>;

  @Prop() totallerIds: any[];
  @Prop({ mutable: true }) label: string;
  @Prop({ mutable: true }) groupBy: string = "month";
  @Prop({ mutable: true }) timeframe = new Date();

  @State() options: string[] = [];
  @State() paths: {
    [totallerId: string]: any;
  } = {};
  @State() totals: {
    [totallerId: string]: any;
  } = {};

  @Listen("fireenjinSuccess")
  async onSuccess(event) {
    if (event?.detail?.endpoint === "findTotaller") {
      const totallerId = event?.detail?.data?.totaller?.id;
      for (const [key, path] of Object.entries(
        event?.detail?.data?.totaller?.paths || {}
      )) {
        if (!this.paths[totallerId]) this.paths[totallerId] = {};
        this.paths[totallerId][key] = path;
        if (this.groupBy === key) this.fetchTotals(totallerId, path as string);
        if (!this.options.includes(key)) this.options.push(key);
      }
      this.options = [...this.options];
      this.paths = { ...this.paths };
      if (!this.label) this.label = event?.detail?.data?.totaller?.name || null;
    } else if (event?.detail?.endpoint === "findTotals") {
      const totallerId = event?.detail?.event?.detail?.params?.totallerId;
      this.totals = {
        ...this.totals,
        [totallerId]: event?.detail?.data?.totals,
      };
    }
  }

  async fetchTotals(totallerId: string, path: string, timestamp?: Date) {
    this.fireenjinFetch.emit({
      endpoint: "findTotals",
      params: {
        totallerId,
        path: this.renderPathTemplate(totallerId, path as string, timestamp),
      },
    });
  }

  @Listen("ionChange")
  async onChange(event) {
    if (event?.target?.name === "groupBy") {
      this.groupBy = event?.target?.value;
    } else if (event?.target?.name === "timeframe") {
      this.timeframe;
    }
    for (const totallerId of this.totallerIds) {
      const noonTimestamp = new Date(Date.parse(event.target.value));
      noonTimestamp.setHours(24);
      this.fetchTotals(
        totallerId,
        this.paths[totallerId][this.groupBy],
        event?.target?.name === "timeframe" ? noonTimestamp : this.timeframe
      );
    }
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

  render() {
    return [
      <floodteam-title-bar>
        {this.label || ""}
        <div slot="end">
          <fireenjin-select
            style={{ display: "none" }}
            ref={(el) => (this.selectEl = el)}
            label="View By"
            labelPosition="stacked"
            name="groupBy"
            value={this.groupBy}
            options={(this.options || []).map((option) => ({
              label: option,
              value: option,
            }))}
          />
          <fireenjin-chip-bar>
            <ion-chip
              onClick={() => this.selectEl.querySelector("ion-select").click()}
            >
              {this.groupBy}
              <ion-icon name="chevron-down-circle" />
            </ion-chip>
            <ion-chip>
              <fireenjin-input
                clear-on-edit={true}
                name="timeframe"
                type="date"
                value={this.timeframe}
              />
            </ion-chip>
          </fireenjin-chip-bar>
        </div>
      </floodteam-title-bar>,
      (this.totallerIds || []).map((totallerId) => (
        <floodteam-totaller-cards
          totals={this.totals?.[totallerId]}
          totallerId={totallerId}
        />
      )),
    ];
  }
}
