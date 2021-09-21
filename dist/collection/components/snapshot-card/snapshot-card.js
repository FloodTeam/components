import { Component, Event, Prop, h, } from "@stencil/core";
export class SnapshotCard {
  constructor() {
    this.active = false;
    this.buttonProps = {};
    this.disableShrink = false;
  }
  render() {
    return (h("ion-card", { class: {
        widget: true,
        active: this.active,
        "disable-shrink": this.disableShrink,
      }, href: !this.buttonText && this.href ? this.href : null },
      h("div", { class: "widget__photo", onClick: (event) => this.floodteamClick.emit({ event }), style: this.photo ? { backgroundImage: `url('${this.photo}')` } : null }),
      h("slot", { name: "before" }),
      this.buttonText ? (h("ion-button", { class: "widget__button", href: this.href }, this.buttonText)) : null,
      h("div", { class: "widget__details" },
        h("slot", null))));
  }
  static get is() { return "floodteam-snapshot-card"; }
  static get originalStyleUrls() { return {
    "$": ["snapshot-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["snapshot-card.css"]
  }; }
  static get properties() { return {
    "href": {
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
      "attribute": "href",
      "reflect": false
    },
    "photo": {
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
      "attribute": "photo",
      "reflect": false
    },
    "buttonText": {
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
      "attribute": "button-text",
      "reflect": false
    },
    "active": {
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
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    },
    "buttonProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{}"
    },
    "disableShrink": {
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
      "attribute": "disable-shrink",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "floodteamClick",
      "name": "floodteamClick",
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
