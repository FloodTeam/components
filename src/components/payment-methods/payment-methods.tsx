import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Listen,
  Prop,
  h,
  State,
} from "@stencil/core";
import { Address } from "@madnesslabs/thefloodteam-backend/dist/sdk";

@Component({
  tag: "floodteam-payment-methods",
  styleUrl: "payment-methods.css",
})
export class PaymentMethods implements ComponentInterface {
  cardInputEl: HTMLFloodteamInputElement;
  nameInputEl: HTMLFloodteamInputElement;
  addressInputEl: HTMLFloodteamInputAddressElement;
  routingInputEl: HTMLFloodteamInputElement;
  accountInputEl: HTMLFloodteamInputElement;
  thumbsUpEl: any;
  sliderEl: HTMLIonSlidesElement;
  sliderOptions: any = {
    initialSlide: 0,
    autoHeight: true,
    allowTouchMove: false,
    simulateTouch: false,
    autoplay: false,
  };

  @Event() ftRemovePaymentMethod: EventEmitter;

  @Prop() stripeKey: string;
  @Prop() cardName: string;
  @Prop() address: Address = {};
  @Prop() userId: string;
  @Prop() payType: "card" | "checking" = "card";
  @Prop() methods: any[];

  @State() errors: string[] = [];
  @State() currentSlideIndex = 0;

  @Listen("ionSlideDidChange")
  async onSlideChange() {
    this.currentSlideIndex = await this.sliderEl.getActiveIndex();
    this.sliderEl.updateAutoHeight();
  }

  @Listen("floodteamReset")
  async onReset(event) {
    this.errors = [];
    if (event.target.name === "cardForm") await this.cardInputEl.clear();
    this.back();
  }

  @Listen("floodteamSubmit")
  async onSubmit(event) {
    this.errors = [];
    if (
      event.detail.endpoint === "cardForm" ||
      event.target.name === "bankingForm"
    ) {
      return false;
    }
    this.next();
  }

  @Listen("floodteamError", { target: "body" })
  onError(event) {
    if (event.detail.name === "cardForm") {
      setTimeout(() => {
        this.errors = event.detail.error.response.errors.map(
          (err) => err.message
        );
      }, 100);
    }
  }

  @Listen("floodteamSuccess", { target: "body" })
  async onSuccess(event) {
    if (event.detail.endpoint === "addPaymentMethod") {
      setTimeout(() => {
        this.thumbsUpEl.animating = true;
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
        address_line1: address?.street,
        address_line2: address?.unit,
        address_city: address?.city,
        address_state: address?.state,
        address_zip: address?.zip,
      });
      data.token = token.id;
      data.address = address.full;
    } else {
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

  async removePaymentMethod(id: string) {
    if (confirm("Are you sure you wish to delete this payment method?")) {
      this.ftRemovePaymentMethod.emit({
        id,
      });
    }
  }

  render() {
    return (
      <ion-card>
        {this.errors.map((errorMessage) => (
          <floodteam-error>{errorMessage}</floodteam-error>
        ))}
        <ion-slides
          ref={(el) => (this.sliderEl = el)}
          options={this.sliderOptions}
        >
          <ion-slide id="methods">
            <div class="slide-wrapper">
              <h2>Payment Methods</h2>
              {this.methods && this.methods.length > 0 ? (
                <ion-list lines="none">
                  {this.methods.map((method) => (
                    <ion-item>
                      <ion-label>
                        <h2>{method.name}</h2>
                        <p
                          style={{
                            textTransform: "capitalize",
                          }}
                        >
                          {method.type === "checking"
                            ? "Bank Account"
                            : `${method.type} Card`}
                        </p>
                      </ion-label>
                      <ion-button
                        color="danger"
                        fill="clear"
                        slot="end"
                        onClick={() => this.removePaymentMethod(method.id)}
                      >
                        <ion-label>Remove</ion-label>
                        <ion-icon slot="end" name="close-circle" />
                      </ion-button>
                    </ion-item>
                  ))}
                </ion-list>
              ) : (
                <p>
                  Your account with Stripe has been setup successfully, you may
                  now add a payment method to get paid.
                </p>
              )}
              <ion-grid class="slide-controls">
                <ion-row>
                  <ion-col class="ion-align-self-end">
                    <ion-button color="success" onClick={() => this.next()}>
                      Add Payment Method
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </ion-slide>
          <ion-slide id="payment-type">
            <div class="slide-wrapper">
              <h2>Select Payment Type</h2>
              <p>What is the method you would like to get paid on?</p>
              <fireenjin-form
                disableLoader
                name="paymentForm"
                resetButton="<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back"
                resetButtonColor="medium"
                submitButtonColor="success"
                submitButton="Next"
              >
                <ion-grid>
                  <ion-row class="options">
                    <span />
                    <ion-col
                      size="6"
                      class={this.payType === "card" ? "active" : null}
                      onClick={() => (this.payType = "card")}
                    >
                      <h2>
                        <div class="empty-radio" />
                        Debit Card
                      </h2>
                      <ion-icon name="card" />
                      <p>
                        I want to hookup my debit card and have instant pay
                        option.
                      </p>
                    </ion-col>
                    <ion-col
                      class={this.payType === "checking" ? "active" : null}
                      size="6"
                      onClick={() => (this.payType = "checking")}
                    >
                      <h2>
                        <div class="empty-radio" />
                        Bank Account
                      </h2>
                      <ion-icon name="create" />
                      <p>
                        I want to hookup my bank account to receive payments.
                      </p>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </fireenjin-form>
            </div>
          </ion-slide>
          <ion-slide id="add">
            <div class="slide-wrapper">
              <h2>
                Add a {this.payType === "card" ? "Debit Card" : "Bank Account"}
              </h2>
              <p>
                What is the account information for the{" "}
                {this.payType === "card" ? "Debit Card" : "Bank Account"}?
              </p>
              {this.payType === "card" ? (
                <fireenjin-form
                  name="cardForm"
                  resetButton="<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back"
                  resetButtonColor="medium"
                  submitButtonColor="success"
                  endpoint="addPaymentMethod"
                  beforeSubmit={(data) => this.onBeforeSubmit(data)}
                  excludeData={["card", "cardName"]}
                >
                  <ion-list>
                    <floodteam-input
                      ref={(el) => (this.cardInputEl = el)}
                      placeholder="Card Number"
                      name="card"
                      type="card"
                      stripeKey={this.stripeKey}
                      stripeElements={{
                        fonts: [
                          {
                            cssSrc:
                              "https://fonts.googleapis.com/css?family=Work+Sans:400",
                          },
                        ],
                        style: {
                          base: {
                            color:
                              window &&
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
                              color:
                                window &&
                                window.matchMedia &&
                                window.matchMedia(
                                  "(prefers-color-scheme: dark)"
                                ).matches
                                  ? "#8d9ba9"
                                  : "#acadad",
                            },
                          },
                          invalid: {
                            iconColor: "#ee6274",
                            color: "#ee6274",
                          },
                        },
                      }}
                      required
                    />
                    <floodteam-input
                      ref={(el) => (this.nameInputEl = el)}
                      placeholder="Name on Card"
                      name="cardName"
                      value={this.cardName}
                      pattern="^[a-zA-Z]+ (([',. -][a-zA-Z ])?[a-zA-Z]+)*$"
                      required
                    />
                    <floodteam-input-address
                      ref={(el) => (this.addressInputEl = el)}
                      placeholder="Billing Address"
                      name="address"
                      value={this.address}
                      required
                    />
                  </ion-list>
                </fireenjin-form>
              ) : (
                <fireenjin-form
                  resetButton="<ion-icon slot='start' name='arrow-back-outline'></ion-icon>Back"
                  resetButtonColor="medium"
                  submitButtonColor="success"
                  endpoint="addPaymentMethod"
                  beforeSubmit={(data) => this.onBeforeSubmit(data, true)}
                  name="bankingForm"
                >
                  <ion-list>
                    <floodteam-input
                      ref={(el) => (this.accountInputEl = el)}
                      placeholder="Account Number"
                      name="accountNumber"
                      required
                    />
                    <floodteam-input
                      ref={(el) => (this.routingInputEl = el)}
                      placeholder="Routing Number"
                      name="routingNumber"
                      required
                    />
                  </ion-list>
                </fireenjin-form>
              )}
            </div>
          </ion-slide>
          <ion-slide id="confirmation">
            <div class="slide-wrapper">
              <floodteam-thumbs-up
                size="100px"
                ref={(el) => (this.thumbsUpEl = el)}
              />
              <ion-grid>
                <ion-row>
                  <ion-col class="message-content">
                    <ion-label>
                      <h1>Payments are setup!</h1>
                      <p>You can now head back to your dashboard.</p>
                    </ion-label>
                  </ion-col>
                  <ion-col class="dashboard-button">
                    <ion-button href="/dashboard" color="success">
                      Go to Dashboard
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </ion-slide>
        </ion-slides>
      </ion-card>
    );
  }
}
