import { Component, Host, Prop, h } from "@stencil/core";
export class Slide {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "floodteam-slide"; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
}
