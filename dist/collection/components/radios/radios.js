import { Component, Event, Prop, State, Watch, h, } from "@stencil/core";
export class Radios {
  constructor() {
    this.lines = "full";
    this.selected = 0;
  }
  onSelectedChange() {
    setTimeout(() => {
      this.setSelectedIndex();
    }, 50);
  }
  onValueChange() {
    setTimeout(() => {
      this.setSelectedValue();
    }, 50);
  }
  async getOptionIndex(str) {
    if (!this.options || !this.options.length)
      return false;
    let selectedIndex = 0;
    let i = 0;
    for (const option of this.options) {
      if (option.value === str) {
        selectedIndex = i;
        break;
      }
      i = i + 1;
    }
    this.selected = this.selectedIndex;
    return selectedIndex;
  }
  setSelectedValue() {
    let index = 0;
    for (const option of this.options) {
      if (option.value === this.value) {
        this.selected = index;
      }
      index = index + 1;
    }
    this.ionChange.emit({
      value: this.value,
      name: this.name,
    });
  }
  setSelectedIndex() {
    this.selectedIndex = this.selected;
    this.value = this.options[this.selected].value;
    this.ionChange.emit({
      value: this.value,
      name: this.name,
    });
  }
  componentWillLoad() {
    this.setSelectedIndex();
  }
  selectOption(index, option) {
    this.value = typeof option.value !== "undefined" ? option.value : null;
    this.selectedIndex = index;
    if (!this.value) {
      setTimeout(() => {
        this.setSelectedValue();
      }, 50);
    }
  }
  render() {
    return (h("ion-item", { lines: this.lines },
      h("ion-label", { position: "stacked" }, this.label),
      h("ul", null, this.options.map((radio, index) => (h("li", { onClick: () => this.selectOption(index, radio) },
        radio.name,
        index === this.selectedIndex ? (h("ion-icon", { name: "checkmark-circle" })) : (h("div", { class: "empty-circle" }))))))));
  }
  static get is() { return "floodteam-radios"; }
  static get originalStyleUrls() { return {
    "$": ["radios.css"]
  }; }
  static get styleUrls() { return {
    "$": ["radios.css"]
  }; }
  static get properties() { return {
    "label": {
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
      "attribute": "label",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
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
    },
    "required": {
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
        "text": ""
      },
      "attribute": "required",
      "reflect": false
    },
    "options": {
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
        "text": ""
      },
      "attribute": "options",
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
    "lines": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"full\" | \"inset\" | \"none\"",
        "resolved": "\"full\" | \"inset\" | \"none\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "lines",
      "reflect": false,
      "defaultValue": "\"full\""
    },
    "selected": {
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
        "text": ""
      },
      "attribute": "selected",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "selectedIndex": {}
  }; }
  static get events() { return [{
      "method": "ionChange",
      "name": "ionChange",
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
  static get watchers() { return [{
      "propName": "selected",
      "methodName": "onSelectedChange"
    }, {
      "propName": "value",
      "methodName": "onValueChange"
    }]; }
}
