import { Component, Prop, h } from "@stencil/core";
export class JobProgress {
  constructor() {
    this.name = "status";
    this.value = "respond";
    this.statuses = ["respond", "evaluate", "map", "dry", "review"];
    this.color = "success";
    this.scrollable = true;
  }
  render() {
    var _a;
    return (h("ion-segment", { scrollable: this.scrollable, color: this.color, value: this.value ? this.value : "respond" }, (((_a = this.statuses) === null || _a === void 0 ? void 0 : _a.length) ? this.statuses : []).map((status, index) => {
      return (h("ion-segment-button", { class: index <
          this.statuses.indexOf(this.value ? this.value : "respond")
          ? "completed"
          : this.value === status
            ? "current"
            : "", value: status },
        h("ion-label", null, status)));
    })));
  }
  static get is() { return "floodteam-job-progress"; }
  static get originalStyleUrls() { return {
    "$": ["job-progress.css"]
  }; }
  static get styleUrls() { return {
    "$": ["job-progress.css"]
  }; }
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
      "reflect": false,
      "defaultValue": "\"status\""
    },
    "value": {
      "type": "string",
      "mutable": true,
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
      "attribute": "value",
      "reflect": false,
      "defaultValue": "\"respond\""
    },
    "statuses": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[\"respond\", \"evaluate\", \"map\", \"dry\", \"review\"]"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string",
        "references": {
          "Color": {
            "location": "import",
            "path": "@ionic/core"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "\"success\""
    },
    "scrollable": {
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
      "attribute": "scrollable",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
}
