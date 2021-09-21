import { Build, Component, h, Prop } from "@stencil/core";
export class Toggle {
  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
    }
  }
  render() {
    return (h("ion-item", null,
      this.label && h("ion-label", null, this.label),
      h("ion-toggle", { color: "success", name: this.name, checked: !!this.value })));
  }
  static get is() { return "floodteam-toggle"; }
  static get originalStyleUrls() { return {
    "$": ["toggle.css"]
  }; }
  static get styleUrls() { return {
    "$": ["toggle.css"]
  }; }
  static get properties() { return {
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
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    }
  }; }
}
