import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class StarRating implements ComponentInterface {
  starRatingEl: any;
  ftStarRating: EventEmitter;
  disabled: boolean;
  name: string;
  maxRating: number;
  value: string;
  currentRating: number;
  onInput(event: any): boolean;
  setCurrentRating(rating: any): Promise<void>;
  onValueChange(): void;
  componentDidLoad(): void;
  render(): any;
}
