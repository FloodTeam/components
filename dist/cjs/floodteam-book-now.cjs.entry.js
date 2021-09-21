'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');
const clipboard = require('./clipboard-657b5a00.js');
require('./_commonjsHelpers-0c557e26.js');

const bookNowCss = "floodteam-book-now .success-message{display:block;opacity:0;height:0px;transition:opacity 0.6s ease;transition-delay:1s}floodteam-book-now .successful .success-message{opacity:1;height:auto}floodteam-book-now fireenjin-form{transition:opacity 0.6s ease;opacity:1}floodteam-book-now .successful fireenjin-form{opacity:0;height:0px}floodteam-book-now b{display:block;text-align:center;color:var(--ion-color-success)}";

const BookNow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        {
            // Get Data
            this.formData.token = this.token;
            this.formData.locationId = this.locationId;
            if (!this.referring) {
                new clipboard.ClipboardJS(".btn");
            }
        }
    }
    onBeforeSubmit(data) {
        return Object.assign(Object.assign({}, data), { referralId: this.referralId ? this.referralId : null });
    }
    render() {
        return (index.h("ion-card", { class: { successful: this.successful, "ion-padding": true } }, this.errors.map((message) => (index.h("floodteam-error", { message: message }))), index.h("fireenjin-form", { ref: (el) => (this.formEl = el), endpoint: "addJob", formData: this.formData, submitButtonColor: "success", resetButtonColor: "medium", beforeSubmit: this.onBeforeSubmit.bind(this) }, index.h("ion-list", null, index.h("floodteam-input", { name: "customer", label: "Customer Name", placeholder: "What is the customer's full name?" }), index.h("floodteam-input", { type: "tel", inputMode: "tel", label: "Customer Phone Number", placeholder: "What is the customer's phone number?", name: "phone" }), index.h("floodteam-input", { name: "email", type: "email", label: "Customer Email", placeholder: "What is the customer's email address?" }), index.h("floodteam-input-address", { googleMapsKey: this.googleMapsKey, name: "address", label: "Job Address", placeholder: "What is the address of the loss?" }))), index.h("div", { class: "success-message" }, index.h("floodteam-checkmark", { size: "100px", ref: (el) => (this.checkmarkEl = el) }), index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", { class: "message-content" }, index.h("ion-label", null, index.h("h1", null, "Job Added Successfully!"), !this.referring ? (index.h("p", null, "Job was submitted successfully, here is the confirmation number. Use the \"Copy to Clipboard\" button to copy and paste it into the field on AnswerConnect's system.")) : (index.h("p", null, "Your job was submitted successfully.")))), index.h("ion-col", { class: "dashboard-button" }, !this.referring ? (index.h("div", null, index.h("b", null, this.confirmationId), index.h("br", null), index.h("ion-button", { class: "btn", size: "default", color: "success", expand: "block", "data-clipboard-text": this.confirmationId }, "Copy to clipboard", index.h("ion-icon", { name: "clipboard", slot: "end" })))) : (index.h("ion-button", { size: "default", onClick: () => (window ? window.location.reload() : null), expand: "block" }, "Add Another"))))))));
    }
};
BookNow.style = bookNowCss;

exports.floodteam_book_now = BookNow;
