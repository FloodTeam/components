import { Component, Prop, h } from "@stencil/core";
export class Fallback {
  render() {
    return (h("div", { class: "fallback-wrapper" },
      this.icon ? h("ion-icon", { name: this.icon }) : null,
      h("p", null, this.message)));
  }
  static get is() { return "floodteam-fallback"; }
  static get originalStyleUrls() { return {
    "$": ["fallback.css"]
  }; }
  static get styleUrls() { return {
    "$": ["fallback.css"]
  }; }
  static get properties() { return {
    "icon": {
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
        "text": "An icon to display above the fallback message"
      },
      "attribute": "icon",
      "reflect": false
    },
    "message": {
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
        "text": "The message to display as a fallback"
      },
      "attribute": "message",
      "reflect": false
    }
  }; }
}
