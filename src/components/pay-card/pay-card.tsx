import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  h,
  Method,
} from "@stencil/core";

@Component({
  tag: "floodteam-pay-card",
  styleUrl: "pay-card.css",
})
export class PayCard implements ComponentInterface {
  cardInputEl: HTMLFireenjinInputElement;

  @Element() payCardEl: HTMLElement;

  @Event() ftSubmitCard: EventEmitter;
  @Event() ftCardError: EventEmitter;
  @Event() ftCancel: EventEmitter;

  @Prop() darkMode: boolean = null;
  @Prop() stripeStyle: any = {
    base: {
      color:
        this.darkMode ??
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
          ? "#FFFFFF"
          : "#000000",
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
  };
  @Prop() stripeKey: string;

  @State() card: any;
  @State() error: string;
  @State() isLoading = false;

  @Method()
  async getCardToken() {
    this.error = null;
    this.isLoading = true;
    try {
      const res = await this.cardInputEl.getCardToken(this.card);
      this.isLoading = false;
      return res;
    } catch (e) {
      this.error = e?.message || null;
      this.isLoading = false;
      console.log(e);
      return false;
    }
  }

  render() {
    return (
      <div
        class={
          this.isLoading ? "pay-card-wrapper is-loading" : "pay-card-wrapper"
        }
      >
        {this.error ? <floodteam-error message={this.error} /> : null}
        <fireenjin-input
          ref={(el) => (this.cardInputEl = el)}
          lines="none"
          stripeKey={this.stripeKey}
          stripeElements={
            {
              style: {
                base: {
                  color:
                    this.darkMode ??
                    (window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches)
                      ? "#ffffff"
                      : "#000000",
                  lineHeight: "18px",
                  fontFamily: "PT Sans, Helvetica, sans-serif",
                  fontSmoothing: "antialiased",
                  fontSize: "16px",
                  fontWeight: "bold",
                  "::placeholder": {
                    color: "#bebebe",
                  },
                  left: "15px",
                },
                invalid: {
                  color: "#db3a5e",
                  iconColor: "#db3a5e",
                },
              },
              iconStyle: "solid",
              placeholder: "Card Number",
            } as any
          }
          type="card"
          name="card"
        />
      </div>
    );
  }
}
