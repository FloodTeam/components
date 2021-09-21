import { Component, Event, Prop, h, Build, } from "@stencil/core";
import ClipboardJS from "clipboard";
export class Share {
  constructor() {
    this.options = { url: null };
  }
  openPopup(event, type) {
    event.preventDefault();
    let popupUrl;
    if (type === "facebook") {
      const appId = "194800994302107";
      popupUrl = `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${this.options.url}`;
    }
    else if (type === "google") {
      popupUrl = `https://plus.google.com/share?url=${this.options.url}`;
    }
    else if (type === "twitter") {
      popupUrl = `https://twitter.com/intent/tweet?url=${this.options.url}&text=${this.options.text}`;
    }
    else {
      return false;
    }
    this.floodteamShareClose.emit({ event, type });
    window.open(popupUrl, "Share Floodteam", type === "google" ? "height=600,width=400" : "height=400,width=600");
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      new ClipboardJS(this.copyItemEl);
    }
  }
  render() {
    var _a;
    return (h("ion-list", null,
      h("ion-item", { class: "share-twitter", onClick: (event) => this.openPopup(event, "twitter") },
        h("ion-icon", { slot: "end", name: "logo-twitter" }),
        "Share on Twitter"),
      h("ion-item", { class: "share-facebook", onClick: (event) => this.openPopup(event, "facebook") },
        h("ion-icon", { slot: "end", name: "logo-facebook" }),
        "Share on Facebook"),
      h("ion-item", { ref: (el) => (this.copyItemEl = el), class: "share-clipboard", "data-clipboard-text": (_a = this.options) === null || _a === void 0 ? void 0 : _a.url },
        h("ion-icon", { slot: "end", name: "clipboard" }),
        "Copy to Clipboard")));
  }
  static get is() { return "floodteam-share"; }
  static get originalStyleUrls() { return {
    "$": ["share.css"]
  }; }
  static get styleUrls() { return {
    "$": ["share.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\r\n    url: string;\r\n    text?: string;\r\n    title?: string;\r\n  }",
        "resolved": "{ url: string; text?: string; title?: string; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{ url: null }"
    }
  }; }
  static get events() { return [{
      "method": "floodteamShareClose",
      "name": "floodteamShareClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
