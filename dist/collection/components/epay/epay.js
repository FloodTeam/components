import { Component, Element, Event, Listen, Method, Prop, State, Watch, h, } from "@stencil/core";
export class Epay {
  constructor() {
    this.slideIndex = [
      "summary",
      "payment",
      "card",
      "check",
      "confirmation",
      "success",
    ];
    this.userPrefersDark = window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
    /**
     * The amount of money owed
     */
    this.owed = 0;
    /**
     * The total amount of money billed
     */
    this.total = 0;
    /**
     * The list of payments
     */
    this.payments = [];
    this.customer = {};
    this.users = [];
    this.isSlidesHidding = false;
    this.isHeaderShrunk = false;
    this.isBackShowing = false;
    this.isSubTextShowing = true;
    this.isHeaderHidden = false;
    this.loading = false;
  }
  async onSuccess(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (event.detail.endpoint === "findJob") {
      this.job = ((_b = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.job) ? event.detail.data.job : null;
      this.customer = ((_e = (_d = (_c = event.detail) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.job) === null || _e === void 0 ? void 0 : _e.customer)
        ? event.detail.data.job.customer
        : {};
      this.email = ((_g = (_f = this.job) === null || _f === void 0 ? void 0 : _f.customer) === null || _g === void 0 ? void 0 : _g.email) ? this.job.customer.email : null;
      this.owed = ((_h = this.job) === null || _h === void 0 ? void 0 : _h.amountOwed) ? this.job.amountOwed : 0;
      this.total = ((_j = this.job) === null || _j === void 0 ? void 0 : _j.amountBilled) ? this.job.amountBilled : 0;
      this.amount = this.owed;
      setTimeout(async () => {
        await this.sliderEl.updateAutoHeight();
      }, 1000);
    }
    else if (event.detail.endpoint === "addPayment") {
      this.fetchData();
      this.reset();
    }
  }
  onCheckScan(event) {
    if (!event || !event.detail || !event.detail.front) {
      return false;
    }
    this.checkFront = event.detail.front;
    this.checkBack = event.detail.back;
  }
  onInput(event) {
    var _a;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.name) === "amount") {
      this.amount = event.target.value ? parseFloat(event.target.value) : null;
    }
    else if (event.target.name === "email") {
      this.email = event.target.value;
    }
  }
  onFtToggle(event) {
    var _a;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.name) === "projected") {
      console.log(event);
    }
  }
  async onSubmitCard(_event) {
    await this.goToConfirmation(event);
  }
  async goToConfirmation(event) {
    this.paymentPayload = event && event.detail ? event.detail : null;
    this.isHeaderHidden = true;
    await this.sliderEl.slideTo(4);
    this.paymentEvent = event;
  }
  async approve() {
    if (this.paymentType === "check") {
      try {
        await this.confirmPayment(this.errorCode === 2006
          ? {
            ignore_check_amount_mismatch: true,
          }
          : {});
        this.submitPayment(this.paymentType, this.paymentEvent);
      }
      catch (error) {
        console.log("Error taking check payment", error);
      }
    }
    else {
      this.submitPayment(this.paymentType, this.paymentEvent);
    }
  }
  submitPayment(type, event) {
    let data = {};
    if (type === "card") {
      data = {
        token: event.detail.token.id,
        amount: this.amount,
        email: this.email,
      };
    }
    else if (type === "check") {
      data = {
        transactionId: event.id ? event.id : null,
        checkNumber: event.check_number ? event.check_number : null,
        amount: this.amount,
        email: this.email,
      };
    }
    else if (type === "manual") {
      data = {
        amount: this.amount,
        email: this.email,
      };
    }
    this.fireenjinSubmit.emit({
      endpoint: "addPayment",
      data: Object.assign(Object.assign({}, data), { jobId: this.jobId, userId: this.userId, type }),
    });
  }
  onCardError() {
    setTimeout(() => {
      this.updateSlides();
    }, 1000);
  }
  async onSlideChange(event) {
    console.log(event);
    if (!this.sliderEl)
      return;
    await this.setSlide(this.sliderEl.querySelectorAll("ion-slide")[await this.sliderEl.getActiveIndex()].id);
  }
  onCheckError(event) {
    console.log(event);
    if (!event ||
      !event.detail ||
      !event.detail.error ||
      !event.detail.error.errors ||
      !event.detail.error.errors[0]) {
      return false;
    }
    if (event.detail.error.errors[0].error_code === 2006) {
      this.errorCode = 2006;
      this.error = `The amount you typed doesn't match what the scanner saw (${this.formatUSD(event.detail.error.errors[0].error_data.read_amount)}). Are you sure you wish to proceed?`;
    }
    else {
      this.error = event.detail.error.errors[0].error_message;
    }
    setTimeout(() => {
      this.updateSlides();
    }, 2000);
  }
  onSelect(event) {
    if (event &&
      event.detail &&
      event.detail.user &&
      event.detail.user.user_email) {
      this.userId = event.detail.user.id;
      this.customer = event.detail.user;
      this.email = event.detail.user.user_email;
    }
  }
  async onSubmitCheck(event) {
    this.goToConfirmation(event);
  }
  onCancel() {
    this.sliderEl.slideTo(0);
    this.isHeaderShrunk = false;
    this.isBackShowing = false;
    this.isSubTextShowing = true;
    this.setSubText();
  }
  /**
   * Update the ion-slides height
   */
  async updateSlides() {
    this.sliderEl.updateAutoHeight();
    return this.sliderEl.update();
  }
  async success() {
    await this.sliderEl.slideTo(5);
    this.isBackShowing = false;
    this.checkmarkEl.animating = true;
    setTimeout(async () => {
      await this.reset();
    }, 5000);
  }
  async reset() {
    this.error = null;
    this.paymentPayload = null;
    this.sliderEl.slideTo(0);
    this.amount = 0;
    this.isHeaderShrunk = false;
    this.isBackShowing = false;
    this.isSubTextShowing = true;
    this.isHeaderHidden = false;
    this.paymentType = null;
    this.paymentEvent = null;
    this.setSubText();
    await this.sliderEl.update();
  }
  /**
   * Confirm a check payment
   */
  async confirmPayment(options = {}) {
    return this.payCheckEl.confirmPayment(options);
  }
  onOwedChange() {
    this.setSubText();
  }
  onTotalChange() {
    this.setSubText();
  }
  componentDidLoad() {
    this.setSubText();
    if (this.showSlide) {
      this.setSlide(this.showSlide);
    }
    this.fetchData();
  }
  async fetchData() {
    if (this.jobId) {
      this.fireenjinFetch.emit({
        endpoint: "findJob",
        params: {
          id: this.jobId,
          withPayments: true,
          withEfiles: false,
          withUsers: false,
          withSites: false,
          withPayModel: false,
          withPhotos: false,
          withPayables: false,
          withReadings: false,
        },
      });
    }
  }
  async setSlide(name) {
    if (["confirmation", "card", "check", "success"].indexOf(name) >= 0) {
      this.isHeaderShrunk = true;
      this.isSubTextShowing = false;
      this.isBackShowing = true;
    }
    else if (name === "confirmation" || name === "success") {
      this.isHeaderHidden = true;
      if (name === "success") {
        await this.success();
      }
    }
    else if (name === "payments") {
      this.isBackShowing = false;
      this.isSubTextShowing = true;
      this.isHeaderShrunk = false;
    }
  }
  formatUSD(amount) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(amount);
  }
  setSubText() {
    this.amount = parseFloat(this.owed) || 0;
    this.subText = `${this.calculatePercentPaid()}% paid of ${this.formatUSD(parseFloat(this.total) || 0)} bill`;
  }
  calculatePercentPaid() {
    const decimal = Math.round((this.owed / this.total) * 100);
    const percent = 100 - decimal;
    return typeof percent === "number" && percent !== Infinity && percent > 0
      ? percent
      : 0;
  }
  async takePayment() {
    if (this.isBackShowing)
      return;
    this.isHeaderShrunk = true;
    this.isBackShowing = true;
    this.isSubTextShowing = false;
    this.sliderEl.slideNext();
  }
  payWithCard() {
    if (!this.amount ||
      this.amount <= 0 ||
      !this.email ||
      this.email.indexOf("@") === -1) {
      alert("Billee email address and amount being paid are required!");
      return false;
    }
    this.paymentType = "card";
    this.subText = `Paying ${this.formatUSD(this.amount)} by card...`;
    this.isSubTextShowing = true;
    this.sliderEl.slideTo(2);
  }
  payWithCheck() {
    if (!this.amount ||
      this.amount <= 0 ||
      !this.email ||
      this.email.indexOf("@") === -1) {
      alert("Billee email address and amount being paid are required!");
      return false;
    }
    this.paymentType = "check";
    this.subText = `Paying ${this.formatUSD(this.amount)} by check...`;
    this.isSubTextShowing = true;
    this.sliderEl.slideTo(3);
  }
  payManually() {
    if (!this.amount ||
      this.amount <= 5 ||
      !this.email ||
      this.email.indexOf("@") === -1) {
      alert("Billee email address and amount greater than $5.00 being paid are required!");
      return false;
    }
    this.paymentType = "manual";
    this.goToConfirmation(null);
  }
  async goBack() {
    this.loading = false;
    this.error = null;
    const currentSlideIndex = await this.sliderEl.getActiveIndex();
    if (currentSlideIndex === 4) {
      if (this.paymentType === "card") {
        await this.sliderEl.slideTo(2);
      }
      else if (this.paymentType === "check") {
        await this.sliderEl.slideTo(3);
      }
      else if (this.paymentType === "manual") {
        await this.sliderEl.slideTo(1);
      }
    }
    else {
      this.paymentType === "check"
        ? await this.sliderEl.slideTo(1)
        : await this.sliderEl.slidePrev();
    }
    this.paymentType = null;
    if (currentSlideIndex === 0) {
      this.reset();
    }
    else if (currentSlideIndex === 1) {
      this.isHeaderShrunk = true;
      this.isSubTextShowing = false;
    }
    this.isHeaderHidden = false;
  }
  capitalize(s) {
    if (typeof s !== "string")
      return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  getPaymentTypeCofirmation() {
    if (this.paymentType === "card") {
      return `<h4>${this.capitalize(this.paymentPayload &&
        this.paymentPayload.token &&
        this.paymentPayload.token.card &&
        this.paymentPayload.token.card
        ? this.paymentPayload.token.card.brand
        : "")} ${this.paymentPayload &&
        this.paymentPayload.token &&
        this.paymentPayload.token.card &&
        this.paymentPayload.token.card
        ? this.paymentPayload.token.card.funding
        : ""} ending in ${this.paymentPayload &&
        this.paymentPayload.token &&
        this.paymentPayload.token.card &&
        this.paymentPayload.token.card
        ? this.paymentPayload.token.card.last4
        : ""}</h4>`;
    }
    else if (this.paymentType === "check") {
      return `<ion-grid><ion-row><ion-col size="6"><img src="${this.checkFront}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col><ion-col size="6"><img src="${this.checkBack}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col></ion-row></ion-grid>`;
    }
    else if (this.paymentType === "manual") {
      return "<h4>This should be avoided!</h4>";
    }
  }
  getPaymentText(payment) {
    let paymentText = "";
    const paidOn = new Date(payment.createdAt).toLocaleString().split(",")[0];
    if (payment.type === "manual") {
      paymentText = `${this.formatUSD(payment.amount)} manually on ${paidOn}`;
    }
    else if (payment.type === "card") {
      paymentText = `${this.formatUSD(payment.amount)} on ${payment.brand ? payment.brand : ""} card ending in ${payment.ending_in ? payment.ending_in : ""} on ${paidOn}`;
    }
    else if (payment.type === "check") {
      paymentText = `${this.formatUSD(payment.amount)} by check ${payment.check_number ? payment.check_number : ""} on ${paidOn}`;
    }
    return paymentText;
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (h("ion-card", { class: "epay-wrapper" },
      this.isBackShowing && (h("ion-button", { class: "back-button", onClick: () => this.goBack(), fill: "clear", shape: "round", size: "large", color: this.userPrefersDark ? "light" : "dark" },
        h("ion-icon", { name: "arrow-back", slot: "icon-only" }))),
      h("div", { class: {
          owed: true,
          shrunk: this.isHeaderShrunk,
          hidden: this.isHeaderHidden,
        } },
        h("span", null,
          this.formatUSD(this.owed),
          h("small", null, " owed")),
        h("floodteam-progress-bar", { percent: this.calculatePercentPaid() }),
        this.isSubTextShowing && h("p", null, this.subText)),
      h("ion-slides", { ref: (el) => (this.sliderEl = el), options: {
          autoHeight: true,
          allowTouchMove: false,
          simulateTouch: false,
          autoplay: false,
        }, class: { "hide-slides": this.isSlidesHidding } },
        h("ion-slide", { id: "payments" },
          h("ion-grid", null,
            h("ion-row", null,
              h("ion-col", null,
                h("div", { class: "past" },
                  h("h2", null, "Past Payments"),
                  ((_b = (_a = this.job) === null || _a === void 0 ? void 0 : _a.payments) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (this.job.payments.map((payment) => {
                    var _a, _b;
                    return (h("ion-item", { lines: "none" },
                      h("ion-label", { class: "ion-text-wrap" },
                        h("h4", null,
                          ((_a = payment.user) === null || _a === void 0 ? void 0 : _a.firstName)
                            ? payment.user.firstName
                            : "",
                          " ",
                          ((_b = payment.user) === null || _b === void 0 ? void 0 : _b.lastName)
                            ? payment.user.lastName
                            : ""),
                        h("p", { style: {
                            color: payment.type === "manual"
                              ? "var(--ion-color-danger)"
                              : "var(--ion-color-success)",
                          } }, this.getPaymentText(payment)))));
                  })) : (h("floodteam-fallback", { icon: "sad", message: "No payments received yet..." }))))))),
        h("ion-slide", { id: "details" },
          h("ion-grid", null,
            h("ion-row", null,
              h("ion-col", null,
                h("ion-list", null,
                  h("floodteam-input", { class: "billee-input", iconLeft: "mail", label: "Billee Email", type: "email", name: "email", autocomplete: "off", value: this.email
                      ? this.email
                      : ((_c = this.customer) === null || _c === void 0 ? void 0 : _c.email)
                        ? this.customer.email
                        : null, required: true }),
                  h("floodteam-input", { class: "amount-input", iconLeft: "logo-usd", label: "Amount", type: "number", name: "amount", autocomplete: "off", min: "5.00", step: "0.01", value: this.amount, required: true })))),
            h("ion-row", null,
              h("ion-col", { size: "6" },
                h("ion-button", { color: "success", onClick: () => this.payWithCheck() }, "Pay with Check")),
              h("ion-col", { size: "6" },
                h("ion-button", { color: "success", onClick: () => this.payWithCard() }, "Pay with Card"))))),
        h("ion-slide", { id: "card" },
          h("floodteam-pay-card", { stripeKey: this.stripeKey, stripeStyle: {
              base: {
                color: this.userPrefersDark ? "#FFFFFF" : "#000000",
                iconSize: "30px",
                iconColor: "#999999",
                lineHeight: "20px",
                fontFamily: '"Work Sans", sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "18px",
                "::placeholder": {
                  color: "#999999",
                  iconColor: "#999999",
                  fontWeight: "normal",
                },
              },
              invalid: {
                color: "#ee6274",
                iconColor: "#ee6274",
              },
            } })),
        h("ion-slide", { id: "check" },
          h("floodteam-pay-check", { loading: this.loading, ref: (el) => (this.payCheckEl = el), apiKey: this.dadeKey, url: this.dadeUrl, amount: this.amount })),
        h("ion-slide", { id: "confirmation" },
          h("ion-grid", null,
            h("ion-row", null,
              h("ion-col", null,
                h("p", { class: "confirm-title" }, "Confirm Payment of"),
                h("h1", null, this.formatUSD(this.amount)),
                this.error && h("floodteam-error", { message: this.error }),
                h("ion-list", null,
                  h("ion-item", null,
                    h("ion-icon", { slot: "start", name: "person" }),
                    h("div", null,
                      h("p", null, "From"),
                      h("h4", null,
                        ((_d = this.customer) === null || _d === void 0 ? void 0 : _d.firstName)
                          ? this.customer.firstName
                          : "Customer",
                        " ",
                        ((_e = this.customer) === null || _e === void 0 ? void 0 : _e.lastName)
                          ? this.customer.lastName
                          : "Name"))),
                  h("ion-item", null,
                    h("ion-icon", { slot: "start", name: "mail" }),
                    h("div", null,
                      h("p", null, "Send receipt to"),
                      h("h4", null, this.email ? this.email : "Customer Email"))),
                  h("ion-item", null,
                    h("ion-icon", { slot: "start", name: "logo-usd" }),
                    h("div", null,
                      h("p", null, this.paymentType === "manual"
                        ? `Paying manually`
                        : `Paying with ${this.capitalize(this.paymentType)}`),
                      h("div", { innerHTML: this.getPaymentTypeCofirmation() }))),
                  h("ion-grid", null,
                    h("ion-row", { class: "ion-align-items-center" },
                      h("ion-col", { size: "12", class: "ion-align-self-end" },
                        h("ion-button", { onClick: () => this.approve(), color: "success" }, "Approve"))))))))),
        h("ion-slide", { id: "success" },
          h("ion-grid", null,
            h("ion-row", null,
              h("ion-col", null,
                h("floodteam-checkmark", { ref: (el) => (this.checkmarkEl = el) }),
                h("p", null, "You're good to go!"))))))));
  }
  static get is() { return "floodteam-epay"; }
  static get originalStyleUrls() { return {
    "$": ["epay.css"]
  }; }
  static get styleUrls() { return {
    "$": ["epay.css"]
  }; }
  static get properties() { return {
    "error": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The error message to display"
      },
      "attribute": "error",
      "reflect": false
    },
    "owed": {
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
        "text": "The amount of money owed"
      },
      "attribute": "owed",
      "reflect": false,
      "defaultValue": "0"
    },
    "total": {
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
        "text": "The total amount of money billed"
      },
      "attribute": "total",
      "reflect": false,
      "defaultValue": "0"
    },
    "showSlide": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| \"report\"\r\n    | \"details\"\r\n    | \"payments\"\r\n    | \"card\"\r\n    | \"check\"\r\n    | \"confirmation\"",
        "resolved": "\"card\" | \"check\" | \"confirmation\" | \"details\" | \"payments\" | \"report\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The slide to show when loading the component"
      },
      "attribute": "show-slide",
      "reflect": false
    },
    "payments": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "{\r\n    timestamp: string;\r\n    brand: string;\r\n    last4: number;\r\n    amount: number;\r\n  }[]",
        "resolved": "{ timestamp: string; brand: string; last4: number; amount: number; }[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The list of payments"
      },
      "defaultValue": "[]"
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
    },
    "customer": {
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
      "attribute": "customer",
      "reflect": false,
      "defaultValue": "{}"
    },
    "jobId": {
      "type": "string",
      "mutable": true,
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
      "attribute": "job-id",
      "reflect": false
    },
    "userId": {
      "type": "string",
      "mutable": true,
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
    "dadeKey": {
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
      "attribute": "dade-key",
      "reflect": false
    },
    "dadeUrl": {
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
      "attribute": "dade-url",
      "reflect": false
    },
    "users": {
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
    "paymentId": {
      "type": "string",
      "mutable": true,
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
    }
  }; }
  static get states() { return {
    "amount": {},
    "isSlidesHidding": {},
    "isHeaderShrunk": {},
    "isBackShowing": {},
    "isSubTextShowing": {},
    "isHeaderHidden": {},
    "paymentType": {},
    "email": {},
    "job": {},
    "subText": {},
    "paymentPayload": {},
    "checkFront": {},
    "checkBack": {},
    "paymentEvent": {},
    "loading": {},
    "errorCode": {}
  }; }
  static get events() { return [{
      "method": "ftEpayShowCommisions",
      "name": "ftEpayShowCommisions",
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
    }, {
      "method": "fireenjinSubmit",
      "name": "fireenjinSubmit",
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
    "updateSlides": {
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
        "text": "Update the ion-slides height",
        "tags": []
      }
    },
    "success": {
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
    "reset": {
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
        "signature": "(options?: any) => Promise<any>",
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
        "text": "Confirm a check payment",
        "tags": []
      }
    },
    "takePayment": {
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
  static get elementRef() { return "epayEl"; }
  static get watchers() { return [{
      "propName": "owed",
      "methodName": "onOwedChange"
    }, {
      "propName": "total",
      "methodName": "onTotalChange"
    }]; }
  static get listeners() { return [{
      "name": "fireenjinSuccess",
      "method": "onSuccess",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "ftCheckScan",
      "method": "onCheckScan",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ionInput",
      "method": "onInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ftToggle",
      "method": "onFtToggle",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ftSubmitCard",
      "method": "onSubmitCard",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ftCardError",
      "method": "onCardError",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ionSlideDidChange",
      "method": "onSlideChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ftCheckError",
      "method": "onCheckError",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ftSelect",
      "method": "onSelect",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ftSubmitCheck",
      "method": "onSubmitCheck",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ftCancel",
      "method": "onCancel",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
