import { Component, Listen, Prop, h, Build } from "@stencil/core";
export class FloatingButton {
  constructor() {
    /**
     * The list of buttons to show when the material button is clicked
     */
    this.buttonList = [];
    /**
     * The icon to use on the material button when it's closed
     */
    this.openIcon = "ellipsis-vertical";
    /**
     * The horizontal position of the button
     */
    this.horizontal = "end";
    /**
     * The vertical position of the button
     */
    this.vertical = "center";
    /**
     * The side the list should display
     */
    this.listSide = "bottom";
    /**
     * The color of the badge to display
     */
    this.badgeColor = "success";
  }
  outterFabClick(event) {
    if (this.fabEl &&
      this.fabEl.activated &&
      !event.target.closest("ion-fab")) {
      this.fabEl.close();
    }
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      const fabIconEl = this.fabEl
        .querySelector("ion-fab-button")
        .shadowRoot.querySelector("ion-icon");
      fabIconEl.style.setProperty("font-size", "40px");
    }
  }
  render() {
    return (h("div", { class: "ion-fab-wrapper" },
      h("ion-fab", { horizontal: this.horizontal, vertical: this.vertical, ref: (el) => (this.fabEl = el) },
        h("ion-fab-button", { color: this.color },
          h("ion-icon", { name: this.openIcon })),
        h("ion-fab-list", { side: this.listSide }, this.buttonList.map((mb) => (h("div", { class: "button-wrapper" },
          h("span", { class: "fab-label" }, mb.label),
          h("ion-button", { href: mb.href, color: mb.color, onClick: (event) => mb.onClick && typeof mb.onClick === "function"
              ? mb.onClick(event)
              : null, shape: "round" },
            h("ion-icon", { name: mb.icon.indexOf("/") === -1 ? mb.icon : null, src: mb.icon.indexOf("/") === -1 ? null : mb.icon }))))))),
      this.badge && (h("ion-badge", { color: this.badgeColor, innerHTML: this.badge }))));
  }
  static get is() { return "floodteam-floating-button"; }
  static get originalStyleUrls() { return {
    "$": ["floating-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["floating-button.css"]
  }; }
  static get properties() { return {
    "buttonList": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\r\n    /**\r\n     * The label to show next to the button\r\n     */\r\n    label: string;\r\n    /**\r\n     * The icon to use in the button\r\n     */\r\n    icon: string;\r\n    /**\r\n     * The color from the theme to make the button\r\n     */\r\n    color?: Color;\r\n    /**\r\n     * The link to use for the button\r\n     */\r\n    href?: string;\r\n    /**\r\n     * The functionality to run when the button is clicked\r\n     */\r\n    onClick?: (event: any) => any;\r\n  }[]",
        "resolved": "{ label: string; icon: string; color?: string; href?: string; onClick?: (event: any) => any; }[]",
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
        "text": "The list of buttons to show when the material button is clicked"
      },
      "defaultValue": "[]"
    },
    "url": {
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
        "text": "The url to link the material button to"
      },
      "attribute": "url",
      "reflect": false
    },
    "openIcon": {
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
        "text": "The icon to use on the material button when it's closed"
      },
      "attribute": "open-icon",
      "reflect": false,
      "defaultValue": "\"ellipsis-vertical\""
    },
    "horizontal": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"end\" | \"start\" | \"center\"",
        "resolved": "\"center\" | \"end\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The horizontal position of the button"
      },
      "attribute": "horizontal",
      "reflect": false,
      "defaultValue": "\"end\""
    },
    "vertical": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"center\" | \"top\" | \"bottom\"",
        "resolved": "\"bottom\" | \"center\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The vertical position of the button"
      },
      "attribute": "vertical",
      "reflect": false,
      "defaultValue": "\"center\""
    },
    "color": {
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
        "text": "The color of the button"
      },
      "attribute": "color",
      "reflect": false
    },
    "listSide": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"end\" | \"start\" | \"top\" | \"bottom\"",
        "resolved": "\"bottom\" | \"end\" | \"start\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The side the list should display"
      },
      "attribute": "list-side",
      "reflect": false,
      "defaultValue": "\"bottom\""
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The color of the badge to display"
      },
      "attribute": "badge-color",
      "reflect": false,
      "defaultValue": "\"success\""
    },
    "badge": {
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
        "text": "The content of the badge"
      },
      "attribute": "badge",
      "reflect": false
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "outterFabClick",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
