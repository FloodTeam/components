import { Component, Host, Prop, h } from "@stencil/core";
export class Checkmark {
  constructor() {
    /**
     * The size of the thumb
     */
    this.size = "150px";
    /**
     * Start the animation
     */
    this.animating = false;
  }
  render() {
    return (h(Host, { style: {
        "--floodteam-checkmark-size": this.size,
      } },
      h("div", { class: {
          "checkmark-wrapper": true,
          animate: this.animating,
        } },
        h("ion-icon", { name: "checkmark-circle" }))));
  }
  static get is() { return "floodteam-checkmark"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["checkmark.css"]
  }; }
  static get styleUrls() { return {
    "$": ["checkmark.css"]
  }; }
  static get properties() { return {
    "size": {
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
        "text": "The size of the thumb"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "\"150px\""
    },
    "animating": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Start the animation"
      },
      "attribute": "animating",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
