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
  intervalWatcher: any;
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

  @State() amount: number;
  @State() isSlidesHidding = false;
  @State() isHeaderShrunk = false;
  @State() isBackShowing = false;
  @State() isSubTextShowing = true;
  @State() isHeaderHidden = false;
  @State() paymentType: "card" | "check" | "manual";
  @State() email: string;
  @State() job: any;
  @State() subText: string;
  @State() confirmationTimerLeft = 30;
  @State() paymentPayload: any;
  @State() checkFront: string;
  @State() checkBack: string;
  @State() paymentEvent: any;
  @State() loading = false;
  @State() errorCode: number;

  @Listen("fireenjinSuccess", { target: "body" })
  async onSuccess(event) {
    if (event.detail.endpoint === "findJob") {
      this.job = event.detail?.data?.job ? event.detail.data.job : null;
      this.customer = event.detail?.data?.job?.customer
        ? event.detail.data.job.customer
        : {};
      this.email = this.job?.customer?.email ? this.job.customer.email : null;
      this.owed = this.job?.amountOwed ? this.job.amountOwed : 0;
      this.total = this.job?.amountBilled ? this.job.amountBilled : 0;
      this.amount = this.owed;
      setTimeout(async () => {
        await this.sliderEl.updateAutoHeight();
      }, 1000);
    } else if (event.detail.endpoint === "addPayment") {
      this.fetchData();
      this.reset();
    }
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
  onInput(event) {
    if (event?.target?.name === "amount") {
      this.amount = event.target.value ? parseFloat(event.target.value) : null;
    } else if (event.target.name === "email") {
      this.email = event.target.value;
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
    this.intervalWatcher = setInterval(() => {
      this.confirmationTimerLeft = this.confirmationTimerLeft - 1;
      if (this.confirmationTimerLeft <= 0) {
        this.approve();
      }
    }, 1000);
  }

  async approve() {
    clearInterval(this.intervalWatcher);
    this.confirmationTimerLeft = 30;
    if (this.paymentType === "check") {
      try {
        await this.confirmPayment(
          this.errorCode === 2006
            ? {
                ignore_check_amount_mismatch: true,
              }
            : {}
        );
        this.submitPayment(this.paymentType, this.paymentEvent);
      } catch (error) {
        console.log("Error taking check payment", error);
      }
    } else {
      this.submitPayment(this.paymentType, this.paymentEvent);
    }
  }

  submitPayment(type: "card" | "check" | "manual", event) {
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
    console.log(event);
    if (
      !event ||
      !event.detail ||
      !event.detail.error ||
      !event.detail.error.errors ||
      !event.detail.error.errors[0]
    ) {
      return false;
    }
    if (this.intervalWatcher) {
      clearInterval(this.intervalWatcher);
      this.confirmationTimerLeft = 30;
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

  @Listen("ftSelect")
  onSelect(event) {
    if (
      event &&
      event.detail &&
      event.detail.user &&
      event.detail.user.user_email
    ) {
      this.userId = event.detail.user.id;
      this.customer = event.detail.user;
      this.email = event.detail.user.user_email;
    }
  }

  @Listen("ftSubmitCheck")
  async onSubmitCheck(event) {
    this.goToConfirmation(event);
  }

  @Listen("ftCancel")
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
    this.isHeaderShrunk = false;
    this.isBackShowing = false;
    this.isSubTextShowing = true;
    this.isHeaderHidden = false;
    this.paymentType = null;
    this.paymentEvent = null;
    clearInterval(this.intervalWatcher);
    this.confirmationTimerLeft = 30;
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
      this.isHeaderShrunk = true;
      this.isSubTextShowing = false;
      this.isBackShowing = true;
    } else if (name === "confirmation" || name === "success") {
      this.isHeaderHidden = true;
      if (name === "success") {
        await this.success();
      }
    } else if (name === "payments") {
      this.isBackShowing = false;
      this.isSubTextShowing = true;
      this.isHeaderShrunk = false;
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
    this.amount = parseFloat(this.owed) || 0;
    this.subText = `${this.calculatePercentPaid()}% paid of ${this.formatUSD(
      parseFloat(this.total) || 0
    )} bill`;
  }

  calculatePercentPaid() {
    const decimal = Math.round((this.owed / this.total) * 100);
    const percent = 100 - decimal;
    return typeof percent === "number" && percent !== Infinity && percent > 0
      ? percent
      : 0;
  }

  takePayment() {
    this.isHeaderShrunk = true;
    this.isBackShowing = true;
    this.isSubTextShowing = false;
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
    this.paymentType = "card";
    this.subText = `Paying ${this.formatUSD(this.amount)} by card...`;
    this.isSubTextShowing = true;
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
    this.paymentType = "check";
    this.subText = `Paying ${this.formatUSD(this.amount)} by check...`;
    this.isSubTextShowing = true;
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
      } else if (this.paymentType === "check") {
        await this.sliderEl.slideTo(3);
      } else if (this.paymentType === "manual") {
        await this.sliderEl.slideTo(1);
      }
      clearInterval(this.intervalWatcher);
      this.confirmationTimerLeft = 30;
    } else {
      this.paymentType === "check"
        ? await this.sliderEl.slideTo(1)
        : await this.sliderEl.slidePrev();
    }

    this.paymentType = null;
    if (currentSlideIndex === 0) {
      this.reset();
    } else if (currentSlideIndex === 1) {
      this.isHeaderShrunk = true;
      this.isSubTextShowing = false;
    }
    this.isHeaderHidden = false;
  }

  capitalize(s) {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  getPaymentTypeCofirmation() {
    if (this.paymentType === "card") {
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
    } else if (this.paymentType === "check") {
      return `<ion-grid><ion-row><ion-col size="6"><img src="${this.checkFront}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col><ion-col size="6"><img src="${this.checkBack}" style="border-radius: 20px; width:100%; display: block; max-width: 300px;" /></ion-col></ion-row></ion-grid>`;
    } else if (this.paymentType === "manual") {
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
      <ion-card class="epay-wrapper">
        {this.isBackShowing && (
          <ion-button
            class="back-button"
            onClick={() => this.goBack()}
            fill="clear"
            shape="round"
            size="large"
            color={this.userPrefersDark ? "light" : "dark"}
          >
            <ion-icon name="arrow-back" slot="icon-only" />
          </ion-button>
        )}
        <div
          class={{
            owed: true,
            shrunk: this.isHeaderShrunk,
            hidden: this.isHeaderHidden,
          }}
        >
          <span>
            {this.formatUSD(this.owed)}
            <small> owed</small>
          </span>
          <floodteam-progress-bar percent={this.calculatePercentPaid()} />
          {this.isSubTextShowing && <p>{this.subText}</p>}
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
                        icon="sad"
                        message="No payments received yet..."
                      />
                    )}
                  </div>
                  <ion-button
                    color="success"
                    onClick={() => this.takePayment()}
                  >
                    Take a Payment
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-slide>
          <ion-slide id="details">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-list>
                    <floodteam-input
                      class="billee-input"
                      iconLeft="mail"
                      label="Billee Email"
                      type="email"
                      name="email"
                      autocomplete="off"
                      value={
                        this.email
                          ? this.email
                          : this.customer?.email
                          ? this.customer.email
                          : null
                      }
                      required
                    />
                    <floodteam-input
                      class="amount-input"
                      iconLeft="logo-usd"
                      label="Amount"
                      type="number"
                      name="amount"
                      autocomplete="off"
                      min="5.00"
                      step="0.01"
                      value={this.amount}
                      required
                    />
                  </ion-list>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="6">
                  <ion-button
                    color="success"
                    onClick={() => this.payWithCheck()}
                  >
                    Pay with Check
                  </ion-button>
                </ion-col>
                <ion-col size="6">
                  <ion-button
                    color="success"
                    onClick={() => this.payWithCard()}
                  >
                    Pay with Card
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
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
                          {this.paymentType === "manual"
                            ? `Paying manually`
                            : `Paying with ${this.capitalize(
                                this.paymentType
                              )}`}
                        </p>
                        <div innerHTML={this.getPaymentTypeCofirmation()} />
                      </div>
                    </ion-item>
                    <ion-grid>
                      <ion-row class="ion-align-items-center">
                        <ion-col size="2" class="ion-align-self-end">
                          <floodteam-progress-circle
                            percent={(this.confirmationTimerLeft / 30) * 100}
                            stroke={5}
                            radius={30}
                            ref={(el) => (this.countdownTimerEl = el)}
                          >
                            {this.confirmationTimerLeft}s
                          </floodteam-progress-circle>
                        </ion-col>
                        <ion-col size="4">Until Auto-Approval</ion-col>
                        <ion-col size="6" class="ion-align-self-end">
                          <ion-button
                            onClick={() => this.approve()}
                            color="success"
                          >
                            Approve
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
