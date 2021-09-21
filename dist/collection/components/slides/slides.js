import { Component, Element, Host, h, State, Method } from "@stencil/core";
export class Slides {
  constructor() {
    this.slides = [];
  }
  async update() {
    this.setSlides();
  }
  setSlides() {
    const slides = this.slidesEl.querySelectorAll("floodteam-slide");
    slides.forEach(slideEl => {
      this.slides.push(slideEl);
    });
    this.slides = [...this.slides];
  }
  componentDidLoad() {
    this.setSlides();
  }
  render() {
    return (h(Host, null,
      h("div", { class: "pagination" }, this.slides.map(slideEl => (h("a", { href: `#${slideEl.id}` }, slideEl.name ? slideEl.name : slideEl.id)))),
      h("div", { class: "slides" },
        h("slot", null))));
  }
  static get is() { return "floodteam-slides"; }
  static get originalStyleUrls() { return {
    "$": ["slides.css"]
  }; }
  static get styleUrls() { return {
    "$": ["slides.css"]
  }; }
  static get states() { return {
    "slides": {}
  }; }
  static get methods() { return {
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
  static get elementRef() { return "slidesEl"; }
}
