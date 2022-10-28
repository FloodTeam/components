import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h,
  Build,
} from "@stencil/core";

@Component({
  tag: "floodteam-epay",
  styleUrl: "epay.css",
})
export class Epay implements ComponentInterface {
  payCheckEl: any;
  sliderEl: HTMLIonSlidesElement;
  checkmarkEl: any;
  slideIndex = [
    "summary",
    "payment",
    "card",
    "check",
    "confirmation",
    "success",
  ];
  countdownTimerEl: any;
  userPrefersDark =
    window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;

  @Element() epayEl: any;

  @Event() ftEpayShowCommisions: EventEmitter<any>;
  @Event() fireenjinFetch: EventEmitter<any>;
  @Event() fireenjinSubmit: EventEmitter<any>;

  /**
   * The error message to display
   */
  @Prop({ mutable: true }) error: string;
  /**
   * The amount of money owed
   */
  @Prop({ mutable: true }) owed: any = 0;
  /**
   * The total amount of money billed
   */
  @Prop({ mutable: true }) total: any = 0;
  /**
   * The slide to show when loading the component
   */
  @Prop() showSlide:
    | "report"
    | "details"
    | "payments"
    | "card"
    | "check"
    | "confirmation";
  /**
   * The list of payments
   */
  @Prop({ mutable: true }) payments: {
    timestamp: string;
    brand: string;
    last4: number;
    amount: number;
  }[] = [];
  @Prop() stripeKey: string;
  @Prop({ mutable: true }) customer: any = {};
  @Prop({ mutable: true }) jobId: string;
  @Prop({ mutable: true }) userId: string;
  @Prop() dadeKey: string;
  @Prop() dadeUrl: string;
  @Prop({ mutable: true }) users: any[] = [];
  @Prop({ mutable: true }) paymentId: string;
  @Prop({ mutable: true }) paymentMethod: "card" | "check" | "manual" | "ach" =
    "card";
  @Prop({ mutable: true }) paymentType: "insurance" | "codeblue";
  @Prop() disableFetch = false;
  @Prop() job: any;

  @State() amount: number;
  @State() isSlidesHidding = false;
  @State() isBackShowing = false;
  @State() isHeaderHidden = false;
  @State() email: string;
  @State() subText: string;
  @State() paymentPayload: any;
  @State() checkFront: string;
  @State() checkBack: string;
  @State() paymentEvent: any;
  @State() loading = false;
  @State() errorCode: number;

  @Listen("fireenjinSuccess", { target: "body" })
  async onSuccess(event) {
    if (event.detail.endpoint === "addPayment") {
      this.fetchData();
      this.reset();
    } else if (
      event?.detail?.endpoint === "findJob" &&
      this.jobId === event?.detail?.data?.job?.id
    ) {
      this.customer = this.job?.customer || {};
      this.email = this.job?.customer?.email || null;
      this.owed = this.job?.amountOwed || 0;
      this.total = this.job?.amountBilled || 0;
      this.amount = this.owed;
      setTimeout(async () => {
        await this.sliderEl.updateAutoHeight();
      }, 1000);
    }
  }

  @Listen("fireenjinSubmit")
  async onSubmit() {
    if (this.paymentMethod === "check") {
      await this.payWithCheck();
    } else {
      await this.payWithCard();
    }
  }

  @Listen("fireenjinReset")
  @Listen("ftCancel")
  onReset() {
    this.goBack();
  }

  @Listen("ftCheckScan")
  onCheckScan(event) {
    if (!event || !event.detail || !event.detail.front) {
      return false;
    }

    this.checkFront = event.detail.front;
    this.checkBack = event.detail.back;
  }

  @Listen("ionInput")
  @Listen("ionChange")
  onInput(event) {
    if (event?.target?.name === "amount") {
      this.amount = event.target.value ? parseFloat(event.target.value) : null;
    } else if (event.target.name === "email") {
      this.email = event.target.value;
    } else if (event.target.name === "paymentMethod") {
      this.paymentMethod = event.target.value;
    } else if (event.target.name === "paymentType") {
      this.paymentType = event.target.value;
    }
  }

  @Listen("ftToggle")
  onFtToggle(event) {
    if (event?.target?.name === "projected") {
      console.log(event);
    }
  }

  @Listen("ftSubmitCard")
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
    if (this.paymentMethod === "check") {
      try {
        await this.confirmPayment(
          this.errorCode === 2006
            ? {
                ignore_check_amount_mismatch: true,
              }
            : {}
        );
        this.submitPayment(this.paymentMethod, this.paymentEvent);
      } catch (error) {
        console.log("Error taking check payment", error);
      }
    } else {
      this.submitPayment(this.paymentMethod, this.paymentEvent);
    }
  }

  submitPayment(type: "card" | "check" | "manual" | "ach", event) {
    let data = {};
    if (type === "card") {
      data = {
        token: event.detail.token.id,
        amount: this.amount,
        email: this.email,
      };
    } else if (type === "check") {
      data = {
        transactionId: event.id ? event.id : null,
        checkNumber: event.check_number ? event.check_number : null,
        amount: this.amount,
        email: this.email,
      };
    } else if (type === "manual") {
      data = {
        amount: this.amount,
        email: this.email,
      };
    }
    this.fireenjinSubmit.emit({
      endpoint: "addPayment",
      data: {
        ...data,
        jobId: this.jobId,
        userId: this.userId,
        type,
      },
    });
  }

  @Listen("ftCardError")
  onCardError() {
    setTimeout(() => {
      this.updateSlides();
    }, 1000);
  }

  @Listen("ionSlideDidChange")
  async onSlideChange(event) {
    console.log(event);
    if (!this.sliderEl) return;
    await this.setSlide(
      this.sliderEl.querySelectorAll("ion-slide")[
        await this.sliderEl.getActiveIndex()
      ].id as any
    );
  }

  @Listen("ftCheckError")
  onCheckError(event) {
    if (
      !event ||
      !event.detail ||
      !event.detail.error ||
      !event.detail.error.errors ||
      !event.detail.error.errors[0]
    ) {
      return false;
    }
    if (event.detail.error.errors[0].error_code === 2006) {
      this.errorCode = 2006;
      this.error = `The amount you typed doesn't match what the scanner saw (${this.formatUSD(
        event.detail.error.errors[0].error_data.read_amount
      )}). Are you sure you wish to proceed?`;
    } else {
      this.error = event.detail.error.errors[0].error_message;
    }
    setTimeout(() => {
      this.updateSlides();
    }, 2000);
  }

  @Listen("ftSubmitCheck")
  async onSubmitCheck(event) {
    this.goToConfirmation(event);
  }

  /**
   * Update the ion-slides height
   */
  @Method()
  async updateSlides() {
    this.sliderEl.updateAutoHeight();
    return this.sliderEl.update();
  }

  @Method()
  async success() {
    await this.sliderEl.slideTo(5);
    this.isBackShowing = false;
    this.checkmarkEl.animating = true;
    setTimeout(async () => {
      await this.reset();
    }, 5000);
  }

  @Method()
  async reset() {
    this.error = null;
    this.paymentPayload = null;
    this.sliderEl.slideTo(0);
    this.amount = 0;
    this.isBackShowing = false;
    this.isHeaderHidden = false;
    this.paymentMethod = null;
    this.paymentEvent = null;
    this.setSubText();
    await this.sliderEl.update();
  }

  /**
   * Confirm a check payment
   */
  @Method()
  async confirmPayment(options: any = {}) {
    return this.payCheckEl.confirmPayment(options);
  }

  @Watch("owed")
  onOwedChange() {
    this.setSubText();
  }

  @Watch("total")
  onTotalChange() {
    this.setSubText();
  }

  componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.customer = this.job?.customer || {};
    this.email = this.job?.customer?.email || null;
    this.total = this.job?.amountBilled || 0;
    this.amount = this.job?.amountOwed;
    setTimeout(async () => {
      await this.sliderEl.updateAutoHeight();
    }, 1000);
    this.setSubText();
    if (this.showSlide) {
      this.setSlide(this.showSlide);
    }
    if (!this.disableFetch) {
      this.fetchData();
    }
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

  async setSlide(
    name:
      | "report"
      | "details"
      | "payments"
      | "card"
      | "check"
      | "confirmation"
      | "success"
  ) {
    if (["confirmation", "card", "check", "success"].indexOf(name) >= 0) {
      this.isBackShowing = true;
    } else if (name === "confirmation" || name === "success") {
      this.isHeaderHidden = true;
      if (name === "success") {
        await this.success();
      }
    } else if (name === "payments") {
      this.isBackShowing = false;
    }
  }

  formatUSD(amount: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  }

  setSubText() {
    this.amount = parseFloat(`${this.job?.amountOwed || 0}`);
    this.subText = `${this.calculatePercentPaid()}% paid of ${this.formatUSD(
      parseFloat(this.total) || 0
    )} bill`;
  }

  calculatePercentPaid() {
    const decimal = Math.round((this.job?.amountOwed / this.total) * 100);
    const percent = 100 - decimal;
    return typeof percent === "number" && percent !== Infinity && percent > 0
      ? percent
      : 0;
  }

  @Method()
  async takePayment() {
    if (this.isBackShowing) return;

    this.isBackShowing = true;
    this.sliderEl.slideNext();
  }

  payWithCard() {
    if (
      !this.amount ||
      this.amount <= 0 ||
      !this.email ||
      this.email.indexOf("@") === -1
    ) {
      alert("Billee email address and amount being paid are required!");

      return false;
    }
    this.paymentMethod = "card";
    this.subText = `Paying ${this.formatUSD(this.amount)} by card...`;
    this.sliderEl.slideTo(2);
  }

  payWithCheck() {
    if (
      !this.amount ||
      this.amount <= 0 ||
      !this.email ||
      this.email.indexOf("@") === -1
    ) {
      alert("Billee email address and amount being paid are required!");

      return false;
    }
    this.paymentMethod = "check";
    this.subText = `Paying ${this.formatUSD(this.amount)} by check...`;
    this.sliderEl.slideTo(3);
  }

  payManually() {
    if (
      !this.amount ||
      this.amount <= 5 ||
      !this.email ||
      this.email.indexOf("@") === -1
    ) {
      alert(
        "Billee email address and amount greater than $5.00 being paid are required!"
      );

      return false;
    }
    this.paymentMethod = "manual";
    this.goToConfirmation(null);
  }

  async goBack() {
    this.loading = false;
    this.error = null;
    const currentSlideIndex = await this.sliderEl.getActiveIndex();
    if (currentSlideIndex === 4) {
      if (this.paymentMethod === "card") {
        await this.sliderEl.slideTo(2);
      } else if (this.paymentMethod === "check") {
        await this.sliderEl.slideTo(3);
      } else if (this.paymentMethod === "manual") {
        await this.sliderEl.slideTo(1);
      }
    } else {
      this.paymentMethod === "check"
        ? await this.sliderEl.slideTo(1)
        : await this.sliderEl.slidePrev();
    }

    this.paymentMethod = null;
    if (currentSlideIndex === 0) {
      this.reset();
    }
    this.isHeaderHidden = false;
  }

  capitalize(s) {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  getPaymentTypeCofirmation() {
    if (this.paymentMethod === "card") {
      return `<h4>${this.capitalize(
        this.paymentPayload &&
          this.paymentPayload.token &&
          this.paymentPayload.token.card &&
          this.paymentPayload.token.card
          ? this.paymentPayload.token.card.brand
          : ""
      )} ${
        this.paymentPayload &&
        this.paymentPayload.token &&
        this.paymentPayload.token.card &&
        this.paymentPayload.token.card
          ? this.paymentPayload.token.card.funding
          : ""
      } ending in ${
        this.paymentPayload &&
        this.paymentPayload.token &&
        this.paymentPayload.token.card &&
        this.paymentPayload.token.card
          ? this.paymentPayload.token.card.last4
          : ""
      }</h4>`;
    } else if (this.paymentMethod === "check") {
      return `<ion-grid><ion-row><ion-col size="6"><img src="${this.checkFront}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col><ion-col size="6"><img src="${this.checkBack}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col></ion-row></ion-grid>`;
    } else if (this.paymentMethod === "manual") {
      return "<h4>This should be avoided!</h4>";
    }
  }

  getPaymentText(payment) {
    let paymentText = "";
    const paidOn = new Date(payment.createdAt).toLocaleString().split(",")[0];
    if (payment.type === "manual") {
      paymentText = `${this.formatUSD(payment.amount)} manually on ${paidOn}`;
    } else if (payment.type === "card") {
      paymentText = `${this.formatUSD(payment.amount)} on ${
        payment.brand ? payment.brand : ""
      } card ending in ${
        payment.ending_in ? payment.ending_in : ""
      } on ${paidOn}`;
    } else if (payment.type === "check") {
      paymentText = `${this.formatUSD(payment.amount)} by check ${
        payment.check_number ? payment.check_number : ""
      } on ${paidOn}`;
    }

    return paymentText;
  }

  render() {
    return (
      <ion-card>
        <div
          class={{
            owed: true,
            hidden: this.isHeaderHidden,
          }}
        >
          <span>
            {this.formatUSD(this.job?.amountOwed || 0)}
            <small> owed</small>
          </span>
          <p>{this.subText}</p>
        </div>
        <ion-slides
          ref={(el) => (this.sliderEl = el)}
          options={{
            autoHeight: true,
            allowTouchMove: false,
            simulateTouch: false,
            autoplay: false,
          }}
          class={{ "hide-slides": this.isSlidesHidding }}
        >
          <ion-slide id="payments">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <div class="past">
                    <h2>Past Payments</h2>
                    {this.job?.payments?.length > 0 ? (
                      this.job.payments.map((payment) => (
                        <ion-item lines="none">
                          <ion-label class="ion-text-wrap">
                            <h4>
                              {payment.user?.firstName
                                ? payment.user.firstName
                                : ""}{" "}
                              {payment.user?.lastName
                                ? payment.user.lastName
                                : ""}
                            </h4>
                            <p
                              style={{
                                color:
                                  payment.type === "manual"
                                    ? "var(--ion-color-danger)"
                                    : "var(--ion-color-success)",
                              }}
                            >
                              {this.getPaymentText(payment)}
                            </p>
                          </ion-label>
                        </ion-item>
                      ))
                    ) : (
                      <floodteam-fallback
                        icon="logo-usd"
                        message="No payments received yet..."
                      />
                    )}
                  </div>
                  <ion-button onClick={() => this.takePayment()}>
                    Pay Now
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-slide>
          <ion-slide id="details">
            <fireenjin-form
              id="invoice"
              name="invoice"
              class="ion-padding"
              resetButton="Back"
              resetButtonColor="medium"
              submitButton="Next"
              disableReset
              disableLoader
            >
              <fireenjin-input-amount
                name="amount"
                labelPosition="stacked"
                label="Amount on Invoice"
                value={this.amount}
              />
              <fireenjin-input
                name="email"
                labelPosition="stacked"
                type="email"
                label="Invoice Email"
                value={this.email}
              />
              <fireenjin-select
                lines="full"
                labelPosition="stacked"
                name="paymentType"
                label="Payment Type"
                value={null}
                options={[
                  { label: "Self", value: null },
                  { label: "Insurance", value: "insurance" },
                  { label: "Code Blue", value: "codeblue" },
                ]}
              />
              <fireenjin-select
                lines="full"
                labelPosition="stacked"
                name="paymentMethod"
                label="Payment Method"
                value={"card"}
                options={[
                  { label: "Check", value: "check" },
                  { label: "Card", value: "card" },
                  { label: "ACH", value: "ach" },
                ]}
              />
              <fireenjin-toggle
                lines="full"
                name="send"
                value={true}
                label="Send Invoice"
                color="secondary"
              />
            </fireenjin-form>
          </ion-slide>
          <ion-slide id="card">
            <floodteam-pay-card
              stripeKey={this.stripeKey}
              stripeStyle={{
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
              }}
            />
          </ion-slide>
          <ion-slide id="check">
            <floodteam-pay-check
              loading={this.loading}
              ref={(el) => (this.payCheckEl = el)}
              apiKey={this.dadeKey}
              url={this.dadeUrl}
              amount={this.amount}
            />
          </ion-slide>
          <ion-slide id="confirmation">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <p class="confirm-title">Confirm Payment of</p>
                  <h1>{this.formatUSD(this.amount)}</h1>
                  {this.error && <floodteam-error message={this.error} />}
                  <ion-list>
                    <ion-item>
                      <ion-icon slot="start" name="person" />
                      <div>
                        <p>From</p>
                        <h4>
                          {this.customer?.firstName
                            ? this.customer.firstName
                            : "Customer"}{" "}
                          {this.customer?.lastName
                            ? this.customer.lastName
                            : "Name"}
                        </h4>
                      </div>
                    </ion-item>
                    <ion-item>
                      <ion-icon slot="start" name="mail" />
                      <div>
                        <p>Send receipt to</p>
                        <h4>{this.email ? this.email : "Customer Email"}</h4>
                      </div>
                    </ion-item>
                    <ion-item>
                      <ion-icon slot="start" name="logo-usd" />
                      <div>
                        <p>
                          {this.paymentMethod === "manual"
                            ? `Paying manually`
                            : `Paying with ${this.capitalize(
                                this.paymentMethod
                              )}`}
                        </p>
                        <div innerHTML={this.getPaymentTypeCofirmation()} />
                      </div>
                    </ion-item>
                    <ion-grid>
                      <ion-row class="ion-align-items-center">
                        <ion-col size="12" class="ion-align-self-end">
                          <ion-button onClick={() => this.approve()}>
                            Approve & Finish
                          </ion-button>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-list>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-slide>
          <ion-slide id="success">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <floodteam-checkmark ref={(el) => (this.checkmarkEl = el)} />
                  <p>You're good to go!</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-slide>
        </ion-slides>
      </ion-card>
    );
  }
}
