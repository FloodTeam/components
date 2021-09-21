var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Event, Prop, h, Listen, Method, } from "@stencil/core";
import Debounce from "debounce-decorator";
import { popoverController } from "@ionic/core";
import pathToValue from "../../helpers/pathToValue";
export class InputSearch {
  constructor() {
    this.type = "text";
    this.searchParams = {};
    this.disableSearch = false;
    this.mode = "popover";
    this.results = [];
  }
  async checkValidity(options) {
    if (this.required || (options && options.setValidationClass)) {
      await this.setValidationClass(options && options.validationClassOptions
        ? options.validationClassOptions
        : null);
    }
    return this.inputEl
      ? await (await this.inputEl.getInputElement()).checkValidity()
      : true;
  }
  async reportValidity() {
    const isValid = this.inputEl
      ? await (await this.inputEl.getInputElement()).reportValidity()
      : true;
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
    return isValid;
  }
  async onBlur() {
    const isValid = await this.checkValidity();
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
  }
  async onSuccess(event) {
    var _a, _b;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.endpoint) !== this.endpoint || !((_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.data))
      return;
    this.results = await pathToValue(event.detail.data, this.resultsKey ? this.resultsKey : "searchUsers.results");
    console.log(this.results);
    if (this.mode === "popover") {
      this.resultsPopover = await popoverController.create({
        translucent: true,
        showBackdrop: false,
        event: event.detail.event,
        component: "floodteam-input-search-popover",
        componentProps: {
          results: this.results,
          template: this.template,
        },
      });
      this.resultsPopover.present();
    }
  }
  onInput(event) {
    var _a, _b;
    if (this.disableSearch || ((_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.length) <= 1)
      return;
    this.fireenjinFetch.emit({
      event,
      endpoint: this.endpoint,
      params: {
        data: Object.assign({ query: event.target.value }, this.searchParams),
      },
      dataPropsMap: this.dataPropsMap,
    });
  }
  async clearResults() {
    return (this.results = []);
  }
  async closePopover() {
    return this.resultsPopover.dismiss();
  }
  async openPopover() {
    return this.resultsPopover.present();
  }
  async setValidationClass(options) {
    const classList = Object.values(this.itemEl.classList);
    if (classList.indexOf("invalid") >= 0) {
      this.itemEl.classList.remove("invalid");
    }
    if (classList.indexOf("valid") >= 0) {
      this.itemEl.classList.remove("valid");
    }
    const isValid = await (await this.inputEl.getInputElement()).checkValidity();
    if (!options ||
      !options.ignoreInvalid ||
      (options && options.ignoreInvalid && isValid)) {
      this.itemEl.classList.add(isValid ? "valid" : "invalid");
    }
  }
  render() {
    var _a;
    return [
      h("ion-item", { class: "search-input", ref: (el) => (this.itemEl = el), onClick: (event) => this.onInput(event) },
        h("slot", { name: "start" }),
        this.iconStart && h("ion-icon", { name: this.iconStart, slot: "start" }),
        this.label && h("ion-label", { position: "stacked" }, this.label),
        h("ion-input", { onInput: (event) => this.onInput(event), ref: (el) => (this.inputEl = el), disabled: this.disabled, type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, autofocus: this.autofocus, value: this.value }),
        this.iconEnd && h("ion-icon", { name: this.iconEnd, slot: "end" }),
        h("slot", { name: "end" })),
      this.mode === "inline" && ((_a = this.results) === null || _a === void 0 ? void 0 : _a.length)
        ? this.results.map((result) => this.template(result))
        : null,
    ];
  }
  static get is() { return "floodteam-input-search"; }
  static get originalStyleUrls() { return {
    "$": ["input-search.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input-search.css"]
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
    "endpoint": {
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
      "attribute": "endpoint",
      "reflect": false
    },
    "dataPropsMap": {
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
      "attribute": "data-props-map",
      "reflect": false
    },
    "template": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(result) => any",
        "resolved": "(result: any) => any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextFieldTypes",
        "resolved": "\"date\" | \"datetime-local\" | \"email\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\" | \"week\"",
        "references": {
          "TextFieldTypes": {
            "location": "import",
            "path": "@ionic/core"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"text\""
    },
    "searchParams": {
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
      "attribute": "search-params",
      "reflect": false,
      "defaultValue": "{}"
    },
    "disableSearch": {
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
      "attribute": "disable-search",
      "reflect": false,
      "defaultValue": "false"
    },
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"popover\" | \"inline\"",
        "resolved": "\"inline\" | \"popover\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "\"popover\""
    },
    "iconEnd": {
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
      "attribute": "icon-end",
      "reflect": false
    },
    "iconStart": {
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
      "attribute": "icon-start",
      "reflect": false
    },
    "results": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "resultsKey": {
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
      "attribute": "results-key",
      "reflect": false
    }
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
      "method": "fireenjinFetch",
      "name": "fireenjinFetch",
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
    "checkValidity": {
      "complexType": {
        "signature": "(options?: { setValidationClass?: boolean; validationClassOptions?: { ignoreInvalid?: boolean; }; }) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "reportValidity": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearResults": {
      "complexType": {
        "signature": "() => Promise<any[]>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any[]>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "closePopover": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "openPopover": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
  static get listeners() { return [{
      "name": "ionBlur",
      "method": "onBlur",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fireenjinSuccess",
      "method": "onSuccess",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
__decorate([
  Debounce(1000)
], InputSearch.prototype, "onInput", null);
