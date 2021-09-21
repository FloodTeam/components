import { r as registerInstance, c as createEvent, h, a as getElement } from './index-2bcfd230.js';

const payCardCss = "floodteam-pay-card{display:block;width:100%;font-family:var(--theme-font-primary, Arial, Helvetica, sans-serif)}floodteam-pay-card .pay-card-wrapper{width:90%;max-width:600px;margin:15px auto}floodteam-pay-card .pay-card-wrapper .StripeElement{padding:0 0px 7px 0;border-bottom:1px solid\r\n    var(\r\n      --ion-item-border-color,\r\n      var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13)))\r\n    )}floodteam-pay-card .pay-card-wrapper .StripeElement--focus{border-bottom:2px solid var(--ion-color-primary, blue)}floodteam-pay-card .pay-card-wrapper .StripeElement--invalid{border-color:var(--ion-color-danger)}floodteam-pay-card .pay-card-wrapper .StripeElement--webkit-autofill{background-color:#fefde5 !important}floodteam-pay-card .pay-card-wrapper ion-grid{display:block;width:100%;padding:15px 0 0 0}";

const PayCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ftSubmitCard = createEvent(this, "ftSubmitCard", 7);
        this.ftCardError = createEvent(this, "ftCardError", 7);
        this.ftCancel = createEvent(this, "ftCancel", 7);
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
        return (h("div", { class: this.isLoading ? "pay-card-wrapper is-loading" : "pay-card-wrapper" }, this.error ? h("floodteam-error", { message: this.error }) : null, h("div", { id: "card-element" }), h("ion-grid", null, h("ion-row", null, h("ion-col", { size: "6" }, h("ion-button", { onClick: event => this.cancel(event), fill: "clear" }, "Cancel")), h("ion-col", { size: "6" }, h("ion-button", { color: "success", onClick: event => this.save(event) }, "Save"))))));
    }
    get payCardEl() { return getElement(this); }
    static get watchers() {
        return {
            "stripeKey": ["onStripeKeyChange"]
        };
    }
};
PayCard.style = payCardCss;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class HttpService {
    constructor(options = {}) {
        this.shouldBeAsync = true;
        this.host = options.host;
        this.headers = options.headers ? options.headers : {};
    }
    serializeParams(data) {
        return Object.keys(data)
            .map(key => `${key}=${encodeURIComponent(data[key])}`)
            .join("&");
    }
    makePromise(method, endpoint, params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const request = new XMLHttpRequest();
            request.open(method, `${this.host}/${endpoint}${method === "GET" ? "?" + this.serializeParams(params) : ""}`, this.shouldBeAsync);
            request.onload = (res) => __awaiter(this, void 0, void 0, function* () {
                const data = JSON.parse(request.responseText);
                if (data && request.status === 200) {
                    resolve({ data });
                }
                else {
                    reject(Object.assign({}, data, { message: data.error }));
                }
            });
            request.onerror = req => {
                reject({
                    message: "There was an error talking to the API, please try agian later or contact support!",
                    status: request.status
                });
            };
            Object.keys(this.headers).map(key => {
                request.setRequestHeader(key, this.headers[key]);
            });
            request.send(method === "DELETE" || method === "GET"
                ? null
                : params
                    ? JSON.stringify(params)
                    : "{}");
        }));
    }
    delete(endpoint, params) {
        return this.makePromise("DELETE", endpoint, params);
    }
    get(endpoint, params) {
        return this.makePromise("GET", endpoint, params);
    }
    post(endpoint, params) {
        return this.makePromise("POST", endpoint, params);
    }
    put(endpoint, params) {
        return this.makePromise("PUT", endpoint, params);
    }
}

class DadeMobile {
    constructor(apiKey, apiBaseUrl) {
        this.http = new HttpService({
            host: apiBaseUrl,
            headers: {
                Accept: "application/json",
                Authorization: `Token ${apiKey}`,
                "Content-Type": "application/json",
                "X-DADEMC": true
            }
        });
    }
    pick(obj, whitelist) {
        return Object.assign({}, ...whitelist.map(key => ({ [key]: obj[key] })));
    }
    pickPaymentData(data) {
        const payment = this.pick(data, [
            "id",
            "type",
            "status",
            "amount",
            "external_user_id",
            "external_reference",
            "date"
        ]);
        payment.amount = data.check_amount;
        return payment;
    }
    pickCheckData(data) {
        return this.pick(data, [
            "check_routing_number",
            "check_account_number",
            "check_number"
        ]);
    }
    /**
     * After initialization, the next step is to stage a payment.
     * The payment amount can be set when staging a payment, or after a payment has already been staged, depending on your workflow.
     * If a payment was previously staged but not confirmed, then it will be resumed.
     */
    stagePayment(params) {
        return new Promise((resolve, reject) => {
            this.http
                .get("mobile_payments/new", Object.assign({}, params, { check_amount: params["amount"] }))
                .then(payload => {
                const payment = this.pickPaymentData(payload.data);
                resolve(payment);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Set the amount of a staged payment.
     */
    setAmount(
    /**
     * The staged payment.
     */
    payment, 
    /**
     * Payment amount.
     */
    amount) {
        return new Promise((resolve, reject) => {
            this.http
                .put(`mobile_payments/${payment.id}`, {
                mobile_payment: {
                    check_amount: amount
                }
            })
                .then(payload => {
                const mobile_payment = this.pickPaymentData(payload.data);
                resolve(Object.assign({}, payment, mobile_payment));
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Upload image for a staged payment.
     */
    uploadImage(
    /**
     * The staged payment.
     */
    payment, 
    /**
     * The type of image being uploaded
     */
    imageType, 
    /**
     * Base64 encoding of the image data.
     */
    imageString) {
        return new Promise((resolve, reject) => {
            this._resizeImage(imageString).then(resizedImage => {
                this.http
                    .post(`mobile_payments/${payment.id}/mobile_checks`, {
                    image_type: imageType,
                    image_string: resizedImage
                })
                    .then(_payload => {
                    resolve(Object.assign({}, payment, { [imageType]: true }));
                })
                    .catch(error => {
                    reject(error);
                });
            });
        });
    }
    /**
     * Once a payment is staged and all properties have been set, the final step is to confirm the payment.
     * If the payment fails validation, then validation errors will be returned. See the next section for error codes.
     */
    confirmPayment(
    /**
     * The staged payment.
     */
    payment, params) {
        return new Promise((resolve, reject) => {
            this.http
                .post(`mobile_payments/${payment.id}/mobile_confirmation`, params)
                .then(payload => {
                const confirmation = payload.data;
                const mobile_payment = this.pickPaymentData(confirmation.mobile_payment);
                const check_data = this.pickCheckData(confirmation);
                resolve(Object.assign({}, mobile_payment, check_data));
            })
                .catch(error => {
                try {
                    reject({
                        validationErrors: error.response.data.errors
                    });
                }
                catch (_a) {
                    reject(error);
                }
            });
        });
    }
    /**
     * Cancel a scanned payment
     */
    cancelPayment(
    /**
     * The staged payment.
     */
    payment) {
        return new Promise((resolve, reject) => {
            this.http
                .delete(`mobile_payments/${payment.id}`)
                .then(_payload => {
                resolve(true);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    _resizeImage(imageData) {
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        const tempImage = new Image();
        const imageDataUrl = `data:image/jpeg;base64,${imageData}`;
        return new Promise((resolve, _reject) => {
            tempImage.src = imageDataUrl;
            tempImage.onload = function () {
                let width = tempImage.width;
                let height = tempImage.height;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(tempImage, 0, 0, width, height);
                const dataURL = canvas.toDataURL("image/jpeg");
                const imageBase64 = dataURL.split(",")[1];
                resolve(imageBase64);
            };
        });
    }
}

const payCheckCss = "floodteam-pay-check{font-family:var(\r\n    --floodteam-pay-check-font-family,\r\n    var(--theme-font-primary, Arial, Helvetica, sans-serif)\r\n  );display:block;width:100%}floodteam-pay-check floodteam-flip-card [slot=\"after\"] img{opacity:0;pointer-events:none}floodteam-pay-check #form-check floodteam-button.flip{position:absolute;right:15px}floodteam-pay-check #form-check form{margin:0 auto;width:90%}floodteam-pay-check #form-check input[type=\"file\"]{height:0;width:0;visibility:hidden;opacity:0}floodteam-pay-check #form-check img{display:block;width:100%}floodteam-pay-check #form-check floodteam-input{--floodteam-input-font-size:28px;--floodteam-input-width:160px;--floodteam-input-focus-color:#0f78b9;--floodteam-input-margin:0 0 0 0;--floodteam-input-label-top:10px;--floodteam-icon-bottom:8px}floodteam-pay-check floodteam-flip-card{cursor:pointer}floodteam-pay-check floodteam-flip-card .flip-card{height:150px !important}floodteam-pay-check #form-check floodteam-flip-card.check-drag-hover .flip-card-front,floodteam-pay-check #form-check floodteam-flip-card.check-drag-hover .flip-card-back{background-image:url(\"data:image/png;base64,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\") !important}floodteam-pay-check #form-check .top-bar .right floodteam-button{float:right}floodteam-pay-check #form-check .bottom-bar{margin-top:20px}floodteam-pay-check #form-check floodteam-grid{padding-top:15px}";

const PayCheck = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ftSubmitCheck = createEvent(this, "ftSubmitCheck", 7);
        this.ftCheckConfirmation = createEvent(this, "ftCheckConfirmation", 7);
        this.ftCheckScan = createEvent(this, "ftCheckScan", 7);
        this.ftCheckError = createEvent(this, "ftCheckError", 7);
        this.ftCancel = createEvent(this, "ftCancel", 7);
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
            } }, this.errors.map(error => (h("floodteam-error", { message: error.error_message }))), h("input", { ref: el => (this.fileInputEl = el), type: "file", accept: "image/*", onChange: event => this.selectFile(event), capture: "camera" }), h("floodteam-flip-card", { class: {
                "check-drag-hover": this.isHovered
            }, frontImage: this.checkFront, backImage: this.checkBack, onClick: () => this.openCamera(), flipped: !this.isScanningFront }, h("div", { slot: "front" }, h("span", { class: "badge-top-right" }, "Front")), h("div", { slot: "back" }, h("span", { class: "badge-top-right" }, "Back"))), h("ion-grid", null, h("ion-row", null, h("ion-col", { size: "6" }, h("ion-button", { fill: "clear", onClick: event => this.cancel(event) }, "Cancel")), h("ion-col", { size: "6" }, h("ion-button", { color: "success", onClick: event => this.save(event) }, "Save"))))));
    }
    get payCheckEl() { return getElement(this); }
    static get watchers() {
        return {
            "url": ["onUrlChange"]
        };
    }
};
PayCheck.style = payCheckCss;

const progressBarCss = "floodteam-progress-bar .progress-bar-wrapper{display:relative;width:var(--floodteam-progress-bar-width, 100%);height:var(--floodteam-progress-bar-height, 15px);background-color:var(\r\n    --floodteam-progress-bar-background-color,\r\n    var(--theme-light-grey, #eee)\r\n  );border-radius:var(--floodteam-progress-bar-border-radius, 7px);transition:var(--floodteam-progress-bar-transition, 0.4s ease all)}floodteam-progress-bar .progress-bar-wrapper:before{display:block;content:\"\";transition:var(--floodteam-progess-bar-fill-transition, 0.2s ease-in width);background-color:var(\r\n    --floodteam-progress-bar-fill-background-color,\r\n    var(--ion-color-success, green)\r\n  );width:var(--floodteam-progress-bar-fill-width, 0);height:var(--floodteam-progress-bar-height, 15px);border-radius:var(--floodteam-progress-bar-border-radius, 7px)}";

const ProgressBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The percent of the progress bar that will be filled
         */
        this.percent = 0;
    }
    /**
     * Set the progress bar completion percentage
     */
    async setPercent(percent) {
        this.progressBarEl.style.setProperty("--floodteam-progress-bar-fill-width", `${percent >= 100 ? 100 : percent <= 0 ? 0 : percent}%`);
        return percent;
    }
    onPercentUpdate() {
        this.setPercent(this.percent);
    }
    componentDidLoad() {
        this.setPercent(this.percent);
    }
    render() {
        return h("div", { class: "progress-bar-wrapper" });
    }
    get progressBarEl() { return getElement(this); }
    static get watchers() {
        return {
            "percent": ["onPercentUpdate"]
        };
    }
};
ProgressBar.style = progressBarCss;

export { PayCard as floodteam_pay_card, PayCheck as floodteam_pay_check, ProgressBar as floodteam_progress_bar };
