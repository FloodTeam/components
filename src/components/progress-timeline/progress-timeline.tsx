import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-progress-timeline",
  styleUrl: "progress-timeline.css"
})
export class ProgressTimeline implements ComponentInterface {
  /**
   * The major events on the timeline
   */
  @Prop() events: any = [];

  render() {
    return (
      <div
        class={{
          timeline: true
        }}
      >
        {this.events.map(event => (
          <div
            class={{
              event: true,
              complete: event.complete
            }}
          >
            <div class="details">
              <small>{event.timestamp}</small>
              <b>{event.name}</b>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
