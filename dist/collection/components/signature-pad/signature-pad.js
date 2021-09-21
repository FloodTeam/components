import { Build, Component, Event, h, Listen, Method, Prop, Watch, } from "@stencil/core";
import Signature from "signature_pad";
export class SignaturePad {
  constructor() {
    /**
     * The name of the element
     */
    this.name = "signature";
    /**
     * Color used to draw the lines. Can be any color format accepted by context.fillStyle
     */
    this.penColor = "black";
    /**
     * The text to display on the submit button
     */
    this.submitText = "Submit";
    /**
     * The text to display on the clear button
     */
    this.clearText = "Clear";
    /**
     * The label to display below signature pad
     */
    this.label = "Sign Above";
    /**
     * The background color for the signature pad
     */
    this.backgroundColor = "rgb(255, 255, 255)";
    /**
     * Minimum width of a line
     */
    this.minWidth = 0.5;
    /**
     * Maximum width of a line
     */
    this.maxWidth = 0.5;
    /**
     * Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling
     */
    this.throttle = 16;
    /**
     * Add the next point only if the previous one is farther than x pixels
     */
    this.minDistance = 5;
    /**
     * Weight used to modify new velocity based on the previous velocity
     */
    this.velocityFilterWeight = 0.7;
  }
  onDataChange() {
    if (!this.value)
      return;
    this.fromData(this.value);
  }
  onBackgroundColorChange() {
    if (!this.backgroundColor)
      return;
    this.pad.backgroundColor = this.backgroundColor;
  }
  onPenColorChange() {
    if (!this.penColor)
      return;
    this.pad.penColor = this.penColor;
  }
  onMinWidthChange() {
    if (!this.penColor)
      return;
    this.pad.minWidth = this.minWidth;
  }
  onMaxWidthChange() {
    if (!this.penColor)
      return;
    this.pad.maxWidth = this.maxWidth;
  }
  onDotSizeChange() {
    if (!this.penColor)
      return;
    this.pad.dotSize = this.dotSize;
  }
  onThrottleChange() {
    if (!this.penColor)
      return;
    this.pad.throttle = this.throttle;
  }
  onMinDistanceChange() {
    if (!this.penColor)
      return;
    this.pad.minDistance = this.minDistance;
  }
  onVelocityFilterWeightChange() {
    if (!this.penColor)
      return;
    this.pad.velocityFilterWeight = this.velocityFilterWeight;
  }
  async onResize() {
    this.resizeCanvas();
  }
  /**
   * Check if the signature pad is empty
   */
  async isEmpty() {
    return this.pad.isEmpty();
  }
  async toDataURL(type = "image/png") {
    return this.pad.toDataURL(type);
  }
  /**
   * Download the signature as an SVG file
   */
  async downloadSVG() {
    if (this.pad.isEmpty()) {
      alert("Please provide a signature first.");
    }
    else {
      var dataURL = this.pad.toDataURL("image/svg+xml");
      this.download(dataURL, "signature.svg");
    }
  }
  /**
   * Download the signature as a PNG file
   */
  async downloadPNG() {
    if (this.pad.isEmpty()) {
      alert("Please provide a signature first.");
    }
    else {
      var dataURL = this.pad.toDataURL();
      this.download(dataURL, "signature.png");
    }
  }
  /**
   * Download the signature as a JPG file
   */
  async downloadJPG() {
    if (this.pad.isEmpty()) {
      alert("Please provide a signature first.");
    }
    else {
      var dataURL = this.pad.toDataURL("image/jpeg");
      this.download(dataURL, "signature.jpg");
    }
  }
  /**
   * Clear the signature field
   */
  async clear() {
    return this.pad.clear();
  }
  /**
   * Undo the last stroke from the signature
   */
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
  async fromData(data) {
    return this.pad.fromData(data);
  }
  /**
   * Get the signature pad data
   */
  async toData() {
    return this.pad.toData();
  }
  /**
   * Download a file via a new browser tab
   * @param dataURL The signature image file data
   * @param filename The name of the file
   */
  async download(dataURL, filename) {
    if (navigator.userAgent.indexOf("Safari") > -1 &&
      navigator.userAgent.indexOf("Chrome") === -1) {
      window.open(dataURL);
    }
    else {
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
  async submit() {
    this.value = await this.toData();
    this.ionChange.emit();
  }
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
    return (h("ion-card", { id: "signature-pad", class: "signature-pad" },
      h("canvas", { ref: (el) => (this.canvasEl = el), height: "200", width: "" }),
      h("ion-icon", { class: "undo", name: "arrow-undo-circle-outline", onClick: () => this.undo() }),
      h("div", { class: "signature-pad--footer" },
        h("div", { class: "signature-pad--actions" },
          h("ion-button", { fill: "outline", color: "medium", onClick: () => this.clear() }, this.clearText),
          h("p", null, this.label),
          h("ion-button", { color: "success", fill: "solid", onClick: () => this.submit() }, this.submitText)))));
  }
  static get is() { return "floodteam-signature-pad"; }
  static get originalStyleUrls() { return {
    "$": ["signature-pad.css"]
  }; }
  static get styleUrls() { return {
    "$": ["signature-pad.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of the element"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"signature\""
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The current data for the signature pad"
      },
      "attribute": "value",
      "reflect": false
    },
    "penColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Color used to draw the lines. Can be any color format accepted by context.fillStyle"
      },
      "attribute": "pen-color",
      "reflect": false,
      "defaultValue": "\"black\""
    },
    "submitText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The text to display on the submit button"
      },
      "attribute": "submit-text",
      "reflect": false,
      "defaultValue": "\"Submit\""
    },
    "clearText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The text to display on the clear button"
      },
      "attribute": "clear-text",
      "reflect": false,
      "defaultValue": "\"Clear\""
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The label to display below signature pad"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "\"Sign Above\""
    },
    "backgroundColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The background color for the signature pad"
      },
      "attribute": "background-color",
      "reflect": false,
      "defaultValue": "\"rgb(255, 255, 255)\""
    },
    "dotSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Radius of a single dot"
      },
      "attribute": "dot-size",
      "reflect": false
    },
    "minWidth": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Minimum width of a line"
      },
      "attribute": "min-width",
      "reflect": false,
      "defaultValue": "0.5"
    },
    "maxWidth": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum width of a line"
      },
      "attribute": "max-width",
      "reflect": false,
      "defaultValue": "0.5"
    },
    "throttle": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling"
      },
      "attribute": "throttle",
      "reflect": false,
      "defaultValue": "16"
    },
    "minDistance": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Add the next point only if the previous one is farther than x pixels"
      },
      "attribute": "min-distance",
      "reflect": false,
      "defaultValue": "5"
    },
    "velocityFilterWeight": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Weight used to modify new velocity based on the previous velocity"
      },
      "attribute": "velocity-filter-weight",
      "reflect": false,
      "defaultValue": "0.7"
    }
  }; }
  static get events() { return [{
      "method": "ionChange",
      "name": "ionChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "ionInput",
      "name": "ionInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "isEmpty": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Check if the signature pad is empty",
        "tags": []
      }
    },
    "toDataURL": {
      "complexType": {
        "signature": "(type?: string) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "downloadSVG": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Download the signature as an SVG file",
        "tags": []
      }
    },
    "downloadPNG": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Download the signature as a PNG file",
        "tags": []
      }
    },
    "downloadJPG": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Download the signature as a JPG file",
        "tags": []
      }
    },
    "clear": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Clear the signature field",
        "tags": []
      }
    },
    "undo": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Undo the last stroke from the signature",
        "tags": []
      }
    },
    "fromData": {
      "complexType": {
        "signature": "(data: any) => Promise<any>",
        "parameters": [{
            "tags": [{
                "text": "data The signature data",
                "name": "param"
              }],
            "text": "The signature data"
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Fill the signature pad from data",
        "tags": [{
            "name": "param",
            "text": "data The signature data"
          }]
      }
    },
    "toData": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Get the signature pad data",
        "tags": []
      }
    },
    "download": {
      "complexType": {
        "signature": "(dataURL: any, filename: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "dataURL The signature image file data",
                "name": "param"
              }],
            "text": "The signature image file data"
          }, {
            "tags": [{
                "text": "filename The name of the file",
                "name": "param"
              }],
            "text": "The name of the file"
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Download a file via a new browser tab",
        "tags": [{
            "name": "param",
            "text": "dataURL The signature image file data"
          }, {
            "name": "param",
            "text": "filename The name of the file"
          }]
      }
    },
    "resizeCanvas": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Resize the canvas based on browser",
        "tags": []
      }
    },
    "submit": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Update the value and emit ionChange event",
        "tags": []
      }
    },
    "getSignatureInstace": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "onDataChange"
    }, {
      "propName": "backgroundColor",
      "methodName": "onBackgroundColorChange"
    }, {
      "propName": "penColor",
      "methodName": "onPenColorChange"
    }, {
      "propName": "minWidth",
      "methodName": "onMinWidthChange"
    }, {
      "propName": "maxWidth",
      "methodName": "onMaxWidthChange"
    }, {
      "propName": "dotSize",
      "methodName": "onDotSizeChange"
    }, {
      "propName": "throttle",
      "methodName": "onThrottleChange"
    }, {
      "propName": "minDistance",
      "methodName": "onMinDistanceChange"
    }, {
      "propName": "velocityFilterWeight",
      "methodName": "onVelocityFilterWeightChange"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
