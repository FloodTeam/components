import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "floodteam-snapshot-card",
  styleUrl: "snapshot-card.css",
})
export class SnapshotCard implements ComponentInterface {
  @Event() floodteamClick: EventEmitter;

  @Prop() href: string;
  @Prop() photo: string;
  @Prop() buttonText: string;
  @Prop() active = false;
  @Prop() buttonProps = {};

  render() {
    return (
      <div class={this.active ? "widget active" : "widget"}>
        <div
          class="widget__photo"
          onClick={(event) => this.floodteamClick.emit({ event })}
          style={
            this.photo ? { backgroundImage: `url('${this.photo}')` } : null
          }
        />
        <slot name="before" />
        {this.buttonText ? (
          <ion-button class="widget__button" href={this.href}>
            {this.buttonText}
          </ion-button>
        ) : null}
        <div class="widget__details">
          <slot />
        </div>
      </div>
    );
  }
}
