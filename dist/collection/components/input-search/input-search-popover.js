import { Component, Prop } from "@stencil/core";
export class InputSearchPopover {
  constructor() {
    this.results = [];
  }
  render() {
    return this.results.map(result => this.template(result));
  }
  static get is() { return "floodteam-input-search-popover"; }
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
    },
    "results": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "results",
      "reflect": false,
      "defaultValue": "[]"
    },
    "template": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(result) => any",
        "resolved": "(result: any) => any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
}
