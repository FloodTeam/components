import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-tab",
  styleUrl: "tab.css",
})
export class TmgTab implements ComponentInterface {
  @Prop() tab: string;
  @Prop() selected = false;

  render() {
    return (
      <div
        class={{
          "tab-selected": this.selected,
          "tab-deselected": !this.selected,
          "tab-wrapper": true,
        }}
      >
        <slot />
      </div>
    );
  }
}
