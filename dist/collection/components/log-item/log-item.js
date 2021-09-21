import { Component, Prop, h } from "@stencil/core";
import { format } from "date-fns";
export class LogItem {
  formatDate(timestamp) {
    return format(new Date(Date.parse(timestamp)), "MM/dd/yyyy @ hh:mm aaa");
  }
  render() {
    return (h("ion-item", { lines: "full" },
      h("ion-label", { class: "ion-text-wrap" },
        h("ion-grid", null,
          h("ion-row", null,
            h("ion-col", null,
              h("h2", null,
                this.type,
                " - ",
                this.name,
                " ",
                this.resolveTime ? `(${this.resolveTime}ms)` : "")),
            h("ion-col", { style: {
                display: "flex",
                justifyContent: "flex-end",
              } },
              h("small", { style: {
                  color: "var(--ion-color-medium)",
                } }, this.formatDate(this.createdAt)))),
          h("ion-row", null,
            h("ion-col", null,
              h("h3", null, "Input"),
              h("floodteam-json-viewer", { innerHTML: typeof this.input === "object"
                  ? JSON.stringify(this.input)
                  : this.input })),
            h("ion-col", null,
              h("h3", null, "Output"),
              h("floodteam-json-viewer", { innerHTML: typeof this.output === "object"
                  ? JSON.stringify(this.output)
                  : this.output })))))));
  }
  static get is() { return "floodteam-log-item"; }
  static get originalStyleUrls() { return {
    "$": ["log-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["log-item.css"]
  }; }
  static get properties() { return {
    "type": {
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
      "attribute": "type",
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
    "resolveTime": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "resolve-time",
      "reflect": false
    },
    "input": {
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
      "attribute": "input",
      "reflect": false
    },
    "output": {
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
      "attribute": "output",
      "reflect": false
    },
    "createdAt": {
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
      "attribute": "created-at",
      "reflect": false
    }
  }; }
}
