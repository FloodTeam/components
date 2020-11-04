import {
  Component,
  ComponentInterface,
  Element,
  EventEmitter,
  Listen,
  Prop,
  State,
  h,
  Method,
  Event
} from "@stencil/core";

@Component({
  tag: "floodteam-flip-card",
  styleUrl: "flip-card.css"
})
export class FlipCard implements ComponentInterface {
  @Element() flipCardEl: any;

  @Event() floodteamFlip: EventEmitter;

  @Prop() frontImage: string;
  @Prop() backImage: string;
  @Prop({ mutable: true }) flipped = false;
  @Prop() hideRefresh = false;

  @State() isFlipped = false;

  @Method()
  async flip(event?) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.flipped = !this.flipped;
    this.floodteamFlip.emit({
      flipped: this.flipped
    });
  }

  @Listen("swiped-left", { target: "body" })
  onSwipeLeft(event) {
    if (
      event.target &&
      event.target.className &&
      event.target.className.indexOf("flip-card") >= 0
    ) {
      this.flip();
    }
  }

  @Listen("swiped-right", { target: "body" })
  onSwipeRight(event) {
    if (
      event.target &&
      event.target.className &&
      event.target.className.indexOf("flip-card") >= 0
    ) {
      this.flip();
    }
  }

  render() {
    return (
      <div
        class={this.flipped ? "flip-card flipped" : "flip-card"}
        data-swipe-threshold="10"
      >
        <slot name="before" />
        <div class="flip-card-inner">
          <div
            class="flip-card-front"
            style={
              this.frontImage
                ? { backgroundImage: `url('${this.frontImage}')` }
                : null
            }
          >
            <slot name="front" />
          </div>
          <div
            class="flip-card-back"
            style={
              this.backImage
                ? { backgroundImage: `url('${this.backImage}')` }
                : null
            }
          >
            <slot name="back" />
          </div>
        </div>
        {!this.hideRefresh && (
          <span class="badge-top-left" onClick={event => this.flip(event)}>
            <ion-icon name="refresh" />
          </span>
        )}
        <slot name="after" />
      </div>
    );
  }
}
