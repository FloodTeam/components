import { Component, Prop, h } from "@stencil/core";
export class ProgressCircle {
  constructor() {
    /**
     * The percent value of progress filled between 0 and 100
     */
    this.percent = 0;
    /**
     * The radius size of the circle in pixels
     */
    this.radius = 60;
    /**
     * The stroke thickness of the progress bar
     */
    this.stroke = 5;
  }
  // componentDidLoad() {
  //   let i = 0;
  //   const killInterval = setInterval(() => {
  //     this.percent = i;
  //     i++;
  //     if (i > 100) {
  //       clearInterval(killInterval);
  //     }
  //   }, 600);
  // }
  render() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    return [
      h("svg", { height: this.radius * 2, width: this.radius * 2 },
        h("circle", { id: "track", fill: "transparent", "stroke-dasharray": circumference, "stroke-width": this.stroke, r: normalizedRadius, cx: this.radius, cy: this.radius }),
        h("circle", { id: "progress", fill: "transparent", "stroke-dasharray": circumference, style: {
            strokeDashoffset: (circumference -
              (this.percent / 100) * circumference)
          }, "stroke-width": this.stroke, r: normalizedRadius, cx: this.radius, cy: this.radius })),
      h("div", { class: "slot-wrapper" },
        h("slot", null))
    ];
  }
  static get is() { return "floodteam-progress-circle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["progress-circle.css"]
  }; }
  static get styleUrls() { return {
    "$": ["progress-circle.css"]
  }; }
  static get properties() { return {
    "percent": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The percent value of progress filled between 0 and 100"
      },
      "attribute": "percent",
      "reflect": false,
      "defaultValue": "0"
    },
    "radius": {
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
        "text": "The radius size of the circle in pixels"
      },
      "attribute": "radius",
      "reflect": false,
      "defaultValue": "60"
    },
    "stroke": {
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
        "text": "The stroke thickness of the progress bar"
      },
      "attribute": "stroke",
      "reflect": false,
      "defaultValue": "5"
    }
  }; }
}
