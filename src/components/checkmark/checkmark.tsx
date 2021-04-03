import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-checkmark",
  styleUrl: "checkmark.css",
  shadow: true,
})
export class Checkmark implements ComponentInterface {
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
          "--floodteam-checkmark-size": this.size,
        }}
      >
        <div
          class={{
            "checkmark-wrapper": true,
            animate: this.animating,
          }}
        >
          <ion-icon name="checkmark-circle" />
        </div>
      </Host>
    );
  }
}
