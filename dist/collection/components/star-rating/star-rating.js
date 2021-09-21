import { Component, Element, Event, Method, Listen, Prop, State, Watch, h, Build } from "@stencil/core";
export class StarRating {
  constructor() {
    this.disabled = false;
    this.name = "rating";
    this.maxRating = 5;
  }
  onInput(event) {
    console.log(event);
    if (this.disabled) {
      return false;
    }
    this.currentRating = parseFloat(event.target.value);
    this.ftStarRating.emit({
      event,
      name: this.name,
      value: this.currentRating
    });
  }
  async setCurrentRating(rating) {
    this.currentRating = parseFloat(rating);
  }
  onValueChange() {
    this.currentRating = parseFloat(this.value);
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.currentRating = parseFloat(this.value ? this.value : "0");
      this.starRatingEl.style.setProperty("--star-rating-max", `${this.maxRating}`);
    }
  }
  render() {
    return (h("div", { class: this.disabled ? "star-rating is-disabled" : "star-rating" }, [...Array(this.maxRating)].map((_radio, index) => [
      h("label", { class: this.currentRating >= this.maxRating - index - 0.5
          ? "star-active"
          : null },
        h("input", { type: "radio", name: this.name, value: this.maxRating - index, onInput: event => this.onInput(event) }),
        "\u2605")
    ])));
  }
  static get is() { return "floodteam-star-rating"; }
  static get originalStyleUrls() { return {
    "$": ["star-rating.css"]
  }; }
  static get styleUrls() { return {
    "$": ["star-rating.css"]
  }; }
  static get properties() { return {
    "disabled": {
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
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
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
      "defaultValue": "\"rating\""
    },
    "maxRating": {
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
      "attribute": "max-rating",
      "reflect": false,
      "defaultValue": "5"
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get states() { return {
    "currentRating": {}
  }; }
  static get events() { return [{
      "method": "ftStarRating",
      "name": "ftStarRating",
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
    "setCurrentRating": {
      "complexType": {
        "signature": "(rating: any) => Promise<void>",
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
  static get elementRef() { return "starRatingEl"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "onValueChange"
    }]; }
  static get listeners() { return [{
      "name": "input",
      "method": "onInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
