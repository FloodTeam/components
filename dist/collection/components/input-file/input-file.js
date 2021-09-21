import { Component, Element, Event, Prop, State, h, Watch, Method, } from "@stencil/core";
export class InputFile {
  constructor() {
    this.type = "file";
    /**
     * The endpoint to upload to
     */
    this.endpoint = "upload";
    this.uploadData = {};
    this.dragOver = false;
  }
  onFileChange() {
    if (!this.value)
      return false;
    this.ionInput.emit({
      name: this.name,
      value: this.value,
    });
  }
  async openFile() {
    const fileInputEl = this.fileUploaderEl.querySelector('input[type="file"]');
    fileInputEl.click();
    return fileInputEl;
  }
  uploadFile(file) {
    this.isLoading = true;
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
        name: this.name,
        endpoint: this.endpoint,
        data: Object.assign({
          id: this.documentId,
          type: this.type,
          fileName: this.fileName,
          file,
          path: this.path,
          encodedContent: event.target.result,
        }, this.uploadData),
      });
    };
    reader.readAsDataURL(file);
  }
  selectFile(event) {
    this.isLoading = true;
    const file = event.target.files[0];
    this.selectedFile = file.name;
    this.uploadFile(file);
  }
  onDrop(event) {
    event.preventDefault();
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === "file") {
          var file = event.dataTransfer.items[i].getAsFile();
          this.selectedFile = file.name;
          this.uploadFile(file);
        }
      }
    }
    else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        this.selectedFile = file.name;
        this.uploadFile(file);
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
    this.dragOver = false;
  }
  onDrag(event) {
    event.preventDefault();
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    console.log("Show UI to drop file", event);
    this.dragOver = true;
  }
  onDragLeave(event) {
    console.log("Hide UI to drop file", event);
    this.dragOver = false;
  }
  render() {
    return (h("ion-card", { class: { "drag-over": this.dragOver }, onDragEnter: (event) => this.onDragEnter(event), onDragOver: (event) => this.onDragOver(event), onDrag: (event) => this.onDrag(event), onDrop: (event) => this.onDrop(event), onDragLeave: (event) => this.onDragLeave(event), onClick: () => this.openFile() },
      h("ion-item", { lines: "none" },
        h("ion-icon", { name: this.icon ? this.icon : "document", slot: "start" }),
        h("div", null,
          h("h2", null, this.dragOver
            ? "Drop File Here"
            : this.label
              ? this.label
              : "Upload a File"),
          h("p", null, this.selectedFile
            ? this.selectedFile
            : this.defaultValue
              ? this.defaultValue
              : "Select a letterhead"))),
      h("input", { type: "file", onChange: (event) => this.selectFile(event), accept: this.accept ? this.accept : null, value: "blah" })));
  }
  static get is() { return "floodteam-input-file"; }
  static get originalStyleUrls() { return {
    "$": ["input-file.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input-file.css"]
  }; }
  static get properties() { return {
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
        "text": ""
      },
      "attribute": "path",
      "reflect": false
    },
    "icon": {
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
      "attribute": "icon",
      "reflect": false
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
        "text": ""
      },
      "attribute": "label",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "file-name",
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
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    },
    "accept": {
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
        "text": ""
      },
      "attribute": "accept",
      "reflect": false
    },
    "defaultValue": {
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
      "attribute": "default-value",
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
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
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"file\""
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
        "text": ""
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
    "uploadData": {
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
      "attribute": "upload-data",
      "reflect": false,
      "defaultValue": "{}"
    }
  }; }
  static get states() { return {
    "isLoading": {},
    "fileUrl": {},
    "selectedFile": {},
    "dragOver": {}
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
    "openFile": {
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
  static get elementRef() { return "fileUploaderEl"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "onFileChange"
    }]; }
}
