import { Component, Prop, h } from "@stencil/core";
export class TmgTab {
  constructor() {
    this.selected = false;
  }
  render() {
    return (h("div", { class: {
        "tab-selected": this.selected,
        "tab-deselected": !this.selected,
        "tab-wrapper": true,
      } },
      h("slot", null)));
  }
  static get is() { return "floodteam-tab"; }
  static get originalStyleUrls() { return {
    "$": ["tab.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tab.css"]
  }; }
  static get properties() { return {
    "tab": {
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
      "attribute": "tab",
      "reflect": false
    },
    "selected": {
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
        "text": ""
      },
      "attribute": "selected",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
