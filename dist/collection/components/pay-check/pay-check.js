import { Component, Element, Event, Method, Prop, State, h, Watch, Listen } from "@stencil/core";
import { DadeMobile } from "@dadesystems/dademobile";
export class PayCheck {
  constructor() {
    this.defaultCheckImage = "data:image/png;base64,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";
    this.dropCheckImage = "data:image/png;base64,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";
    this.loading = false;
    this.errors = [];
    this.isScanningFront = true;
    this.isHovered = false;
    this.hasCheckFront = false;
    this.hasCheckBack = false;
  }
  onUrlChange() {
    this.startScanner();
  }
  async startScanner() {
    if (this.apiKey && this.url) {
      this.dade = new DadeMobile(this.apiKey, this.url);
      try {
        this.payment = await this.dade.stagePayment({
          external_user_id: this.userId ? this.userId : "0",
          external_reference: this.paymentId ? this.paymentId : "0",
          amount: this.amount ? this.amount : 0
        });
      }
      catch (error) {
        console.log(error);
      }
    }
    else {
      console.log("Must provide Dade API key and url!");
    }
  }
  async componentDidLoad() {
    this.checkFront = this.defaultCheckImage;
    this.checkBack = this.defaultCheckImage;
    this.startScanner();
  }
  selectFile(event, imageFile) {
    this.errors = [];
    this.loading = true;
    const file = imageFile
      ? imageFile
      : event && event.srcElement && event.srcElement.files
        ? event.srcElement.files[0]
        : null;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        await this.dade.uploadImage(this.payment, this.isScanningFront ? "checkfront" : "checkrear", reader.result.split(",")[1]);
        if (this.isScanningFront) {
          this.hasCheckFront = true;
          this.checkFront = reader.result;
        }
        else {
          this.hasCheckBack = true;
          this.checkBack = reader.result;
        }
        this.isScanningFront = !this.isScanningFront;
        this.ftCheckScan.emit({
          event,
          front: this.checkFront,
          back: this.checkBack
        });
        this.loading = false;
      }
      catch (error) {
        console.log(error);
      }
    };
    reader.onerror = () => {
      alert("Error opening image file!");
      this.loading = false;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  onFlip(event) {
    console.log(event.detail);
    this.isScanningFront = !event.detail.flipped;
  }
  async openCamera() {
    if (this.fileInputEl) {
      this.fileInputEl.click();
    }
  }
  async confirmPayment(options = {}) {
    try {
      this.loading = true;
      const confirmation = await this.dade.confirmPayment(this.payment, options);
      await this.save(null);
      this.ftCheckConfirmation.emit({ confirmation });
      this.loading = false;
    }
    catch (error) {
      this.errors = error.errors;
      this.ftCheckError.emit({ event, error, payment: this.payment });
      throw new Error(error.errors[0].error_message);
    }
    return this.payment;
  }
  async save(event) {
    this.errors = [];
    if (!this.hasCheckFront || !this.hasCheckBack) {
      alert(`Please take a picture of the ${!this.hasCheckFront ? "front" : "back"} of the check.`);
      this.isScanningFront = !this.hasCheckFront ? true : false;
      return false;
    }
    if (!this.amount) {
      alert("Please the amount that the check is made out for.");
      return false;
    }
    try {
      this.payment = await this.dade.setAmount(this.payment, this.amount);
      this.ftSubmitCheck.emit({ event, data: { payment: this.payment } });
    }
    catch (error) {
      this.errors = error.errors;
      this.ftCheckError.emit({ event, error, payment: this.payment });
    }
    this.loading = false;
  }
  cancel(event) {
    this.ftCancel.emit({ event });
  }
  async flipCard() {
    this.isScanningFront = !this.isScanningFront;
  }
  onDrop(event) {
    event.preventDefault();
    if (event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.length > 0) {
      this.selectFile(event, event.dataTransfer.files[0]);
      this.isHovered = false;
    }
  }
  onDrag(event) {
    event.preventDefault();
  }
  onDragEnter(_event) {
    this.isHovered = true;
  }
  onDragLeave(_event) {
    this.isHovered = false;
  }
  onSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (h("form", { id: "form-check", onDrop: event => this.onDrop(event), onDragOver: event => this.onDrag(event), onDragEnter: event => this.onDragEnter(event), onDragLeave: event => this.onDragLeave(event), onSubmit: event => this.onSubmit(event), class: {
        "is-loading": this.loading
      } },
      this.errors.map(error => (h("floodteam-error", { message: error.error_message }))),
      h("input", { ref: el => (this.fileInputEl = el), type: "file", accept: "image/*", onChange: event => this.selectFile(event), capture: "camera" }),
      h("floodteam-flip-card", { class: {
          "check-drag-hover": this.isHovered
        }, frontImage: this.checkFront, backImage: this.checkBack, onClick: () => this.openCamera(), flipped: !this.isScanningFront },
        h("div", { slot: "front" },
          h("span", { class: "badge-top-right" }, "Front")),
        h("div", { slot: "back" },
          h("span", { class: "badge-top-right" }, "Back"))),
      h("ion-grid", null,
        h("ion-row", null,
          h("ion-col", { size: "6" },
            h("ion-button", { fill: "clear", onClick: event => this.cancel(event) }, "Cancel")),
          h("ion-col", { size: "6" },
            h("ion-button", { color: "success", onClick: event => this.save(event) }, "Save"))))));
  }
  static get is() { return "floodteam-pay-check"; }
  static get originalStyleUrls() { return {
    "$": ["pay-check.css"]
  }; }
  static get styleUrls() { return {
    "$": ["pay-check.css"]
  }; }
  static get properties() { return {
    "apiKey": {
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
      "attribute": "api-key",
      "reflect": false
    },
    "url": {
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
      "attribute": "url",
      "reflect": false
    },
    "amount": {
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
      "attribute": "amount",
      "reflect": false
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
    "paymentId": {
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
      "attribute": "payment-id",
      "reflect": false
    },
    "loading": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "loading",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "payment": {},
    "checkFront": {},
    "checkBack": {},
    "errors": {},
    "isScanningFront": {},
    "isHovered": {},
    "hasCheckFront": {},
    "hasCheckBack": {}
  }; }
  static get events() { return [{
      "method": "ftSubmitCheck",
      "name": "ftSubmitCheck",
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
      "method": "ftCheckConfirmation",
      "name": "ftCheckConfirmation",
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
      "method": "ftCheckScan",
      "name": "ftCheckScan",
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
      "method": "ftCheckError",
      "name": "ftCheckError",
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
  static get methods() { return {
    "openCamera": {
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
    "confirmPayment": {
      "complexType": {
        "signature": "(options?: {}) => Promise<any>",
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
    "flipCard": {
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
  static get elementRef() { return "payCheckEl"; }
  static get watchers() { return [{
      "propName": "url",
      "methodName": "onUrlChange"
    }]; }
  static get listeners() { return [{
      "name": "floodteamFlip",
      "method": "onFlip",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
