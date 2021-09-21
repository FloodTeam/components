import { Component, Element, Prop, h, Method, } from "@stencil/core";
import JSONFormatter from "json-formatter-js";
export class JsonViewer {
  constructor() {
    this.watcher = false;
    this.openDepth = 1;
  }
  async formatStringJSON(str) {
    if (!str || !JSON.parse(str))
      return;
    const formatter = new JSONFormatter(JSON.parse(str), this.openDepth, {});
    this.jsonViewerEl.innerHTML = "";
    const codeEl = document.createElement("code");
    codeEl.appendChild(formatter.render());
    this.jsonViewerEl.appendChild(codeEl);
  }
  connectedCallback() {
    if (!this.watcher)
      return;
    this.timer = window.setInterval(() => {
      try {
        if (JSON.parse(this.jsonViewerEl.innerText))
          this.formatStringJSON(this.jsonViewerEl.innerText);
      }
      catch (e) {
        // No need to log
      }
    }, 250);
  }
  disconnectedCallback() {
    if (!this.watcher)
      return;
    window.clearInterval(this.timer);
  }
  componentDidLoad() {
    setTimeout(() => {
      try {
        if (JSON.parse(this.jsonViewerEl.innerText))
          this.formatStringJSON(this.jsonViewerEl.innerText);
      }
      catch (e) {
        // No need to log
      }
    }, 200);
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "floodteam-json-viewer"; }
  static get originalStyleUrls() { return {
    "$": ["json-viewer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["json-viewer.css"]
  }; }
  static get properties() { return {
    "watcher": {
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
      "attribute": "watcher",
      "reflect": false,
      "defaultValue": "false"
    },
    "openDepth": {
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
      "attribute": "open-depth",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
  static get methods() { return {
    "formatStringJSON": {
      "complexType": {
        "signature": "(str: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "jsonViewerEl"; }
}
