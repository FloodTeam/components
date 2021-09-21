import { ComponentInterface } from "../../stencil-public-runtime";
export declare class Slides implements ComponentInterface {
  slidesEl: HTMLFloodteamSlidesElement;
  slides: HTMLFloodteamSlideElement[];
  update(): Promise<void>;
  setSlides(): void;
  componentDidLoad(): void;
  render(): any;
}
