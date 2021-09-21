import { Component, Element, Event, Prop, State, h, Watch } from "@stencil/core";
export class PayCard {
  constructor() {
    this.isLoading = false;
  }
  onStripeKeyChange() {
    this.initializeStripeElements();
  }
  save(event) {
    this.error = null;
    this.isLoading = true;
    event.preventDefault();
    this.stripe.createToken(this.card).then(result => {
      this.isLoading = false;
      if (result.error) {
        this.error = result.error.message;
      }
      else {
        this.ftSubmitCard.emit({
          event,
          token: result.token
        });
      }
    });
  }
  cancel(event) {
    this.ftCancel.emit({ event });
  }
  componentDidLoad() {
    if (this.stripeKey) {
      this.initializeStripeElements();
    }
    else {
      alert("Please provide a Stripe key!");
    }
  }
  initializeStripeElements() {
    this.stripe = Stripe(this.stripeKey);
    const elements = this.stripe.elements();
    const style = this.stripeStyle
      ? this.stripeStyle
      : {
        base: {
          color: "#32325d",
          lineHeight: "18px",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          fontWeight: "bold",
          "::placeholder": {
            color: "#aab7c4"
          },
          left: "15px"
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      };
    this.card = elements.create("card", {
      style,
      iconStyle: "solid",
      placeholder: "Card Number"
    });
    this.card.mount(this.payCardEl.querySelector("#card-element"));
    this.card.on("change", event => {
      this.error = event.error ? event.error.message : null;
      if (this.error) {
        this.ftCardError.emit({ event, error: this.error });
      }
    });
  }
  render() {
    return (h("div", { class: this.isLoading ? "pay-card-wrapper is-loading" : "pay-card-wrapper" },
      this.error ? h("floodteam-error", { message: this.error }) : null,
      h("div", { id: "card-element" }),
      h("ion-grid", null,
        h("ion-row", null,
          h("ion-col", { size: "6" },
            h("ion-button", { onClick: event => this.cancel(event), fill: "clear" }, "Cancel")),
          h("ion-col", { size: "6" },
            h("ion-button", { color: "success", onClick: event => this.save(event) }, "Save"))))));
  }
  static get is() { return "floodteam-pay-card"; }
  static get originalStyleUrls() { return {
    "$": ["pay-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["pay-card.css"]
  }; }
  static get properties() { return {
    "stripeStyle": {
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
      "attribute": "stripe-style",
      "reflect": false
    },
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
    }
  }; }
  static get states() { return {
    "card": {},
    "error": {},
    "isLoading": {}
  }; }
  static get events() { return [{
      "method": "ftSubmitCard",
      "name": "ftSubmitCard",
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
      "method": "ftCardError",
      "name": "ftCardError",
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
      "method": "ftCancel",
      "name": "ftCancel",
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
  static get elementRef() { return "payCardEl"; }
  static get watchers() { return [{
      "propName": "stripeKey",
      "methodName": "onStripeKeyChange"
    }]; }
}
