import { Build, Component, h, Listen, Prop, State } from "@stencil/core";
import ClipboardJS from "clipboard";
export class BookNow {
  constructor() {
    /**
     * Is the user referring?
     */
    this.referring = false;
    this.errors = [];
    this.successful = false;
    this.formData = {};
  }
  onError(event) {
    if (event.detail.endpoint === "addJob") {
      setTimeout(() => {
        this.errors = event.detail.error.response.errors.map((err) => err.message);
      }, 100);
    }
  }
  async onSuccess(event) {
    var _a, _b, _c;
    this.errors = [];
    if (event.detail.endpoint === "addJob") {
      await this.formEl.reset();
      this.successful = true;
      this.confirmationId = (_c = (_b = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.addJob) === null || _c === void 0 ? void 0 : _c.id;
      setTimeout(() => {
        this.checkmarkEl.animating = true;
      }, 500);
    }
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
      this.formData.token = this.token;
      this.formData.locationId = this.locationId;
      if (!this.referring) {
        new ClipboardJS(".btn");
      }
    }
  }
  onBeforeSubmit(data) {
    return Object.assign(Object.assign({}, data), { referralId: this.referralId ? this.referralId : null });
  }
  render() {
    return (h("ion-card", { class: { successful: this.successful, "ion-padding": true } },
      this.errors.map((message) => (h("floodteam-error", { message: message }))),
      h("fireenjin-form", { ref: (el) => (this.formEl = el), endpoint: "addJob", formData: this.formData, submitButtonColor: "success", resetButtonColor: "medium", beforeSubmit: this.onBeforeSubmit.bind(this) },
        h("ion-list", null,
          h("floodteam-input", { name: "customer", label: "Customer Name", placeholder: "What is the customer's full name?" }),
          h("floodteam-input", { type: "tel", inputMode: "tel", label: "Customer Phone Number", placeholder: "What is the customer's phone number?", name: "phone" }),
          h("floodteam-input", { name: "email", type: "email", label: "Customer Email", placeholder: "What is the customer's email address?" }),
          h("floodteam-input-address", { googleMapsKey: this.googleMapsKey, name: "address", label: "Job Address", placeholder: "What is the address of the loss?" }))),
      h("div", { class: "success-message" },
        h("floodteam-checkmark", { size: "100px", ref: (el) => (this.checkmarkEl = el) }),
        h("ion-grid", null,
          h("ion-row", null,
            h("ion-col", { class: "message-content" },
              h("ion-label", null,
                h("h1", null, "Job Added Successfully!"),
                !this.referring ? (h("p", null, "Job was submitted successfully, here is the confirmation number. Use the \"Copy to Clipboard\" button to copy and paste it into the field on AnswerConnect's system.")) : (h("p", null, "Your job was submitted successfully.")))),
            h("ion-col", { class: "dashboard-button" }, !this.referring ? (h("div", null,
              h("b", null, this.confirmationId),
              h("br", null),
              h("ion-button", { class: "btn", size: "default", color: "success", expand: "block", "data-clipboard-text": this.confirmationId },
                "Copy to clipboard",
                h("ion-icon", { name: "clipboard", slot: "end" })))) : (h("ion-button", { size: "default", onClick: () => (window ? window.location.reload() : null), expand: "block" }, "Add Another"))))))));
  }
  static get is() { return "floodteam-book-now"; }
  static get originalStyleUrls() { return {
    "$": ["book-now.css"]
  }; }
  static get styleUrls() { return {
    "$": ["book-now.css"]
  }; }
  static get properties() { return {
    "referring": {
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
        "text": "Is the user referring?"
      },
      "attribute": "referring",
      "reflect": false,
      "defaultValue": "false"
    },
    "referralId": {
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
        "text": "The ID of the referring user"
      },
      "attribute": "referral-id",
      "reflect": false
    },
    "locationId": {
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
        "text": "The ID of the location"
      },
      "attribute": "location-id",
      "reflect": false
    },
    "token": {
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
        "text": "The campaign or API token"
      },
      "attribute": "token",
      "reflect": false
    },
    "googleMapsKey": {
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
        "text": "The Google Maps API Key"
      },
      "attribute": "google-maps-key",
      "reflect": false
    }
  }; }
  static get states() { return {
    "errors": {},
    "successful": {},
    "formData": {},
    "confirmationId": {},
    "checkmarkEl": {}
  }; }
  static get listeners() { return [{
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
