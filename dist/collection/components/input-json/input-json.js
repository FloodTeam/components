import { Build, Component, h, Prop } from "@stencil/core";
export class InputJson {
  constructor() {
    this.value = {};
    this.name = "json";
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
    }
  }
  render() {
    return (h("ion-item", { style: { overflow: "visible" } },
      this.label && h("ion-label", { position: "stacked" }, this.label),
      h("fireenjin-json-editor", { style: { width: "100%", marginTop: "15px" }, name: this.name, value: this.value ? this.value : {} })));
  }
  static get is() { return "floodteam-input-json"; }
  static get originalStyleUrls() { return {
    "$": ["input-json.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input-json.css"]
  }; }
  static get properties() { return {
    "value": {
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
      "attribute": "value",
      "reflect": false,
      "defaultValue": "{}"
    },
    "label": {
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
      "attribute": "label",
      "reflect": false
    },
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
      "reflect": false,
      "defaultValue": "\"json\""
    }
  }; }
}
