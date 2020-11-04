import {
  Component,
  ComponentInterface,
  Element,
  Host,
  h,
  State,
  Method
} from "@stencil/core";

@Component({
  tag: "floodteam-slides",
  styleUrl: "slides.css"
})
export class Slides implements ComponentInterface {
  @Element() slidesEl: HTMLFloodteamSlidesElement;

  @State() slides: HTMLFloodteamSlideElement[] = [];

  @Method()
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
    return (
      <Host>
        <div class="pagination">
          {this.slides.map(slideEl => (
            <a href={`#${slideEl.id}`}>
              {slideEl.name ? slideEl.name : slideEl.id}
            </a>
          ))}
        </div>
        <div class="slides">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
