import { Component, Event, Listen, Prop, State, Watch, h, Build, } from "@stencil/core";
export class InputAmount {
  constructor() {
    this.step = "0.01";
  }
  onChange(event) {
    this.formattedValue = this.formatCurrency(event.target.value);
  }
  onValueChange(newValue, oldValue) {
    if (newValue === oldValue)
      return false;
    this.formattedValue = this.formatCurrency(this.value);
  }
  formatCurrency(amount) {
    if (!amount || isNaN(parseFloat(amount))) {
      this.value = null;
      this.inputEl.value = null;
      return null;
    }
    const formattedAmount = Number(parseFloat((amount + "").replace(",", "")).toFixed(2));
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    document.querySelectorAll(".presets span").forEach((span) => {
      if (+formattedAmount ===
        +parseFloat((span.textContent + "")
          .replace(",", "")
          .replace("$", "")
          .replace(" ", "")).toFixed(2)) {
        span.classList.add("selected");
      }
      else {
        span.classList.remove("selected");
      }
    });
    this.value = formattedAmount;
    setTimeout(() => {
      this.ionInput.emit({
        name: this.name,
        value: formattedAmount,
      });
      this.ionChange.emit({
        name: this.name,
        value: formattedAmount,
      });
    }, 200);
    return formatter.format(formattedAmount).replace("$", "");
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.formattedValue = this.formatCurrency(this.value);
    }
  }
  selectPreset(preset) {
    this.formattedValue = this.formatCurrency(typeof preset === "string" ? preset : (preset === null || preset === void 0 ? void 0 : preset.value) ? preset.value : 0);
  }
  render() {
    return (h("ion-item", null,
      h("ion-icon", { name: "logo-usd", slot: "start" }),
      this.label && h("ion-label", { position: "stacked" }, this.label),
      this.presets && this.presets.length && (h("div", { class: "presets", slot: "end" }, this.presets.map((preset) => (h("span", { onClick: () => this.selectPreset(preset) }, typeof preset === "string"
        ? preset
        : (preset === null || preset === void 0 ? void 0 : preset.label)
          ? preset.label
          : (preset === null || preset === void 0 ? void 0 : preset.value)
            ? preset.value
            : ""))))),
      h("ion-input", { min: this.min, max: this.max, ref: (el) => (this.inputEl = el), disabled: this.disabled, inputmode: "decimal", type: "number", step: this.step, placeholder: this.placeholder, required: this.required, autofocus: this.autofocus, value: this.formattedValue })));
  }
  static get is() { return "floodteam-input-amount"; }
  static get originalStyleUrls() { return {
    "$": ["input-amount.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input-amount.css"]
  }; }
  static get properties() { return {
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
    "placeholder": {
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
      "attribute": "placeholder",
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
      "attribute": "required",
      "reflect": false
    },
    "presets": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "({ label?: string; value: any } | string)[]",
        "resolved": "(string | { label?: string; value: any; })[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "decimal": {
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
      "attribute": "decimal",
      "reflect": false
    },
    "autofocus": {
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
      "attribute": "autofocus",
      "reflect": false
    },
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
      "reflect": false
    },
    "min": {
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
      "attribute": "min",
      "reflect": false
    },
    "max": {
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
      "attribute": "max",
      "reflect": false
    },
    "step": {
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
      "attribute": "step",
      "reflect": false,
      "defaultValue": "\"0.01\""
    }
  }; }
  static get states() { return {
    "formattedValue": {}
  }; }
  static get events() { return [{
      "method": "ionInput",
      "name": "ionInput",
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
    }, {
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
      "propName": "value",
      "methodName": "onValueChange"
    }]; }
  static get listeners() { return [{
      "name": "ionBlur",
      "method": "onChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
