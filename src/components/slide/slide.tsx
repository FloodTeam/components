import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-slide"
})
export class Slide implements ComponentInterface {
  @Prop() name: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
