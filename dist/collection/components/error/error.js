import { Component, Prop, h } from "@stencil/core";
export class Error {
  constructor() {
    /**
     * The color of the component
     */
    this.color = "danger";
    /**
     * The icon to use
     */
    this.iconName = "alert-circle-outline";
  }
  render() {
    return (h("ion-item", { role: "alert", lines: "none" },
      h("ion-icon", { name: this.iconName, color: this.color, slot: "start" }),
      h("ion-label", { color: this.color, class: "ion-text-wrap" },
        this.message,
        h("slot", null))));
  }
  static get is() { return "floodteam-error"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["error.css"]
  }; }
  static get styleUrls() { return {
    "$": ["error.css"]
  }; }
  static get properties() { return {
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
        "text": "The error message to display"
      },
      "attribute": "message",
      "reflect": false
    },
    "color": {
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
        "text": "The color of the component"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "\"danger\""
    },
    "iconName": {
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
        "text": "The icon to use"
      },
      "attribute": "icon-name",
      "reflect": false,
      "defaultValue": "\"alert-circle-outline\""
    }
  }; }
}
