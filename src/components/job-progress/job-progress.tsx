import { Color } from "@ionic/core";
import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-job-progress",
  styleUrl: "job-progress.css",
})
export class JobProgress implements ComponentInterface {
  @Prop() name = "status";
  @Prop({ mutable: true }) value: string = "respond";
  @Prop() statuses: string[] = ["respond", "evaluate", "map", "dry", "review"];
  @Prop() color: Color = "success";
  @Prop() scrollable = true;

  render() {
    return (
      <ion-segment
        scrollable={this.scrollable}
        color={this.color}
        value={this.value ? this.value : "respond"}
      >
        {(this.statuses?.length ? this.statuses : []).map((status, index) => {
          return (
            <ion-segment-button
              class={
                index <
                this.statuses.indexOf(this.value ? this.value : "respond")
                  ? "completed"
                  : this.value === status
                  ? "current"
                  : ""
              }
              value={status}
            >
              <ion-label>{status}</ion-label>
            </ion-segment-button>
          );
        })}
      </ion-segment>
    );
  }
}
