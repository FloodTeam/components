import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-thumbs-up",
  styleUrl: "thumbs-up.css",
  shadow: true
})
export class ThumbsUp implements ComponentInterface {
  /**
   * The size of the thumb
   */
  @Prop() size = "150px";
  /**
   * Start the animation
   */
  @Prop() animating = false;

  render() {
    return (
      <Host
        style={{
          "--floodteam-thumbs-up-size": this.size
        }}
      >
        <div
          class={{
            "thumbs-up-wrapper": true,
            animate: this.animating
          }}
        >
          <ion-icon name="thumbs-up" />
        </div>
      </Host>
    );
  }
}
