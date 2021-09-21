import { Component, Element, Listen, Prop, State, h, Method, Event } from "@stencil/core";
export class FlipCard {
  constructor() {
    this.flipped = false;
    this.hideRefresh = false;
    this.isFlipped = false;
  }
  async flip(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.flipped = !this.flipped;
    this.floodteamFlip.emit({
      flipped: this.flipped
    });
  }
  onSwipeLeft(event) {
    if (event.target &&
      event.target.className &&
      event.target.className.indexOf("flip-card") >= 0) {
      this.flip();
    }
  }
  onSwipeRight(event) {
    if (event.target &&
      event.target.className &&
      event.target.className.indexOf("flip-card") >= 0) {
      this.flip();
    }
  }
  render() {
    return (h("div", { class: this.flipped ? "flip-card flipped" : "flip-card", "data-swipe-threshold": "10" },
      h("slot", { name: "before" }),
      h("div", { class: "flip-card-inner" },
        h("div", { class: "flip-card-front", style: this.frontImage
            ? { backgroundImage: `url('${this.frontImage}')` }
            : null },
          h("slot", { name: "front" })),
        h("div", { class: "flip-card-back", style: this.backImage
            ? { backgroundImage: `url('${this.backImage}')` }
            : null },
          h("slot", { name: "back" }))),
      !this.hideRefresh && (h("span", { class: "badge-top-left", onClick: event => this.flip(event) },
        h("ion-icon", { name: "refresh" }))),
      h("slot", { name: "after" })));
  }
  static get is() { return "floodteam-flip-card"; }
  static get originalStyleUrls() { return {
    "$": ["flip-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["flip-card.css"]
  }; }
  static get properties() { return {
    "frontImage": {
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
      "attribute": "front-image",
      "reflect": false
    },
    "backImage": {
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
      "attribute": "back-image",
      "reflect": false
    },
    "flipped": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "flipped",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideRefresh": {
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
      "attribute": "hide-refresh",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "isFlipped": {}
  }; }
  static get events() { return [{
      "method": "floodteamFlip",
      "name": "floodteamFlip",
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
  static get methods() { return {
    "flip": {
      "complexType": {
        "signature": "(event?: any) => Promise<void>",
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
  static get elementRef() { return "flipCardEl"; }
  static get listeners() { return [{
      "name": "swiped-left",
      "method": "onSwipeLeft",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "swiped-right",
      "method": "onSwipeRight",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
