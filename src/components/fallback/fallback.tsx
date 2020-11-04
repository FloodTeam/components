import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-fallback",
  styleUrl: "fallback.css"
})
export class Fallback implements ComponentInterface {
  /**
   * An icon to display above the fallback message
   */
  @Prop() icon: string;
  /**
   * The message to display as a fallback
   */
  @Prop() message: string;

  render() {
    return (
      <div class="fallback-wrapper">
        {this.icon ? <ion-icon name={this.icon} /> : null}
        <p>{this.message}</p>
      </div>
    );
  }
}
