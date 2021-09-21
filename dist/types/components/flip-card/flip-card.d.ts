import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class FlipCard implements ComponentInterface {
  flipCardEl: any;
  floodteamFlip: EventEmitter;
  frontImage: string;
  backImage: string;
  flipped: boolean;
  hideRefresh: boolean;
  isFlipped: boolean;
  flip(event?: any): Promise<void>;
  onSwipeLeft(event: any): void;
  onSwipeRight(event: any): void;
  render(): any;
}
