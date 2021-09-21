import { Component, Element, Event, Method, Listen, Prop, State, Watch, h, } from "@stencil/core";
export class InputPhoto {
  constructor() {
    /**
     * Is the uploader disabled
     */
    this.disabled = false;
    /**
     * Should the photo uploader show the button
     */
    this.showButton = false;
    /**
     * Text to display on the photo upload button
     */
    this.buttonText = "Edit Image";
    /**
     * The type of photo being uploaded
     */
    this.type = "photo";
    /**
     * The endpoint to upload to
     */
    this.endpoint = "upload";
    /**
     * Allow uploading multiple
     */
    this.multiple = false;
  }
  onSuccess(event) {
    if (event.detail.endpoint !== "upload" || event.detail.name !== this.name)
      return false;
    this.loading = false;
  }
  onPhotoChange() {
    this.updatePhoto();
  }
  componentDidLoad() {
    this.updatePhoto();
  }
  updatePhoto() {
    this.photoUrl = this.value
      ? this.value
      : this.fallback
        ? this.fallback
        : null;
    if (this.value) {
      this.ionInput.emit({
        name: this.name,
        value: this.value,
      });
    }
  }
  async triggerFileInput(_event) {
    if (this.disabled) {
      return false;
    }
    const fileInputEl = this.photoUploaderEl.querySelector('input[type="file"]');
    fileInputEl.click();
  }
  selectFile(event) {
    this.uploadPhoto(event.target.files[0]);
  }
  uploadPhoto(file) {
    this.loading = true;
    if (!window.FileReader)
      return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (event.target.readyState != 2)
        return;
      if (event.target.error) {
        alert("Error while reading file");
        return;
      }
      this.fireenjinUpload.emit({
        event,
        endpoint: this.endpoint,
        name: this.name,
        data: {
          id: this.documentId,
          type: this.type,
          path: this.path,
          file,
          fileName: this.fileName,
          encodedContent: event.target.result,
        },
      });
    };
    reader.readAsDataURL(file);
  }
  onDrop(event) {
    event.preventDefault();
    this.uploadPhoto(event.dataTransfer.files[0]);
  }
  onDrag(event) {
    event.preventDefault();
  }
  onDragEnter() {
    this.showButton = true;
  }
  onDragLeave() {
    this.showButton = false;
  }
  render() {
    return (h("div", null,
      h("div", { class: "upload-wrapper" },
        h("div", { class: this.loading ? "photo is-loading" : "photo", style: {
            backgroundImage: this.photoUrl ? `url('${this.photoUrl}')` : null,
          }, onClick: (event) => this.triggerFileInput(event), onDrop: (event) => this.onDrop(event), onDragOver: (event) => this.onDrag(event), onDragEnter: () => this.onDragEnter(), onDragLeave: () => this.onDragLeave() }, !this.photoUrl && this.initials ? this.initials : null),
        this.showButton ? (h("ion-button", { fill: "clear", expand: "block", size: "small", onClick: (event) => this.triggerFileInput(event) },
          this.buttonText,
          h("ion-icon", { name: "image", slot: "end" }))) : null),
      h("slot", null),
      h("input", { type: "file", onChange: (event) => this.selectFile(event), accept: "image/*", multiple: this.multiple })));
  }
  static get is() { return "floodteam-input-photo"; }
  static get originalStyleUrls() { return {
    "$": ["input-photo.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input-photo.css"]
  }; }
  static get properties() { return {
    "disabled": {
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
        "text": "Is the uploader disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A link to the photo to display"
      },
      "attribute": "value",
      "reflect": false
    },
    "path": {
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
        "text": "The storage path to upload the file to"
      },
      "attribute": "path",
      "reflect": false
    },
    "fallback": {
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
        "text": "The fallback image to use if photo isn't set"
      },
      "attribute": "fallback",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The name to use when emitting field change event"
      },
      "attribute": "name",
      "reflect": false
    },
    "fileName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The filename to use for the uploaded file"
      },
      "attribute": "file-name",
      "reflect": false
    },
    "showButton": {
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
        "text": "Should the photo uploader show the button"
      },
      "attribute": "show-button",
      "reflect": false,
      "defaultValue": "false"
    },
    "buttonText": {
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
        "text": "Text to display on the photo upload button"
      },
      "attribute": "button-text",
      "reflect": false,
      "defaultValue": "\"Edit Image\""
    },
    "type": {
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
        "text": "The type of photo being uploaded"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"photo\""
    },
    "documentId": {
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
        "text": "The ID of the document the photo is tied to"
      },
      "attribute": "document-id",
      "reflect": false
    },
    "endpoint": {
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
        "text": "The endpoint to upload to"
      },
      "attribute": "endpoint",
      "reflect": false,
      "defaultValue": "\"upload\""
    },
    "initials": {
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
      "attribute": "initials",
      "reflect": false
    },
    "multiple": {
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
        "text": "Allow uploading multiple"
      },
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "loading": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "loading",
      "reflect": false
    }
  }; }
  static get states() { return {
    "photoUrl": {}
  }; }
  static get events() { return [{
      "method": "fireenjinUpload",
      "name": "fireenjinUpload",
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
    "triggerFileInput": {
      "complexType": {
        "signature": "(_event: any) => Promise<boolean>",
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
    }
  }; }
  static get elementRef() { return "photoUploaderEl"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "onPhotoChange"
    }]; }
  static get listeners() { return [{
      "name": "fireenjinSuccess",
      "method": "onSuccess",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
