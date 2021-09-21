import { Component, Listen, Prop, h, Host, Method, } from "@stencil/core";
export class PhotoCarousel {
  constructor() {
    this.badgeColor = "medium";
    this.addButtonColor = "primary";
    this.hideAddButton = false;
    this.photos = [];
    this.currentSlide = 0;
    this.options = {};
    this.name = "photocarousel";
  }
  async onSlideChange() {
    this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
  }
  async getCurrentSlide() {
    this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
    return this.currentSlide;
  }
  async slideNext() {
    return this.photoSlidesEl.slideNext();
  }
  async slidePrev() {
    return this.photoSlidesEl.slidePrev();
  }
  async slideTo(slideNumber) {
    return this.photoSlidesEl.slideTo(slideNumber - 1);
  }
  async selectFiles(event) {
    return this.inputPhotoEl.triggerFileInput(event);
  }
  async update() {
    this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
    return this.photoSlidesEl.update();
  }
  componentDidLoad() {
    var _a;
    if (!((_a = this.photoSlidesEl) === null || _a === void 0 ? void 0 : _a.getActiveIndex)) {
      setTimeout(this.componentDidLoad, 200);
      return;
    }
    setTimeout(async () => {
      this.currentSlide = (await this.photoSlidesEl.getActiveIndex()) + 1;
      await this.photoSlidesEl.update();
    }, 200);
  }
  render() {
    var _a, _b;
    return (h(Host, null,
      h("floodteam-input-photo", { name: this.name, ref: (el) => (this.inputPhotoEl = el), path: `jobs/${this.jobId}/photos`, documentId: this.jobId, fileName: new Date().toISOString(), multiple: true }),
      ((_a = this.photos) === null || _a === void 0 ? void 0 : _a.length) ? (h("ion-badge", { color: this.badgeColor, class: "photo-pagination" },
        this.currentSlide,
        " / ",
        this.photos.length)) : null,
      !this.hideAddButton ? (h("ion-fab", { class: "select-photo", onClick: (event) => this.selectFiles(event) },
        h("ion-fab-button", { color: this.addButtonColor },
          h("ion-icon", { name: "add" })))) : null,
      ((_b = this.photos) === null || _b === void 0 ? void 0 : _b.length) ? (h("ion-slides", { ref: (el) => (this.photoSlidesEl = el), pager: false, options: this.options }, this.photos.map((photo) => (h("ion-slide", null,
        h("ion-img", { src: photo.url })))))) : (h("floodteam-fallback", { icon: "image", message: "No Picture Taken..." }))));
  }
  static get is() { return "floodteam-photo-carousel"; }
  static get originalStyleUrls() { return {
    "$": ["photo-carousel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["photo-carousel.css"]
  }; }
  static get properties() { return {
    "jobId": {
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
        "text": ""
      },
      "attribute": "job-id",
      "reflect": false
    },
    "badgeColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string",
        "references": {
          "Color": {
            "location": "import",
            "path": "@ionic/core"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "badge-color",
      "reflect": false,
      "defaultValue": "\"medium\""
    },
    "addButtonColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string",
        "references": {
          "Color": {
            "location": "import",
            "path": "@ionic/core"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "add-button-color",
      "reflect": false,
      "defaultValue": "\"primary\""
    },
    "hideAddButton": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "hide-add-button",
      "reflect": false,
      "defaultValue": "false"
    },
    "photos": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "currentSlide": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "current-slide",
      "reflect": false,
      "defaultValue": "0"
    },
    "options": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "options",
      "reflect": false,
      "defaultValue": "{}"
    },
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
        "text": ""
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"photocarousel\""
    }
  }; }
  static get methods() { return {
    "getCurrentSlide": {
      "complexType": {
        "signature": "() => Promise<number>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<number>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "slideNext": {
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
        "text": "",
        "tags": []
      }
    },
    "slidePrev": {
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
        "text": "",
        "tags": []
      }
    },
    "slideTo": {
      "complexType": {
        "signature": "(slideNumber: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "selectFiles": {
      "complexType": {
        "signature": "(event: any) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "update": {
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get listeners() { return [{
      "name": "ionSlideDidChange",
      "method": "onSlideChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
