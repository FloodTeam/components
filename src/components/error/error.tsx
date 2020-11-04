import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-error",
  styleUrl: "error.css",
  shadow: true
})
export class Error implements ComponentInterface {
  /**
   * The error message to display
   */
  @Prop() message: string;
  /**
   * The color of the component
   */
  @Prop() color = "danger";
  /**
   * The icon to use
   */
  @Prop() iconName = "alert-circle-outline";

  render() {
    return (
      <ion-item role="alert" lines="none">
        <ion-icon name={this.iconName} color={this.color} slot="start" />
        <ion-label color={this.color} class="ion-text-wrap">
          {this.message}
        </ion-label>
      </ion-item>
    );
  }
}
