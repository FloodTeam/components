import {
  Build,
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  Method,
  Prop,
  Watch,
} from "@stencil/core";
import Signature from "signature_pad";

@Component({
  tag: "floodteam-signature-pad",
  styleUrl: "signature-pad.css",
})
export class SignaturePad {
  canvasEl: any;
  pad: any;

  @Event() ionChange: EventEmitter;
  @Event() ionInput: EventEmitter;

  /**
   * The name of the element
   */
  @Prop() name = "signature";
  /**
   * The current data for the signature pad
   */
  @Prop({ mutable: true }) value: any;
  /**
   * Color used to draw the lines. Can be any color format accepted by context.fillStyle
   */
  @Prop() penColor = "black";
  /**
   * The text to display on the submit button
   */
  @Prop() submitText = "Submit";
  /**
   * The text to display on the clear button
   */
  @Prop() clearText = "Clear";
  /**
   * The label to display below signature pad
   */
  @Prop() label = "Sign Above";
  /**
   * The background color for the signature pad
   */
  @Prop() backgroundColor = "rgb(255, 255, 255)";
  /**
   * Radius of a single dot
   */
  @Prop() dotSize: number;
  /**
   * Minimum width of a line
   */
  @Prop() minWidth = 0.5;
  /**
   * Maximum width of a line
   */
  @Prop() maxWidth = 0.5;
  /**
   * Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling
   */
  @Prop() throttle = 16;
  /**
   * Add the next point only if the previous one is farther than x pixels
   */
  @Prop() minDistance = 5;
  /**
   * Weight used to modify new velocity based on the previous velocity
   */
  @Prop() velocityFilterWeight = 0.7;

  @Watch("value")
  onDataChange() {
    if (!this.value) return;
    this.fromData(this.value);
  }

  @Watch("backgroundColor")
  onBackgroundColorChange() {
    if (!this.backgroundColor) return;
    this.pad.backgroundColor = this.backgroundColor;
  }

  @Watch("penColor")
  onPenColorChange() {
    if (!this.penColor) return;
    this.pad.penColor = this.penColor;
  }

  @Watch("minWidth")
  onMinWidthChange() {
    if (!this.penColor) return;
    this.pad.minWidth = this.minWidth;
  }

  @Watch("maxWidth")
  onMaxWidthChange() {
    if (!this.penColor) return;
    this.pad.maxWidth = this.maxWidth;
  }

  @Watch("dotSize")
  onDotSizeChange() {
    if (!this.penColor) return;
    this.pad.dotSize = this.dotSize;
  }

  @Watch("throttle")
  onThrottleChange() {
    if (!this.penColor) return;
    this.pad.throttle = this.throttle;
  }

  @Watch("minDistance")
  onMinDistanceChange() {
    if (!this.penColor) return;
    this.pad.minDistance = this.minDistance;
  }

  @Watch("velocityFilterWeight")
  onVelocityFilterWeightChange() {
    if (!this.penColor) return;
    this.pad.velocityFilterWeight = this.velocityFilterWeight;
  }

  @Listen("resize", { target: "window" })
  async onResize() {
    this.resizeCanvas();
  }

  /**
   * Check if the signature pad is empty
   */
  @Method()
  async isEmpty() {
    return this.pad.isEmpty();
  }

  @Method()
  async toDataURL(type = "image/png") {
    return this.pad.toDataURL(type);
  }

  /**
   * Download the signature as an SVG file
   */
  @Method()
  async downloadSVG() {
    if (this.pad.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      var dataURL = this.pad.toDataURL("image/svg+xml");
      this.download(dataURL, "signature.svg");
    }
  }

  /**
   * Download the signature as a PNG file
   */
  @Method()
  async downloadPNG() {
    if (this.pad.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      var dataURL = this.pad.toDataURL();
      this.download(dataURL, "signature.png");
    }
  }

  /**
   * Download the signature as a JPG file
   */
  @Method()
  async downloadJPG() {
    if (this.pad.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      var dataURL = this.pad.toDataURL("image/jpeg");
      this.download(dataURL, "signature.jpg");
    }
  }

  /**
   * Clear the signature field
   */
  @Method()
  async clear() {
    return this.pad.clear();
  }

  /**
   * Undo the last stroke from the signature
   */
  @Method()
  async undo() {
    const data = this.pad.toData();

    if (data) {
      data.pop();
      this.pad.fromData(data);
    }

    return data;
  }

  /**
   * Fill the signature pad from data
   * @param data The signature data
   */
  @Method()
  async fromData(data: any) {
    return this.pad.fromData(data);
  }

  /**
   * Get the signature pad data
   */
  @Method()
  async toData() {
    return this.pad.toData();
  }

  /**
   * Download a file via a new browser tab
   * @param dataURL The signature image file data
   * @param filename The name of the file
   */
  @Method()
  async download(dataURL, filename) {
    if (
      navigator.userAgent.indexOf("Safari") > -1 &&
      navigator.userAgent.indexOf("Chrome") === -1
    ) {
      window.open(dataURL);
    } else {
      var blob = this.dataURLToBlob(dataURL);
      var url = window.URL.createObjectURL(blob);

      var a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  /**
   * Resize the canvas based on browser
   */
  @Method()
  async resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var ratio = Math.max(window.devicePixelRatio || 1, 1);

    // This part causes the canvas to be cleared
    this.canvasEl.width = this.canvasEl.offsetWidth * ratio;
    this.canvasEl.height = this.canvasEl.offsetHeight * ratio;
    this.canvasEl.getContext("2d").scale(ratio, ratio);

    // This library does not listen for canvas changes, so after the canvas is automatically
    // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
    // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
    // that the state of this library is consistent with visual state of the canvas, you
    // have to clear it manually.
    this.pad.clear();
  }

  /**
   * Update the value and emit ionChange event
   */
  @Method()
  async submit() {
    this.value = await this.toData();
    this.ionChange.emit();
  }

  @Method()
  async getSignatureInstace() {
    return this.pad;
  }

  dataURLToBlob(dataURL) {
    var BASE64_MARKER = ";base64,";
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(",");
      var contentType = parts[0].split(":")[1];
      var raw = decodeURIComponent(parts[1]);

      return new Blob([raw], { type: contentType });
    }

    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(":")[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      this.pad = new Signature(this.canvasEl, {
        backgroundColor: this.backgroundColor,
        penColor: this.penColor,
        dotSize: this.dotSize,
        maxWidth: this.maxWidth,
        minDistance: this.minDistance,
        minWidth: this.minWidth,
        throttle: this.throttle,
        velocityFilterWeight: this.velocityFilterWeight,
        onEnd: async () => {
          this.value = await this.toData();
          this.ionInput.emit();
        },
      });
      this.resizeCanvas();
    }
  }

  render() {
    return (
      <ion-card id="signature-pad">
        <canvas class="signature-pad" ref={(el) => (this.canvasEl = el)} height="200" width="" />
        <ion-icon
          class="undo"
          name="arrow-undo-circle-outline"
          onClick={() => this.undo()}
        />
        <div class="signature-pad--footer">
          <div class="signature-pad--actions">
            <ion-button
              fill="outline"
              color="medium"
              onClick={() => this.clear()}
            >
              {this.clearText}
            </ion-button>
            <p>{this.label}</p>
            <ion-button
              color="success"
              fill="solid"
              onClick={() => this.submit()}
            >
              {this.submitText}
            </ion-button>
          </div>
        </div>
      </ion-card>
    );
  }
}
