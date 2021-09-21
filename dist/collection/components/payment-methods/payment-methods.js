import { Component, Event, Listen, Prop, h, State, } from "@stencil/core";
export class PaymentMethods {
  constructor() {
    this.sliderOptions = {
      initialSlide: 0,
      autoHeight: true,
      allowTouchMove: false,
      simulateTouch: false,
      autoplay: false,
    };
    this.address = {};
    this.payType = "card";
    this.errors = [];
    this.currentSlideIndex = 0;
  }
  async onSlideChange() {
    this.currentSlideIndex = await this.sliderEl.getActiveIndex();
    this.sliderEl.updateAutoHeight();
  }
  async onReset(event) {
    this.errors = [];
    if (event.target.name === "cardForm")
      await this.cardInputEl.clear();
    this.back();
  }
  async onSubmit(event) {
    this.errors = [];
    if (event.detail.endpoint === "cardForm" ||
      event.target.name === "bankingForm" ||
      event.detail.endpoint === "addPaymentMethod") {
      return false;
    }
    this.next();
  }
  onError(event) {
    setTimeout(() => {
      this.errors = event.detail.error.response.errors.map((err) => err.message);
    }, 100);
  }
  async onSuccess(event) {
    if (event.detail.endpoint === "addPaymentMethod") {
      setTimeout(() => {
        this.checkmarkEl.animating = true;
      }, 500);
      this.next();
    }
  }
  async onBeforeSubmit(data, isChecking = false) {
    this.errors = [];
    if (!isChecking) {
      const address = this.addressInputEl.value;
      const { token } = await this.cardInputEl.getCardToken({
        name: this.nameInputEl.value,
        address_line1: address === null || address === void 0 ? void 0 : address.street,
        address_line2: address === null || address === void 0 ? void 0 : address.unit,
        address_city: address === null || address === void 0 ? void 0 : address.city,
        address_country: "US",
        address_state: address === null || address === void 0 ? void 0 : address.state,
        address_zip: address === null || address === void 0 ? void 0 : address.zip,
      });
      data.token = token.id;
      data.address = address.full;
    }
    else {
      data.type = "checking";
    }
    data.userId = this.userId;
    return data;
  }
  async next() {
    this.sliderEl.slideNext();
  }
  async back() {
    this.sliderEl.slidePrev();
  }
  async removePaymentMethod(id) {
    if (confirm("Are you sure you wish to delete this payment method?")) {
      this.ftRemovePaymentMethod.emit({
        id,
      });
    }
  }
  render() {
    return (h("ion-card", null,
      this.errors.map((message) => (h("floodteam-error", { message: message }))),
      h("ion-slides", { ref: (el) => (this.sliderEl = el), options: this.sliderOptions },
        h("ion-slide", { id: "methods" },
          h("div", { class: "slide-wrapper" },
            h("h2", null, "Payment Methods"),
            this.methods && this.methods.length > 0 ? (h("ion-list", { lines: "none" }, this.methods.map((method) => (h("ion-item", null,
              h("ion-label", null,
                h("h2", null, method.name),
                h("p", { style: {
                    textTransform: "capitalize",
                  } }, method.type === "checking"
                  ? "Bank Account"
                  : `${method.type} Card`)),
              h("ion-button", { color: "danger", fill: "clear", slot: "end", onClick: () => this.removePaymentMethod(method.id) },
                h("ion-label", null, "Remove"),
                h("ion-icon", { slot: "end", name: "close-circle" }))))))) : (h("p", null, "Your account with Stripe has been setup successfully, you may now add a payment method to get paid.")),
            h("ion-grid", { class: "slide-controls" },
              h("ion-row", null,
                h("ion-col", { class: "ion-align-self-end" },
                  h("ion-button", { color: "success", onClick: () => this.next() }, "Add Payment Method")))))),
        h("ion-slide", { id: "payment-type" },
          h("div", { class: "slide-wrapper" },
            h("h2", null, "Select Payment Type"),
            h("p", null, "What is the method you would like to get paid on?"),
            h("fireenjin-form", { disableLoader: true, name: "paymentForm", resetButton: "<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back", resetButtonColor: "medium", submitButtonColor: "success", submitButton: "Next" },
              h("ion-grid", null,
                h("ion-row", { class: "options" },
                  h("span", null),
                  h("ion-col", { size: "6", class: this.payType === "card" ? "active" : null, onClick: () => (this.payType = "card") },
                    h("h2", null,
                      h("div", { class: "empty-radio" }),
                      "Debit Card"),
                    h("ion-icon", { name: "card" }),
                    h("p", null, "I want to hookup my debit card and have instant pay option.")),
                  h("ion-col", { class: this.payType === "checking" ? "active" : null, size: "6", onClick: () => (this.payType = "checking") },
                    h("h2", null,
                      h("div", { class: "empty-radio" }),
                      "Bank Account"),
                    h("ion-icon", { name: "create" }),
                    h("p", null, "I want to hookup my bank account to receive payments."))))))),
        h("ion-slide", { id: "add" },
          h("div", { class: "slide-wrapper" },
            h("h2", null,
              "Add a ",
              this.payType === "card" ? "Debit Card" : "Bank Account"),
            h("p", null,
              "What is the account information for the",
              " ",
              this.payType === "card" ? "Debit Card" : "Bank Account",
              "?"),
            this.payType === "card" ? (h("fireenjin-form", { name: "cardForm", resetButton: "<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back", resetButtonColor: "medium", submitButtonColor: "success", endpoint: "addPaymentMethod", beforeSubmit: (data) => this.onBeforeSubmit(data), excludeData: ["card", "cardName"] },
              h("ion-list", null,
                h("floodteam-input", { ref: (el) => (this.cardInputEl = el), placeholder: "Card Number", name: "card", type: "card", stripeKey: this.stripeKey, stripeElements: {
                    fonts: [
                      {
                        cssSrc: "https://fonts.googleapis.com/css?family=Work+Sans:400",
                      },
                    ],
                    style: {
                      base: {
                        color: window &&
                          window.matchMedia &&
                          window.matchMedia("(prefers-color-scheme: dark)")
                            .matches
                          ? "#ffffff"
                          : "#000000",
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: "400",
                        fontSize: "18px",
                        "::placeholder": {
                          fontWeight: "400",
                          color: window &&
                            window.matchMedia &&
                            window.matchMedia("(prefers-color-scheme: dark)").matches
                            ? "#8d9ba9"
                            : "#acadad",
                        },
                      },
                      invalid: {
                        iconColor: "#ee6274",
                        color: "#ee6274",
                      },
                    },
                  }, required: true }),
                h("floodteam-input", { ref: (el) => (this.nameInputEl = el), placeholder: "Name on Card", name: "cardName", value: this.cardName, pattern: "^[a-zA-Z]+ (([',. -][a-zA-Z ])?[a-zA-Z]+)*$", required: true }),
                h("floodteam-input-address", { ref: (el) => (this.addressInputEl = el), placeholder: "Billing Address", name: "address", value: this.address, required: true })))) : (h("fireenjin-form", { resetButton: "<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back", resetButtonColor: "medium", submitButtonColor: "success", endpoint: "addPaymentMethod", beforeSubmit: (data) => this.onBeforeSubmit(data, true), name: "bankingForm" },
              h("ion-list", null,
                h("floodteam-input", { ref: (el) => (this.accountInputEl = el), placeholder: "Account Number", name: "accountNumber", required: true }),
                h("floodteam-input", { ref: (el) => (this.routingInputEl = el), placeholder: "Routing Number", name: "routingNumber", required: true })))))),
        h("ion-slide", { id: "confirmation" },
          h("div", { class: "slide-wrapper" },
            h("floodteam-checkmark", { size: "100px", ref: (el) => (this.checkmarkEl = el) }),
            h("ion-grid", null,
              h("ion-row", null,
                h("ion-col", { class: "message-content" },
                  h("ion-label", null,
                    h("h1", null, "Payments are setup!"),
                    h("p", null, "You can now head back to your dashboard."))),
                h("ion-col", { class: "dashboard-button" },
                  h("ion-button", { href: "/dashboard", color: "success" }, "Go to Dashboard")))))))));
  }
  static get is() { return "floodteam-payment-methods"; }
  static get originalStyleUrls() { return {
    "$": ["payment-methods.css"]
  }; }
  static get styleUrls() { return {
    "$": ["payment-methods.css"]
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
    "cardName": {
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
      "attribute": "card-name",
      "reflect": false
    },
    "address": {
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
      "attribute": "address",
      "reflect": false,
      "defaultValue": "{}"
    },
    "userId": {
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
      "attribute": "user-id",
      "reflect": false
    },
    "payType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"card\" | \"checking\"",
        "resolved": "\"card\" | \"checking\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "pay-type",
      "reflect": false,
      "defaultValue": "\"card\""
    },
    "methods": {
      "type": "unknown",
      "mutable": false,
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
      }
    }
  }; }
  static get states() { return {
    "errors": {},
    "currentSlideIndex": {}
  }; }
  static get events() { return [{
      "method": "ftRemovePaymentMethod",
      "name": "ftRemovePaymentMethod",
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
  static get listeners() { return [{
      "name": "ionSlideDidChange",
      "method": "onSlideChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fireenjinReset",
      "method": "onReset",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fireenjinSubmit",
      "method": "onSubmit",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fireenjinError",
      "method": "onError",
      "target": "body",
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
