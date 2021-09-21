import { Component, Event, Prop, h, } from "@stencil/core";
export class InputSearchUser {
  constructor() {
    this.placeholder = "Search Users";
    this.disableSearch = false;
    this.mode = "inline";
    this.limit = 5;
    this.results = [];
  }
  async selectUser(event, user) {
    this.value = user.email;
    this.floodteamSelectUser.emit({
      event,
      user,
    });
    setTimeout(async () => {
      await this.inputSearchEl.checkValidity({
        setValidationClass: true,
      });
    }, 200);
    if (this.mode === "popover") {
      await this.inputSearchEl.closePopover();
    }
    else if (this.mode === "inline") {
      await this.inputSearchEl.clearResults();
    }
  }
  render() {
    return (h("floodteam-input-search", { iconEnd: this.iconEnd, iconStart: this.iconStart, mode: this.mode, label: this.label, ref: (el) => (this.inputSearchEl = el), endpoint: "searchUsers", resultsKey: "searchUsers.results", name: this.name, searchParams: {
        limit: this.limit ? this.limit : null,
      }, results: this.results, placeholder: this.placeholder, value: this.value, template: (result) => (h("ion-item", { onClick: (event) => this.selectUser(event, result), style: {
          cursor: "pointer",
        } },
        h("ion-label", null,
          h("h2", null,
            result.firstName ? result.firstName : "",
            " ",
            result.lastName ? result.lastName : ""),
          h("p", null, result.email ? result.email : "No email on file")),
        h("ion-icon", { name: "checkmark-circle" }))) },
      h("slot", { name: "start" }),
      h("slot", { name: "end" })));
  }
  static get is() { return "floodteam-input-search-user"; }
  static get originalStyleUrls() { return {
    "$": ["input-search-user.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input-search-user.css"]
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
        "text": ""
      },
      "attribute": "name",
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
    "placeholder": {
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
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "\"Search Users\""
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
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "required": {
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
      "attribute": "required",
      "reflect": false
    },
    "autofocus": {
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
      "attribute": "autofocus",
      "reflect": false
    },
    "disableSearch": {
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
      "attribute": "disable-search",
      "reflect": false,
      "defaultValue": "false"
    },
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
        "text": ""
      },
      "attribute": "disabled",
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
        "text": ""
      },
      "attribute": "endpoint",
      "reflect": false
    },
    "dataPropsMap": {
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
      "attribute": "data-props-map",
      "reflect": false
    },
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"popover\" | \"inline\"",
        "resolved": "\"inline\" | \"popover\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "\"inline\""
    },
    "iconEnd": {
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
      "attribute": "icon-end",
      "reflect": false
    },
    "iconStart": {
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
      "attribute": "icon-start",
      "reflect": false
    },
    "limit": {
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
        "text": ""
      },
      "attribute": "limit",
      "reflect": false,
      "defaultValue": "5"
    },
    "template": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(result) => any",
        "resolved": "(result: any) => any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "results": {
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
    }
  }; }
  static get events() { return [{
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
    }, {
      "method": "floodteamSelectUser",
      "name": "floodteamSelectUser",
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
}
