import { Component, Prop, h } from "@stencil/core";
export class ProgressTimeline {
  constructor() {
    /**
     * The major events on the timeline
     */
    this.events = [];
  }
  render() {
    return (h("div", { class: {
        timeline: true
      } }, this.events.map(event => (h("div", { class: {
        event: true,
        complete: event.complete
      } },
      h("div", { class: "details" },
        h("small", null, event.timestamp),
        h("b", null, event.name)))))));
  }
  static get is() { return "floodteam-progress-timeline"; }
  static get originalStyleUrls() { return {
    "$": ["progress-timeline.css"]
  }; }
  static get styleUrls() { return {
    "$": ["progress-timeline.css"]
  }; }
  static get properties() { return {
    "events": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The major events on the timeline"
      },
      "attribute": "events",
      "reflect": false,
      "defaultValue": "[]"
    }
  }; }
}
