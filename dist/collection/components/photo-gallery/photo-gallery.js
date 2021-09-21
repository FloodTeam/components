import { Component, Event, h, Prop } from "@stencil/core";
export class PhotoGallery {
  constructor() {
    this.photos = [];
  }
  render() {
    return (h("ion-grid", null,
      h("ion-row", null, (this.photos ? this.photos : []).map((photo, index) => (h("ion-col", { onClick: (event) => this.ftOpenPhotoCarousel.emit({
          event,
          photo,
          index,
        }) },
        h("ion-img", { src: photo })))))));
  }
  static get is() { return "floodteam-photo-gallery"; }
  static get originalStyleUrls() { return {
    "$": ["photo-gallery.css"]
  }; }
  static get styleUrls() { return {
    "$": ["photo-gallery.css"]
  }; }
  static get properties() { return {
    "photos": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
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
      "method": "ftOpenPhotoCarousel",
      "name": "ftOpenPhotoCarousel",
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
