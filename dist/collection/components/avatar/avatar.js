import { Component, Prop, h } from "@stencil/core";
export class Avatar {
  render() {
    var _a, _b, _c;
    return (h("div", { class: "avatar-image", style: {
        backgroundImage: !((_a = this.src) === null || _a === void 0 ? void 0 : _a.length) && this.initials
          ? `url('https://avatars.dicebear.com/api/initials/${this.initials}.svg')`
          : `url('${((_b = this.src) === null || _b === void 0 ? void 0 : _b.length) ? this.src : ((_c = this.fallback) === null || _c === void 0 ? void 0 : _c.length) ? this.fallback : "/assets/images/default-icon.png"}')`,
        height: this.size ? this.size : "50px",
        width: this.size ? this.size : "50px"
      } }));
  }
  static get is() { return "floodteam-avatar"; }
  static get originalStyleUrls() { return {
    "$": ["avatar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["avatar.css"]
  }; }
  static get properties() { return {
    "src": {
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
      "attribute": "src",
      "reflect": false
    },
    "size": {
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
      "attribute": "size",
      "reflect": false
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
        "text": ""
      },
      "attribute": "fallback",
      "reflect": false
    }
  }; }
}
