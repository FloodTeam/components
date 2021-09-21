import { Color } from "@ionic/core";
import { ComponentInterface } from "../../stencil-public-runtime";
export declare class PhotoCarousel implements ComponentInterface {
  photoSlidesEl: HTMLIonSlidesElement;
  inputPhotoEl: HTMLFloodteamInputPhotoElement;
  jobId: string;
  badgeColor: Color;
  addButtonColor: Color;
  hideAddButton: boolean;
  photos: any[];
  currentSlide: number;
  options: any;
  name: string;
  onSlideChange(): Promise<void>;
  getCurrentSlide(): Promise<number>;
  slideNext(): Promise<void>;
  slidePrev(): Promise<void>;
  slideTo(slideNumber: number): Promise<void>;
  selectFiles(event: any): Promise<boolean>;
  update(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
