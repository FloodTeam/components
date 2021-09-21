import { Component, Event, Prop, h } from "@stencil/core";
export class FeedCard {
  render() {
    return (h("ion-card", { style: this.backgroundImage
        ? { backgroundImage: `url('${this.backgroundImage}')` }
        : null },
      h("ion-item", { class: {
          "has-thumbnail": !!this.image
        } },
        this.image && (h("ion-thumbnail", { slot: "start" },
          h("img", { src: this.image }))),
        h("ion-label", { style: !this.image ? { paddingLeft: "0px" } : null },
          h("h3", null, this.heading),
          this.subtext && h("h5", null, this.subtext),
          h("div", { class: "tag-list" }, this.tags && this.tags.map(tag => h("ion-chip", null, tag))),
          h("p", null, this.details))),
      h("ion-buttons", null, this.actionButtons &&
        this.actionButtons.map(actionButton => (h("ion-button", { size: actionButton.size ? actionButton.size : "large", fill: actionButton.fill ? actionButton.fill : "solid", color: actionButton.color ? actionButton.color : "success", href: actionButton.href ? actionButton.href : null, onClick: event => this.floodteamFeedAction.emit({
            event,
            name: actionButton.action
          }) },
          actionButton.iconStart && (h("ion-icon", { name: actionButton.iconStart, slot: "start" })),
          actionButton.text,
          actionButton.iconEnd && (h("ion-icon", { name: actionButton.iconEnd, slot: "end" }))))))));
  }
  static get is() { return "floodteam-feed-card"; }
  static get originalStyleUrls() { return {
    "$": ["feed-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["feed-card.css"]
  }; }
  static get properties() { return {
    "backgroundImage": {
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
        "text": "The background image to use for the card"
      },
      "attribute": "background-image",
      "reflect": false
    },
    "image": {
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
        "text": "The image to display at the top left of the feed card"
      },
      "attribute": "image",
      "reflect": false
    },
    "heading": {
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
        "text": "The main text at the top of the feed card"
      },
      "attribute": "heading",
      "reflect": false
    },
    "subtext": {
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
        "text": "The subtext to display under the title"
      },
      "attribute": "subtext",
      "reflect": false
    },
    "details": {
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
        "text": "The more in depth details about the feed card"
      },
      "attribute": "details",
      "reflect": false
    },
    "actionButtons": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\r\n    action: string;\r\n    size?: \"small\" | \"default\" | \"large\";\r\n    fill?: \"clear\" | \"outline\" | \"solid\" | \"default\";\r\n    color?: string;\r\n    iconStart?: string;\r\n    iconEnd?: string;\r\n    text?: string;\r\n    href?: string;\r\n  }[]",
        "resolved": "{ action: string; size?: \"small\" | \"default\" | \"large\"; fill?: \"default\" | \"clear\" | \"outline\" | \"solid\"; color?: string; iconStart?: string; iconEnd?: string; text?: string; href?: string; }[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "An optional action button to show on the card"
      }
    },
    "read": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Whether the message has been read"
      },
      "attribute": "read",
      "reflect": false
    },
    "createdAt": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "When the feed item was created"
      }
    },
    "modal": {
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
        "text": "The component to load into a modal that will display on load"
      },
      "attribute": "modal",
      "reflect": false
    },
    "payload": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Payload data to send through the feed card"
      },
      "attribute": "payload",
      "reflect": false
    },
    "tags": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A list of tags that apply to this feed card"
      }
    }
  }; }
  static get events() { return [{
      "method": "floodteamFeedAction",
      "name": "floodteamFeedAction",
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
