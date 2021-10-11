import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  h,
  Watch
} from "@stencil/core";

declare var Stripe;

@Component({
  tag: "floodteam-pay-card",
  styleUrl: "pay-card.css"
})
export class PayCard implements ComponentInterface {
  stripe: any;

  @Element() payCardEl: HTMLElement;

  @Event() ftSubmitCard: EventEmitter;
  @Event() ftCardError: EventEmitter;
  @Event() ftCancel: EventEmitter;

  @Prop() stripeStyle: any;
  @Prop() stripeKey: string;

  @State() card: any;
  @State() error: string;
  @State() isLoading = false;

  @Watch("stripeKey")
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
      } else {
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
    } else {
      alert("Please provide a Stripe key!");
    }
  }

  initializeStripeElements() {
    this.stripe = (Stripe as any)(this.stripeKey);
    const elements = this.stripe.elements();
    const style: any = this.stripeStyle
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
    return (
      <div
        class={
          this.isLoading ? "pay-card-wrapper is-loading" : "pay-card-wrapper"
        }
      >
        {this.error ? <floodteam-error message={this.error} /> : null}
        <div id="card-element" />
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <ion-button onClick={event => this.cancel(event)} fill="clear">
                Cancel
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button onClick={event => this.save(event)}>
                Save
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
