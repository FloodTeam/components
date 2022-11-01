import {
  Build,
  Component,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
} from "@stencil/core";
import { Step } from "@fireenjin/components/dist/types/typings";
import invoiceAmount from "../../helpers/steps/invoiceAmount";
import receiptEmail from "../../helpers/steps/receiptEmail";
import paymentMethod from "../../helpers/steps/paymentMethod";
import payCard from "../../helpers/steps/payCard";
import payCheck from "../../helpers/steps/payCheck";
import confirmCardPayment from "../../helpers/steps/confirmCardPayment";
import confirmCheckPayment from "../../helpers/steps/confirmCheckPayment";
import paymentIntro from "../../helpers/steps/paymentIntro";

@Component({
  tag: "floodteam-payment-flow",
})
export class PaymentFlow {
  flowEl: HTMLFireenjinFlowElement;

  @Prop() user: any;
  @Prop() jobId: string;
  @Prop({ mutable: true }) currentPath = "payingCard";
  @Prop({ mutable: true }) currentStep: string = "paymentIntro";
  @Prop({ mutable: true }) amount: number = null;
  @Prop({ mutable: true }) email: string = null;
  @Prop({ mutable: true }) method = "card";
  @Prop({ mutable: true }) checkFront: string = null;
  @Prop({ mutable: true }) checkBack: string = null;
  @Prop({ mutable: true }) checkAmount: number;

  @State() invoice: any;
  @State() disableNext = false;
  @State() disablePrev = false;
  @State() disableSave = true;
  @State() steps: Step[] = [];
  @State() currentSlideIndex = 0;
  @State() loading = false;
  @State() hasEnteredCard = false;

  paths: { [pathName: string]: () => Step[] } = {
    payingCard: () => [
      paymentIntro(),
      invoiceAmount({ value: this.amount }),
      receiptEmail({
        value: this.email,
      }),
      paymentMethod({
        value: this.method,
      }),
      payCard(),
      confirmCardPayment({
        amount: this.amount,
        email: this.email,
        expirationMonth: "04",
        expirationYear: "24",
        last4: "4242",
        cvv: "***",
      }),
    ],
    payingCheck: () => [
      paymentIntro(),
      invoiceAmount({ value: this.amount }),
      receiptEmail({
        value: this.email,
      }),
      paymentMethod({
        value: this.method,
      }),
      payCheck({
        amount: this.amount,
      }),
      confirmCheckPayment({
        amount: this.amount,
        checkAmount: this.checkAmount,
        checkBack: this.checkBack,
        checkFront: this.checkFront,
        email: this.email,
        method: this.method,
      }),
    ],
  };

  /**
   * Set the path of the flow d
   * @param path The path name to change to
   * @returns A list of steps for the current path
   */
  @Method()
  async setPath(path?: string) {
    this.currentPath = path || this.currentPath;
    this.currentStep =
      this.paths?.[this.currentPath]?.()?.[this.currentSlideIndex]?.name ||
      null;
    this.steps = this.paths[this.currentPath]();
    return this.steps;
  }

  @Listen("ftCheckScan")
  async onCheckScan(event) {
    this.checkFront = event?.detail?.front;
    this.checkBack = event?.detail?.back;
    this.setPath();
    if (this.hasCheckScanned()) this.confirmCheckScan();
  }

  @Listen("ionChange")
  async onChange(event) {
    console.log(event);
    if (event?.target?.name === "method" && event?.detail?.value === "card") {
      this.method = "card";
      this.setPath("payingCard");
    }
    if (event?.target?.name === "method" && event?.detail?.value === "check") {
      this.method = "check";
      this.setPath("payingCheck");
    }
    if (event?.target?.name === "amount") {
      this.amount =
        (event?.target?.value && parseFloat(event?.target?.value)) || null;
      this.setPath();
    }
    if (event?.target?.name === "email") {
      this.email = event?.target?.value || null;
    }
    if (event?.target?.name === "card") {
      this.hasEnteredCard = !!event?.detail?.validity;
      this.disableNext = !this.hasEnteredCard;
      if (this.hasEnteredCard) {
        this.flowEl.slideNext();
        const payCardEl: any = document.querySelector("floodteam-pay-card");
        const { token } = await payCardEl.getCardToken();
        console.log(token);
        this.disableSave = false;
      }
    }
  }

  @Listen("ionSlideDidChange")
  async onSlideChange(event) {
    this.currentSlideIndex = await event.target.getActiveIndex();
    this.currentStep =
      this.paths?.[this.currentPath]?.()?.[this.currentSlideIndex]?.name ||
      null;
    if (this.currentStep === "payCheck" && !this.hasCheckScanned()) {
      this.disableNext = true;
    }
    if (this.currentStep === "payCard" && !this.hasEnteredCard) {
      this.disableNext = true;
    }
  }

  hasCheckScanned() {
    return (
      this.checkBack &&
      this.checkFront &&
      ![this.checkBack, this.checkFront].includes(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIHZpZXdCb3g9IjAgMCAxNjAwIDkwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc5OC4zMTYgNDgzLjE0MUM4MTIuNTIyIDQ4My4xNDEgODI0LjAzOCA0NzEuNjI1IDgyNC4wMzggNDU3LjQxOUM4MjQuMDM4IDQ0My4yMTMgODEyLjUyMiA0MzEuNjk4IDc5OC4zMTYgNDMxLjY5OEM3ODQuMTExIDQzMS42OTggNzcyLjU5NSA0NDMuMjEzIDc3Mi41OTUgNDU3LjQxOUM3NzIuNTk1IDQ3MS42MjUgNzg0LjExMSA0ODMuMTQxIDc5OC4zMTYgNDgzLjE0MVoiIGZpbGw9IiMyNDczQkIiLz4KPHBhdGggZD0iTTg2OS4wNTEgNDA1Ljk3Nkg4NDUuMzM5Qzg0NC4xMzMgNDA1Ljk3NiA4NDIuNjM4IDQwNS4xOTYgODQxLjQ3MiA0MDMuOTY3TDgzMS4wNDcgMzg3LjUxM0M4MzAuODgyIDM4Ny4yNTIgODMwLjY5OCAzODcuMDAzIDgzMC40OTYgMzg2Ljc2OUM4MjYuODk1IDM4Mi41NjkgODIyLjAyOCAzODAuMjU1IDgxNi44MDQgMzgwLjI1NUg3NzkuODI5Qzc3NC42MDQgMzgwLjI1NSA3NjkuNzM3IDM4Mi41NjkgNzY2LjEzNiAzODYuNzY5Qzc2NS45MzUgMzg3LjAwMyA3NjUuNzUxIDM4Ny4yNTIgNzY1LjU4NiAzODcuNTEzTDc1NS4xNiA0MDMuOTkxQzc1NC4yNjggNDA0Ljk2MyA3NTMuMDE0IDQwNiA3NTEuNjk2IDQwNlY0MDIuNzg1Qzc1MS42OTYgNDAxLjA4IDc1MS4wMTkgMzk5LjQ0NCA3NDkuODEzIDM5OC4yMzhDNzQ4LjYwNyAzOTcuMDMyIDc0Ni45NzEgMzk2LjM1NSA3NDUuMjY2IDM5Ni4zNTVINzM1LjYyQzczMy45MTUgMzk2LjM1NSA3MzIuMjc5IDM5Ny4wMzIgNzMxLjA3MyAzOTguMjM4QzcyOS44NjcgMzk5LjQ0NCA3MjkuMTkgNDAxLjA4IDcyOS4xOSA0MDIuNzg1VjQwNkg3MjcuNTgyQzcyMi40NjcgNDA2LjAwNSA3MTcuNTY0IDQwOC4wNCA3MTMuOTQ3IDQxMS42NTZDNzEwLjMzIDQxNS4yNzMgNzA4LjI5NiA0MjAuMTc3IDcwOC4yOTEgNDI1LjI5MVY1MDIuNDMyQzcwOC4yOTYgNTA3LjU0NyA3MTAuMzMgNTEyLjQ1IDcxMy45NDcgNTE2LjA2N0M3MTcuNTY0IDUxOS42ODMgNzIyLjQ2NyA1MjEuNzE4IDcyNy41ODIgNTIxLjcyM0g4NjkuMDUxQzg3NC4xNjUgNTIxLjcxOCA4NzkuMDY5IDUxOS42ODMgODgyLjY4NiA1MTYuMDY3Qzg4Ni4zMDIgNTEyLjQ1IDg4OC4zMzYgNTA3LjU0NyA4ODguMzQyIDUwMi40MzJWNDI1LjI2N0M4ODguMzM2IDQyMC4xNTMgODg2LjMwMiA0MTUuMjQ5IDg4Mi42ODYgNDExLjYzMkM4NzkuMDY5IDQwOC4wMTYgODc0LjE2NSA0MDUuOTgxIDg2OS4wNTEgNDA1Ljk3NlpNNzk4LjMxNiA0OTYuMDAxQzc5MC42ODYgNDk2LjAwMSA3ODMuMjI2IDQ5My43MzkgNzc2Ljg4MSA0ODkuNDk5Qzc3MC41MzYgNDg1LjI2IDc2NS41OTEgNDc5LjIzNCA3NjIuNjcxIDQ3Mi4xODRDNzU5Ljc1MSA0NjUuMTM0IDc1OC45ODcgNDU3LjM3NiA3NjAuNDc1IDQ0OS44OTJDNzYxLjk2NCA0NDIuNDA4IDc2NS42MzkgNDM1LjUzMyA3NzEuMDM1IDQzMC4xMzdDNzc2LjQzIDQyNC43NDEgNzgzLjMwNSA0MjEuMDY3IDc5MC43ODkgNDE5LjU3OEM3OTguMjc0IDQxOC4wODkgODA2LjAzMSA0MTguODU0IDgxMy4wODEgNDIxLjc3NEM4MjAuMTMxIDQyNC42OTQgODI2LjE1NyA0MjkuNjM5IDgzMC4zOTYgNDM1Ljk4NEM4MzQuNjM2IDQ0Mi4zMjkgODM2Ljg5OSA0NDkuNzg4IDgzNi44OTkgNDU3LjQxOUM4MzYuODg3IDQ2Ny42NDggODMyLjgxOCA0NzcuNDU1IDgyNS41ODUgNDg0LjY4OEM4MTguMzUyIDQ5MS45MjEgODA4LjU0NSA0OTUuOTkgNzk4LjMxNiA0OTYuMDAxVjQ5Ni4wMDFaIiBmaWxsPSIjMjQ3M0JCIi8+CjxwYXRoIGQ9Ik02NTguNTc4IDQ1MEM2NTguNTc4IDQxMi40OTMgNjczLjQ3OCAzNzYuNTIxIDcwMCAzNTBDNzI2LjUyMSAzMjMuNDc4IDc2Mi40OTMgMzA4LjU3OCA4MDAgMzA4LjU3OEM4MzcuNTA3IDMwOC41NzggODczLjQ3OSAzMjMuNDc4IDkwMCAzNTBDOTI2LjUyMiAzNzYuNTIxIDk0MS40MjIgNDEyLjQ5MyA5NDEuNDIyIDQ1MEg5NTBDOTUwIDQxMC4yMTggOTM0LjE5NiAzNzIuMDY0IDkwNi4wNjYgMzQzLjkzNEM4NzcuOTM2IDMxNS44MDQgODM5Ljc4MiAzMDAgODAwIDMwMEM3NjAuMjE4IDMwMCA3MjIuMDY0IDMxNS44MDQgNjkzLjkzNCAzNDMuOTM0QzY2NS44MDQgMzcyLjA2NCA2NTAgNDEwLjIxOCA2NTAgNDUwSDY1OC41NzhaIiBmaWxsPSIjRDFEMkQyIi8+CjxwYXRoIGQ9Ik04MDAgNTkxLjQyMkM3NjIuNTEgNTkxLjM2NSA3MjYuNTcyIDU3Ni40NDcgNzAwLjA2MiA1NDkuOTM4QzY3My41NTMgNTIzLjQyOCA2NTguNjM1IDQ4Ny40OSA2NTguNTc4IDQ1MEg2NTBDNjUwIDQ4OS43ODIgNjY1LjgwNCA1MjcuOTM2IDY5My45MzQgNTU2LjA2NkM3MjIuMDY0IDU4NC4xOTYgNzYwLjIxOCA2MDAgODAwIDYwMEM4MzkuNzgyIDYwMCA4NzcuOTM2IDU4NC4xOTYgOTA2LjA2NiA1NTYuMDY2QzkzNC4xOTYgNTI3LjkzNiA5NTAgNDg5Ljc4MiA5NTAgNDUwSDk0MS40MjJDOTQxLjM2NSA0ODcuNDkgOTI2LjQ0NyA1MjMuNDI4IDg5OS45MzggNTQ5LjkzOEM4NzMuNDI4IDU3Ni40NDcgODM3LjQ5IDU5MS4zNjUgODAwIDU5MS40MjJWNTkxLjQyMloiIGZpbGw9IiMyNDczQkIiLz4KPC9zdmc+Cg=="
      )
    );
  }

  async confirmCheckScan() {
    try {
      this.loading = true;
      const payCheckEl: any = document.querySelector("floodteam-pay-check");
      const confirmation = await payCheckEl.confirmPayment();
      this.checkAmount = parseFloat(confirmation?.amount || "0");
      this.loading = false;
      this.disableNext = false;
      this.disableSave = false;
      this.setPath();
      this.flowEl.slideNext();
    } catch (e) {
      this.loading = false;
      if (e?.message?.includes?.("resubmit")) {
        setTimeout(() => {
          this.confirmCheckScan();
        }, 15000);
      }
      console.log(e);
    }

    setTimeout(() => {
      this.flowEl.updateAutoHeight();
    }, 1000);
  }

  async componentWillLoad() {
    if (!Build?.isBrowser) return;
    await this.setPath();
  }

  render() {
    const unit = 1 / (this.steps.length - 1);
    const progress = unit * this.currentSlideIndex;
    const isLastSlide = this.currentSlideIndex === this.steps?.length - 1;
    return (
      <Host
        style={{
          display: "block",
          "max-width": "800px",
          margin: "0 auto",
        }}
      >
        <ion-progress-bar
          style={{
            width: "80%",
            margin: isLastSlide ? "0 auto" : "30px auto",
            transition: "opacity ease 500ms",
            opacity: isLastSlide ? "0" : "1",
          }}
          value={progress}
        />
        <fireenjin-flow
          ref={(el) => (this.flowEl = el)}
          loading={this.loading}
          class="expand"
          endpoint="addPayment"
          steps={this.steps}
          cacheKey="floodteam:addPayment"
          beforeSubmit={async (data) => ({
            ...data,
            jobId: this.jobId || null,
          })}
          prevButton={{
            color: "medium",
            fill: "outline",
            label: "Back",
            disabled: this.disablePrev,
          }}
          nextButton={{
            color: "primary",
            fill: "solid",
            icon: null,
            label: "Next",
            disabled: this.disableNext,
          }}
          saveButton={{
            color: "success",
            fill: "solid",
            icon: null,
            label: "Save",
            disabled: this.disableSave,
          }}
        >
          <div class="ion-padding">
            <h1>Success!</h1>
            <ion-icon
              name="checkmark-circle"
              color="success"
              style={{
                display: "block",
                margin: "3rem auto",
                height: "150px",
                width: "150px",
              }}
            />
            <p>
              Payment complete! You should receive a receipt at
              {this.email} with the details.
            </p>
            <p>Thanks for choosing The Flood Team. 💙</p>
            <ion-button
              color="primary"
              class="enjin-align-center"
              size="large"
              style={{
                margin: "2rem auto",
              }}
              onClick={() =>
                history.length
                  ? history?.back?.()
                  : location?.replace?.(location?.origin)
              }
            >
              OK
            </ion-button>
          </div>
        </fireenjin-flow>
      </Host>
    );
  }
}
