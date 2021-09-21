'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');

const epayCss = "floodteam-epay{font-family:var(\r\n    --floodteam-epay-font-family,\r\n    var(--ion-font-family, Arial, Helvetica, sans-serif)\r\n  )}floodteam-epay .hidden{height:0;width:0;opacity:0;pointer-events:none}floodteam-epay floodteam-flip-card .flip-card-inner .badge-top-right{background-color:rgba(0, 0, 0, 0.6);color:#fff;position:absolute;top:0;right:0;padding:5px 10px;border-radius:0 0 0 5px;font-size:12px;text-transform:uppercase}floodteam-epay floodteam-button{cursor:pointer}floodteam-epay floodteam-slides{transition:0.4s ease all;max-width:700px;margin:0 auto;display:block;opacity:1}floodteam-epay floodteam-slides.hide-slides{opacity:0;height:0}floodteam-epay floodteam-toggle{position:absolute;top:var(--floodteam-epay-toggle-top, 10px);right:var(--floodteam-epay-toggle-right, 25px);opacity:1;transition:opacity ease 0.3s;pointer-events:initial}floodteam-epay ion-item ion-icon[slot=\"start\"]{margin:auto 10px 10px auto;fill:var(--ion-text-color)}floodteam-epay .owed{padding:var(--floodteam-epay-owed-padding, 15px 0 15px 0);transition:opacity 0.3s ease}floodteam-epay .back-button{position:absolute;top:0px;left:0px;z-index:9}floodteam-epay .owed>span,floodteam-epay .owed>p{display:block;margin:0 auto;text-align:center}floodteam-epay .owed>span,floodteam-epay #confirmation h1{margin:0 auto;font-size:36px;font-weight:bold;color:var(\r\n    --floodteam-epay-money-color,\r\n    var(--ion-color-success, green)\r\n  ) !important;line-height:60px;height:60px;transition:0.4s all ease}floodteam-epay .owed>p{letter-spacing:2px;color:var(--ion-text-color) !important}floodteam-epay .owed floodteam-progress-bar{transition:0.4s all ease;display:block;max-width:200px;width:80%;margin:15px auto;opacity:1}floodteam-epay .owed.shrunk{padding:10px 0 0 0}floodteam-epay .owed.shrunk floodteam-progress-bar{--floodteam-progress-bar-height:10px}floodteam-epay .owed.shrunk floodteam-toggle{opacity:0;pointer-events:none}floodteam-epay .owed.shrunk>span,floodteam-epay #confirmation h1{height:30px;font-size:28px;padding-top:0}floodteam-epay #payments .past{display:block;max-width:500px;width:90%;margin:0 auto}floodteam-epay #payments h2{color:#999 !important;margin:0 15px;padding:5px 5px;font-size:16px;border-bottom:2px solid #bbb;display:block;text-align:left}floodteam-epay #payments floodteam-button{display:block;width:100%}floodteam-epay #payments floodteam-fallback{--floodteam-fallback-icon-size:50px;display:block;width:100%;padding:15px 0}floodteam-epay #details{padding:0 30px}floodteam-epay #details label{font-size:16px;font-weight:bold;color:#bbb !important;text-align:left}floodteam-epay #details floodteam-grid{padding:15px 0 0 0}floodteam-epay #card{padding:30px 30px 0 30px}floodteam-epay #check{padding:0 30px}floodteam-epay #admin-controls floodteam-button{display:block;width:100%;text-align:center;font-weight:normal;font-size:12px}floodteam-epay .view-button{width:80px;padding:10px;position:absolute;top:var(--floodteam-epay-view-button-top, 0px);left:var(--floodteam-epay-view-button-left, 0px)}floodteam-epay .view-button p{font-size:12px;font-weight:bold;padding:0;margin:0;display:block;color:#95989a !important;width:100%;text-align:center}floodteam-epay .view-button ion-icon{display:block;margin:0 auto;height:25px;width:25px;color:#cccccc !important}floodteam-epay .view-button:hover{cursor:pointer}floodteam-epay .view-button:hover p{color:var(--ion-color-secondary) !important}floodteam-epay .view-button:hover ion-icon{color:var(--ion-color-secondary) !important}floodteam-epay #confirmation .confirm-title{font-weight:bold;color:var(--ion-color-medium) !important;margin:0 auto 15px}floodteam-epay #confirmation floodteam-list{display:block;max-width:400px;width:90%;margin:0 auto 20px}floodteam-epay #confirmation floodteam-list p{font-size:14px}floodteam-epay #confirmation floodteam-progress-circle{color:var(--ion-color-medium);font-size:14px;font-weight:bold;height:40px;float:right}floodteam-epay #confirmation floodteam-thumbs-up{display:block;margin:30px auto}floodteam-epay #confirmation floodteam-error{display:block;width:90%;margin:15px auto 0}floodteam-epay #success p{color:var(--ion-color-medium) !important;font-size:14px;font-weight:bold}floodteam-epay floodteam-error .ft-error-wrapper{padding:0 !important}floodteam-epay ion-item h4{color:var(--theme-dark-grey) !important}@media only screen and (max-width: 500px){floodteam-epay .back-button{top:3px;left:-15px;z-index:9}floodteam-epay .owed>span{font-size:24px !important;line-height:30px;padding-top:20px}floodteam-epay #details{padding:0 10px}floodteam-epay #card{padding:20px 10px 0 10px}floodteam-epay #check{padding:0 10px}}";

const Epay = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ftEpayShowCommisions = index.createEvent(this, "ftEpayShowCommisions", 7);
        this.fireenjinFetch = index.createEvent(this, "fireenjinFetch", 7);
        this.fireenjinSubmit = index.createEvent(this, "fireenjinSubmit", 7);
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
        return (index.h("ion-card", { class: "epay-wrapper" }, this.isBackShowing && (index.h("ion-button", { class: "back-button", onClick: () => this.goBack(), fill: "clear", shape: "round", size: "large", color: this.userPrefersDark ? "light" : "dark" }, index.h("ion-icon", { name: "arrow-back", slot: "icon-only" }))), index.h("div", { class: {
                owed: true,
                shrunk: this.isHeaderShrunk,
                hidden: this.isHeaderHidden,
            } }, index.h("span", null, this.formatUSD(this.owed), index.h("small", null, " owed")), index.h("floodteam-progress-bar", { percent: this.calculatePercentPaid() }), this.isSubTextShowing && index.h("p", null, this.subText)), index.h("ion-slides", { ref: (el) => (this.sliderEl = el), options: {
                autoHeight: true,
                allowTouchMove: false,
                simulateTouch: false,
                autoplay: false,
            }, class: { "hide-slides": this.isSlidesHidding } }, index.h("ion-slide", { id: "payments" }, index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("div", { class: "past" }, index.h("h2", null, "Past Payments"), ((_b = (_a = this.job) === null || _a === void 0 ? void 0 : _a.payments) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (this.job.payments.map((payment) => {
            var _a, _b;
            return (index.h("ion-item", { lines: "none" }, index.h("ion-label", { class: "ion-text-wrap" }, index.h("h4", null, ((_a = payment.user) === null || _a === void 0 ? void 0 : _a.firstName)
                ? payment.user.firstName
                : "", " ", ((_b = payment.user) === null || _b === void 0 ? void 0 : _b.lastName)
                ? payment.user.lastName
                : ""), index.h("p", { style: {
                    color: payment.type === "manual"
                        ? "var(--ion-color-danger)"
                        : "var(--ion-color-success)",
                } }, this.getPaymentText(payment)))));
        })) : (index.h("floodteam-fallback", { icon: "sad", message: "No payments received yet..." }))))))), index.h("ion-slide", { id: "details" }, index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("ion-list", null, index.h("floodteam-input", { class: "billee-input", iconLeft: "mail", label: "Billee Email", type: "email", name: "email", autocomplete: "off", value: this.email
                ? this.email
                : ((_c = this.customer) === null || _c === void 0 ? void 0 : _c.email)
                    ? this.customer.email
                    : null, required: true }), index.h("floodteam-input", { class: "amount-input", iconLeft: "logo-usd", label: "Amount", type: "number", name: "amount", autocomplete: "off", min: "5.00", step: "0.01", value: this.amount, required: true })))), index.h("ion-row", null, index.h("ion-col", { size: "6" }, index.h("ion-button", { color: "success", onClick: () => this.payWithCheck() }, "Pay with Check")), index.h("ion-col", { size: "6" }, index.h("ion-button", { color: "success", onClick: () => this.payWithCard() }, "Pay with Card"))))), index.h("ion-slide", { id: "card" }, index.h("floodteam-pay-card", { stripeKey: this.stripeKey, stripeStyle: {
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
            } })), index.h("ion-slide", { id: "check" }, index.h("floodteam-pay-check", { loading: this.loading, ref: (el) => (this.payCheckEl = el), apiKey: this.dadeKey, url: this.dadeUrl, amount: this.amount })), index.h("ion-slide", { id: "confirmation" }, index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("p", { class: "confirm-title" }, "Confirm Payment of"), index.h("h1", null, this.formatUSD(this.amount)), this.error && index.h("floodteam-error", { message: this.error }), index.h("ion-list", null, index.h("ion-item", null, index.h("ion-icon", { slot: "start", name: "person" }), index.h("div", null, index.h("p", null, "From"), index.h("h4", null, ((_d = this.customer) === null || _d === void 0 ? void 0 : _d.firstName)
            ? this.customer.firstName
            : "Customer", " ", ((_e = this.customer) === null || _e === void 0 ? void 0 : _e.lastName)
            ? this.customer.lastName
            : "Name"))), index.h("ion-item", null, index.h("ion-icon", { slot: "start", name: "mail" }), index.h("div", null, index.h("p", null, "Send receipt to"), index.h("h4", null, this.email ? this.email : "Customer Email"))), index.h("ion-item", null, index.h("ion-icon", { slot: "start", name: "logo-usd" }), index.h("div", null, index.h("p", null, this.paymentType === "manual"
            ? `Paying manually`
            : `Paying with ${this.capitalize(this.paymentType)}`), index.h("div", { innerHTML: this.getPaymentTypeCofirmation() }))), index.h("ion-grid", null, index.h("ion-row", { class: "ion-align-items-center" }, index.h("ion-col", { size: "12", class: "ion-align-self-end" }, index.h("ion-button", { onClick: () => this.approve(), color: "success" }, "Approve"))))))))), index.h("ion-slide", { id: "success" }, index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", null, index.h("floodteam-checkmark", { ref: (el) => (this.checkmarkEl = el) }), index.h("p", null, "You're good to go!"))))))));
    }
    get epayEl() { return index.getElement(this); }
    static get watchers() {
        return {
            "owed": ["onOwedChange"],
            "total": ["onTotalChange"]
        };
    }
};
Epay.style = epayCss;

exports.floodteam_epay = Epay;
