import { Component, Element, Event, Listen, Method, Prop, State, Watch, h, forceUpdate, Build } from "@stencil/core";
import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.us";
export class Input {
  constructor() {
    this.autocomplete = "off";
    this.clearInput = false;
    this.multiple = false;
    this.readOnly = false;
    this.spellCheck = false;
    this.inputMode = "text";
    this.stripeElements = {};
    this.passwordVisible = false;
  }
  async onBlur() {
    const isValid = await this.checkValidity();
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
  }
  async getCardToken(options = {}) {
    return this.stripe.createToken(this.card, Object.assign({ address_country: "US", currency: "usd" }, options));
  }
  async setFocus() {
    this.input.focus();
  }
  async checkValidity(options) {
    if (this.required || (options && options.setValidationClass)) {
      await this.setValidationClass(options && options.validationClassOptions
        ? options.validationClassOptions
        : null);
    }
    return this.input
      ? this.input.checkValidity()
      : this.type === "card" &&
        this.cardValidity &&
        !this.cardValidity.empty &&
        this.cardValidity.complete &&
        !this.cardValidity.error
        ? true
        : false;
  }
  async clear() {
    this.type === "card"
      ? this.card.clear()
      : (this.inputEl.querySelector("ion-input").value = null);
  }
  async reportValidity() {
    const isValid = this.input ? this.input.reportValidity() : true;
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
    return isValid;
  }
  onValueChange() {
    if (!this.cleave) {
      return false;
    }
    this.cleave.setRawValue(this.value ? this.value : null);
  }
  async setValidationClass(options) {
    const classList = Object.values(this.itemEl.classList);
    if (classList.indexOf("invalid") >= 0) {
      this.itemEl.classList.remove("invalid");
    }
    if (classList.indexOf("valid") >= 0) {
      this.itemEl.classList.remove("valid");
    }
    if (this.type === "card") {
      if (this.cardValidity &&
        !this.cardValidity.empty &&
        !this.cardValidity.error) {
        this.itemEl.classList.add(this.cardValidity &&
          !this.cardValidity.empty &&
          this.cardValidity.complete &&
          !this.cardValidity.error
          ? "valid"
          : "invalid");
      }
    }
    else if (this.input) {
      const isValid = await this.input.checkValidity();
      if (!options ||
        !options.ignoreInvalid ||
        (options && options.ignoreInvalid && isValid)) {
        this.itemEl.classList.add(isValid ? "valid" : "invalid");
      }
    }
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      setTimeout(() => {
        this.input = this.inputEl.querySelector("input");
        this.inputType = this.type
          ? this.type === "phone"
            ? "tel"
            : this.type
          : "text";
        if (this.type === "phone") {
          this.cleave = new Cleave(this.input, {
            onValueChanged: e => {
              this.value = e.target.value;
              forceUpdate(this);
            },
            phone: true,
            phoneRegionCode: "US",
            delimiter: "-"
          });
        }
        else if (this.type === "hour") {
          this.cleave = new Cleave(this.input, {
            onValueChanged: e => {
              this.value = e.target.value;
              forceUpdate(this);
            },
            numericOnly: true,
            delimiter: ".",
            blocks: [2, 2]
          });
        }
        else if (this.type === "expiration") {
          this.cleave = new Cleave(this.input, {
            onValueChanged: e => {
              this.value = e.target.value;
              forceUpdate(this);
            },
            delimiter: "/",
            numericOnly: true,
            blocks: [2, 2]
          });
        }
        else if (this.type === "cvc") {
          this.cleave = new Cleave(this.input, {
            onValueChanged: e => {
              this.value = e.target.value;
              forceUpdate(this);
            },
            delimiter: "",
            numericOnly: true,
            blocks: [4]
          });
        }
        else if (this.type === "ssn") {
          this.cleave = new Cleave(this.input, {
            onValueChanged: e => {
              this.value = e.target.value;
              forceUpdate(this);
            },
            delimiter: "",
            numericOnly: true,
            blocks: [4]
          });
        }
        else if (this.type === "code") {
          this.cleave = new Cleave(this.input, {
            onValueChanged: e => {
              this.value = e.target.value;
              forceUpdate(this);
            },
            delimiter: "",
            numericOnly: true,
            blocks: [6]
          });
        }
        else if (this.type === "ein") {
          this.cleave = new Cleave(this.input, {
            onValueChanged: e => {
              this.value = e.target.value;
              forceUpdate(this);
            },
            numericOnly: true,
            blocks: [2, 7],
            delimiter: "-"
          });
        }
      }, 100);
    }
  }
  togglePassword(event) {
    event.stopPropagation();
    const value = this.input.value;
    this.passwordVisible = !this.passwordVisible;
    setTimeout(() => {
      this.value = value;
    }, 50);
  }
  initializeStripeElements() {
    if (!this.stripeKey) {
      console.log("Stripe Key prop is required to create card field.");
      return false;
    }
    this.stripe = Stripe(this.stripeKey);
    const elements = this.stripe.elements({
      fonts: this.stripeElements.fonts
        ? this.stripeElements.fonts
        : [
          {
            cssSrc: "https://fonts.googleapis.com/css?family=Open+Sans"
          }
        ]
    });
    const classes = {
      base: "native-input native-input-md"
    };
    const style = this.stripeElements.style
      ? this.stripeElements.style
      : {
        base: {
          color: "#000",
          fontFamily: '"Open Sans", arial, sans-serif',
          fontSize: "16px",
          "::placeholder": {
            color: "#999"
          }
        }
      };
    this.card = elements.create("card", {
      hidePostalCode: true,
      style,
      classes
    });
    this.card.mount(this.cardNumberEl);
    this.card.on("blur", event => {
      this.itemEl.classList.remove("item-has-focus", "item-input");
      this.ionBlur.emit({
        event,
        name: this.name ? this.name : "card",
        value: this.cardValidity && this.cardValidity.card
          ? this.cardValidity.card
          : null,
        validity: this.cardValidity &&
          !this.cardValidity.empty &&
          this.cardValidity.complete &&
          !this.cardValidity.error
          ? true
          : false
      });
    });
    this.card.on("change", event => {
      if (this.required) {
        this.setValidationClass(event);
      }
      this.cardValidity = event;
      const eventPayload = {
        event,
        name: this.name ? this.name : "card",
        value: event.card,
        validity: this.cardValidity &&
          !this.cardValidity.empty &&
          this.cardValidity.complete &&
          !this.cardValidity.error
          ? true
          : false
      };
      this.ionChange.emit(eventPayload);
      this.ionInput.emit(eventPayload);
    });
    this.card.on("focus", event => {
      this.itemEl.classList.add("item-has-focus", "item-input");
      this.ionFocus.emit({
        event,
        name: this.name ? this.name : "card",
        validity: this.cardValidity &&
          !this.cardValidity.empty &&
          this.cardValidity.complete &&
          !this.cardValidity.error
          ? true
          : false
      });
    });
  }
  dateToYearMonthDay(timestamp) {
    const d = new Date(+timestamp);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2)
      month = "0" + month;
    if (day.length < 2)
      day = "0" + day;
    return [year, month, day].join("-");
  }
  renderInput() {
    if (this.type === "card") {
      setTimeout(() => {
        this.initializeStripeElements();
      }, 200);
      return h("div", { id: "card-number", ref: el => (this.cardNumberEl = el) });
    }
    else if (this.type === "expiration") {
      return h("div", { id: "card-expiry" });
    }
    else if (this.type === "cvc") {
      return h("div", { id: "card-cvc" });
    }
    else {
      const inputType = this.inputType && !this.passwordVisible
        ? this.inputType
        : this.type === "phone" ||
          this.type === "hours" ||
          this.type === "date"
          ? "tel"
          : "text";
      return (h("ion-input", { type: inputType, name: this.name, spellcheck: this.spellCheck, readonly: this.readOnly, multiple: this.multiple, clearInput: this.clearInput, inputMode: this.inputMode, pattern: this.pattern
          ? this.pattern
          : this.type === "phone"
            ? "[0-9]{3}-[0-9]{3}-[0-9]{4}"
            : this.type === "ssn"
              ? "[0-9]{4}"
              : this.type === "date"
                ? "[0-9]{1,2}/[0-9]{1,2}/[0-9]{2,4}"
                : this.type === "code"
                  ? "[0-9]{6}"
                  : this.type === "expiration"
                    ? "[0-9]{2}/[0-9]{2}"
                    : this.type === "cvc"
                      ? "[0-9]{3,4}"
                      : null, value: this.type === "date"
          ? this.dateToYearMonthDay(this.value)
          : this.value, placeholder: this.placeholder, required: this.required, autofocus: this.autofocus, autocomplete: this.autocomplete, autocorrect: this.autocorrect, autocapitalize: this.autocapitalize, minlength: this.type === "phone" ? 12 : this.minlength, maxlength: this.type === "phone" ? 12 : this.maxlength, disabled: this.disabled, min: this.min, max: this.max, step: this.step }));
    }
  }
  render() {
    return (h("ion-item", { ref: el => (this.itemEl = el), lines: "full", class: {
        "input-password item-input": this.inputType === "password",
        "input-card": this.inputType === "card",
        "has-info-bubble": !!this.info
      } },
      this.iconLeft && h("ion-icon", { name: this.iconLeft, slot: "start" }),
      this.label && (h("ion-label", { position: "stacked" },
        h("span", null, this.label))),
      this.renderInput(),
      this.type === "password" && (h("div", { class: "input-icon" },
        h("ion-icon", { name: this.passwordVisible ? "eye-off" : "eye", onClick: (event) => this.togglePassword(event) }))),
      this.iconRight && h("ion-icon", { name: this.iconRight, slot: "start" })));
  }
  static get is() { return "floodteam-input"; }
  static get originalStyleUrls() { return {
    "$": ["input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "stripeKey": {
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
      "attribute": "stripe-key",
      "reflect": false
    },
    "type": {
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
      "attribute": "type",
      "reflect": false
    },
    "placeholder": {
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
      "attribute": "placeholder",
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
    "autocomplete": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"on\" | \"off\"",
        "resolved": "\"off\" | \"on\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "autocomplete",
      "reflect": false,
      "defaultValue": "\"off\""
    },
    "autocapitalize": {
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
      "attribute": "autocapitalize",
      "reflect": false
    },
    "autocorrect": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"on\" | \"off\"",
        "resolved": "\"off\" | \"on\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "autocorrect",
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
    "minlength": {
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
      "attribute": "minlength",
      "reflect": false
    },
    "maxlength": {
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
      "attribute": "maxlength",
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
    "info": {
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
      "attribute": "info",
      "reflect": false
    },
    "edit": {
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
      "attribute": "edit",
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
    "iconLeft": {
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
      "attribute": "icon-left",
      "reflect": false
    },
    "iconRight": {
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
      "attribute": "icon-right",
      "reflect": false
    },
    "silence": {
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
      "attribute": "silence",
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
      "reflect": false
    },
    "actionOptions": {
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
      "attribute": "action-options",
      "reflect": false
    },
    "pattern": {
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
      "attribute": "pattern",
      "reflect": false
    },
    "clearInput": {
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
      "attribute": "clear-input",
      "reflect": false,
      "defaultValue": "false"
    },
    "multiple": {
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
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "readOnly": {
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
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "spellCheck": {
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
      "attribute": "spell-check",
      "reflect": false,
      "defaultValue": "false"
    },
    "inputMode": {
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
      "attribute": "input-mode",
      "reflect": false,
      "defaultValue": "\"text\""
    },
    "stripeElements": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\r\n    style?: any;\r\n    fonts?: any[];\r\n  }",
        "resolved": "{ style?: any; fonts?: any[]; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{}"
    }
  }; }
  static get states() { return {
    "showInfo": {},
    "passwordVisible": {},
    "cleave": {},
    "input": {},
    "inputType": {}
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
    }, {
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
      "method": "ionBlur",
      "name": "ionBlur",
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
      "method": "ionFocus",
      "name": "ionFocus",
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
    "getCardToken": {
      "complexType": {
        "signature": "(options?: { name?: string; address_line1?: string; address_line2?: string; address_city?: string; address_state?: string; address_zip?: string; address_country?: string; currency?: string; }) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setFocus": {
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
    },
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
    "clear": {
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
    }
  }; }
  static get elementRef() { return "inputEl"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "onValueChange"
    }]; }
  static get listeners() { return [{
      "name": "ionBlur",
      "method": "onBlur",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
