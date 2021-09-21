import { Component, Element, Method, Prop, Watch, h, } from "@stencil/core";
export class ProgressBar {
  constructor() {
    /**
     * The percent of the progress bar that will be filled
     */
    this.percent = 0;
  }
  /**
   * Set the progress bar completion percentage
   */
  async setPercent(percent) {
    this.progressBarEl.style.setProperty("--floodteam-progress-bar-fill-width", `${percent >= 100 ? 100 : percent <= 0 ? 0 : percent}%`);
    return percent;
  }
  onPercentUpdate() {
    this.setPercent(this.percent);
  }
  componentDidLoad() {
    this.setPercent(this.percent);
  }
  render() {
    return h("div", { class: "progress-bar-wrapper" });
  }
  static get is() { return "floodteam-progress-bar"; }
  static get originalStyleUrls() { return {
    "$": ["progress-bar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["progress-bar.css"]
  }; }
  static get properties() { return {
    "percent": {
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
        "text": "The percent of the progress bar that will be filled"
      },
      "attribute": "percent",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get methods() { return {
    "setPercent": {
      "complexType": {
        "signature": "(percent: number) => Promise<number>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<number>"
      },
      "docs": {
        "text": "Set the progress bar completion percentage",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "progressBarEl"; }
  static get watchers() { return [{
      "propName": "percent",
      "methodName": "onPercentUpdate"
    }]; }
}
