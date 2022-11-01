import {
  Build,
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  h,
  Watch,
  Listen,
} from "@stencil/core";
import { DadeMobile } from "@dadesystems/dademobile";

@Component({
  tag: "floodteam-pay-check",
  styleUrl: "pay-check.css",
})
export class PayCheck implements ComponentInterface {
  dade: DadeMobile;
  fileInputEl: HTMLInputElement;
  defaultCheckImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIHZpZXdCb3g9IjAgMCAxNjAwIDkwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc5OC4zMTYgNDgzLjE0MUM4MTIuNTIyIDQ4My4xNDEgODI0LjAzOCA0NzEuNjI1IDgyNC4wMzggNDU3LjQxOUM4MjQuMDM4IDQ0My4yMTMgODEyLjUyMiA0MzEuNjk4IDc5OC4zMTYgNDMxLjY5OEM3ODQuMTExIDQzMS42OTggNzcyLjU5NSA0NDMuMjEzIDc3Mi41OTUgNDU3LjQxOUM3NzIuNTk1IDQ3MS42MjUgNzg0LjExMSA0ODMuMTQxIDc5OC4zMTYgNDgzLjE0MVoiIGZpbGw9IiMyNDczQkIiLz4KPHBhdGggZD0iTTg2OS4wNTEgNDA1Ljk3Nkg4NDUuMzM5Qzg0NC4xMzMgNDA1Ljk3NiA4NDIuNjM4IDQwNS4xOTYgODQxLjQ3MiA0MDMuOTY3TDgzMS4wNDcgMzg3LjUxM0M4MzAuODgyIDM4Ny4yNTIgODMwLjY5OCAzODcuMDAzIDgzMC40OTYgMzg2Ljc2OUM4MjYuODk1IDM4Mi41NjkgODIyLjAyOCAzODAuMjU1IDgxNi44MDQgMzgwLjI1NUg3NzkuODI5Qzc3NC42MDQgMzgwLjI1NSA3NjkuNzM3IDM4Mi41NjkgNzY2LjEzNiAzODYuNzY5Qzc2NS45MzUgMzg3LjAwMyA3NjUuNzUxIDM4Ny4yNTIgNzY1LjU4NiAzODcuNTEzTDc1NS4xNiA0MDMuOTkxQzc1NC4yNjggNDA0Ljk2MyA3NTMuMDE0IDQwNiA3NTEuNjk2IDQwNlY0MDIuNzg1Qzc1MS42OTYgNDAxLjA4IDc1MS4wMTkgMzk5LjQ0NCA3NDkuODEzIDM5OC4yMzhDNzQ4LjYwNyAzOTcuMDMyIDc0Ni45NzEgMzk2LjM1NSA3NDUuMjY2IDM5Ni4zNTVINzM1LjYyQzczMy45MTUgMzk2LjM1NSA3MzIuMjc5IDM5Ny4wMzIgNzMxLjA3MyAzOTguMjM4QzcyOS44NjcgMzk5LjQ0NCA3MjkuMTkgNDAxLjA4IDcyOS4xOSA0MDIuNzg1VjQwNkg3MjcuNTgyQzcyMi40NjcgNDA2LjAwNSA3MTcuNTY0IDQwOC4wNCA3MTMuOTQ3IDQxMS42NTZDNzEwLjMzIDQxNS4yNzMgNzA4LjI5NiA0MjAuMTc3IDcwOC4yOTEgNDI1LjI5MVY1MDIuNDMyQzcwOC4yOTYgNTA3LjU0NyA3MTAuMzMgNTEyLjQ1IDcxMy45NDcgNTE2LjA2N0M3MTcuNTY0IDUxOS42ODMgNzIyLjQ2NyA1MjEuNzE4IDcyNy41ODIgNTIxLjcyM0g4NjkuMDUxQzg3NC4xNjUgNTIxLjcxOCA4NzkuMDY5IDUxOS42ODMgODgyLjY4NiA1MTYuMDY3Qzg4Ni4zMDIgNTEyLjQ1IDg4OC4zMzYgNTA3LjU0NyA4ODguMzQyIDUwMi40MzJWNDI1LjI2N0M4ODguMzM2IDQyMC4xNTMgODg2LjMwMiA0MTUuMjQ5IDg4Mi42ODYgNDExLjYzMkM4NzkuMDY5IDQwOC4wMTYgODc0LjE2NSA0MDUuOTgxIDg2OS4wNTEgNDA1Ljk3NlpNNzk4LjMxNiA0OTYuMDAxQzc5MC42ODYgNDk2LjAwMSA3ODMuMjI2IDQ5My43MzkgNzc2Ljg4MSA0ODkuNDk5Qzc3MC41MzYgNDg1LjI2IDc2NS41OTEgNDc5LjIzNCA3NjIuNjcxIDQ3Mi4xODRDNzU5Ljc1MSA0NjUuMTM0IDc1OC45ODcgNDU3LjM3NiA3NjAuNDc1IDQ0OS44OTJDNzYxLjk2NCA0NDIuNDA4IDc2NS42MzkgNDM1LjUzMyA3NzEuMDM1IDQzMC4xMzdDNzc2LjQzIDQyNC43NDEgNzgzLjMwNSA0MjEuMDY3IDc5MC43ODkgNDE5LjU3OEM3OTguMjc0IDQxOC4wODkgODA2LjAzMSA0MTguODU0IDgxMy4wODEgNDIxLjc3NEM4MjAuMTMxIDQyNC42OTQgODI2LjE1NyA0MjkuNjM5IDgzMC4zOTYgNDM1Ljk4NEM4MzQuNjM2IDQ0Mi4zMjkgODM2Ljg5OSA0NDkuNzg4IDgzNi44OTkgNDU3LjQxOUM4MzYuODg3IDQ2Ny42NDggODMyLjgxOCA0NzcuNDU1IDgyNS41ODUgNDg0LjY4OEM4MTguMzUyIDQ5MS45MjEgODA4LjU0NSA0OTUuOTkgNzk4LjMxNiA0OTYuMDAxVjQ5Ni4wMDFaIiBmaWxsPSIjMjQ3M0JCIi8+CjxwYXRoIGQ9Ik02NTguNTc4IDQ1MEM2NTguNTc4IDQxMi40OTMgNjczLjQ3OCAzNzYuNTIxIDcwMCAzNTBDNzI2LjUyMSAzMjMuNDc4IDc2Mi40OTMgMzA4LjU3OCA4MDAgMzA4LjU3OEM4MzcuNTA3IDMwOC41NzggODczLjQ3OSAzMjMuNDc4IDkwMCAzNTBDOTI2LjUyMiAzNzYuNTIxIDk0MS40MjIgNDEyLjQ5MyA5NDEuNDIyIDQ1MEg5NTBDOTUwIDQxMC4yMTggOTM0LjE5NiAzNzIuMDY0IDkwNi4wNjYgMzQzLjkzNEM4NzcuOTM2IDMxNS44MDQgODM5Ljc4MiAzMDAgODAwIDMwMEM3NjAuMjE4IDMwMCA3MjIuMDY0IDMxNS44MDQgNjkzLjkzNCAzNDMuOTM0QzY2NS44MDQgMzcyLjA2NCA2NTAgNDEwLjIxOCA2NTAgNDUwSDY1OC41NzhaIiBmaWxsPSIjRDFEMkQyIi8+CjxwYXRoIGQ9Ik04MDAgNTkxLjQyMkM3NjIuNTEgNTkxLjM2NSA3MjYuNTcyIDU3Ni40NDcgNzAwLjA2MiA1NDkuOTM4QzY3My41NTMgNTIzLjQyOCA2NTguNjM1IDQ4Ny40OSA2NTguNTc4IDQ1MEg2NTBDNjUwIDQ4OS43ODIgNjY1LjgwNCA1MjcuOTM2IDY5My45MzQgNTU2LjA2NkM3MjIuMDY0IDU4NC4xOTYgNzYwLjIxOCA2MDAgODAwIDYwMEM4MzkuNzgyIDYwMCA4NzcuOTM2IDU4NC4xOTYgOTA2LjA2NiA1NTYuMDY2QzkzNC4xOTYgNTI3LjkzNiA5NTAgNDg5Ljc4MiA5NTAgNDUwSDk0MS40MjJDOTQxLjM2NSA0ODcuNDkgOTI2LjQ0NyA1MjMuNDI4IDg5OS45MzggNTQ5LjkzOEM4NzMuNDI4IDU3Ni40NDcgODM3LjQ5IDU5MS4zNjUgODAwIDU5MS40MjJWNTkxLjQyMloiIGZpbGw9IiMyNDczQkIiLz4KPC9zdmc+Cg==";
  dropCheckImage =
    "data:image/png;base64,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";
  @Element() payCheckEl: HTMLElement;

  @Event() ftSubmitCheck: EventEmitter;
  @Event() ftCheckConfirmation: EventEmitter;
  @Event() ftCheckScan: EventEmitter;
  @Event() ftCheckError: EventEmitter;
  @Event() ftCancel: EventEmitter;

  @Prop() apiKey: string;
  @Prop() url: string;
  @Prop() amount: number;
  @Prop() userId: string;
  @Prop() paymentId: string;
  @Prop({ mutable: true }) loading = false;

  @State() payment: any;
  @State() checkFront = this.defaultCheckImage;
  @State() checkBack = this.defaultCheckImage;
  @State() errors: { error_code: number; error_message: string }[] = [];
  @State() isScanningFront = true;
  @State() isHovered = false;

  @State() hasCheckFront = false;
  @State() hasCheckBack = false;

  @Watch("url")
  onUrlChange() {
    this.startScanner();
  }

  async startScanner() {
    if (this.apiKey && this.url) {
      this.dade = new DadeMobile(this.apiKey, this.url);
      try {
        this.payment = await this.dade.stagePayment({
          external_user_id: "0",
          external_reference: this.paymentId ? this.paymentId : "0",
          amount: this.amount ? this.amount : 0,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Must provide Dade API key and url!");
    }
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.startScanner();
  }

  selectFile(event, imageFile?) {
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
        await this.dade.uploadImage(
          this.payment,
          this.isScanningFront ? "checkfront" : "checkrear",
          (reader.result as any).split(",")[1]
        );

        if (this.isScanningFront) {
          this.hasCheckFront = true;
          this.checkFront = reader.result as any;
        } else {
          this.hasCheckBack = true;
          this.checkBack = reader.result as any;
        }
        this.isScanningFront = !this.isScanningFront;
        this.ftCheckScan.emit({
          event,
          front: this.checkFront,
          back: this.checkBack,
        });
        this.loading = false;
      } catch (error) {
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

  @Listen("floodteamFlip")
  onFlip(event) {
    console.log(event.detail);
    this.isScanningFront = !event.detail.flipped;
  }

  @Method()
  async openCamera(scanningBack?: boolean) {
    this.isScanningFront = !scanningBack;
    if (this.fileInputEl) {
      this.fileInputEl.click();
    }
  }

  @Method()
  async confirmPayment(options = {}) {
    try {
      this.loading = true;
      const confirmation = await this.dade.confirmPayment(
        this.payment,
        options
      );
      await this.save(null);
      this.ftCheckConfirmation.emit({ confirmation });
      this.loading = false;
    } catch (error) {
      this.errors = error.errors;
      this.ftCheckError.emit({ event, error, payment: this.payment });
      throw new Error(error.errors[0].error_message);
    }

    return this.payment;
  }

  async save(event) {
    this.errors = [];

    if (!this.hasCheckFront || !this.hasCheckBack) {
      alert(
        `Please take a picture of the ${
          !this.hasCheckFront ? "front" : "back"
        } of the check.`
      );
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
    } catch (error) {
      this.errors = error.errors;
      this.ftCheckError.emit({ event, error, payment: this.payment });
    }
    this.loading = false;
  }

  cancel(event) {
    this.ftCancel.emit({ event });
  }

  @Method()
  async flipCard() {
    this.isScanningFront = !this.isScanningFront;
  }

  onDrop(event) {
    event.preventDefault();
    if (
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.length > 0
    ) {
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
    return (
      <form
        id="form-check"
        onDrop={(event) => this.onDrop(event)}
        onDragOver={(event) => this.onDrag(event)}
        onDragEnter={(event) => this.onDragEnter(event)}
        onDragLeave={(event) => this.onDragLeave(event)}
        onSubmit={(event) => this.onSubmit(event)}
      >
        {this.errors.map((error) => (
          <floodteam-error message={error.error_message} />
        ))}
        <input
          ref={(el) => (this.fileInputEl = el)}
          type="file"
          accept="image/*"
          onChange={(event) => this.selectFile(event)}
          capture="camera"
        />
        <div
          class="check-scanner-preview check-front"
          onClick={() => this.openCamera()}
          style={{
            background: `url(${this.checkFront})`,
          }}
        >
          <ion-button>Upload Front</ion-button>
        </div>
        <div
          class="check-scanner-preview check-back"
          onClick={() => this.openCamera(true)}
          style={{
            background: `url(${this.checkBack})`,
          }}
        >
          <ion-button>Upload Back</ion-button>
        </div>
      </form>
    );
  }
}
