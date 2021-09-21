import { ComponentInterface } from "../../stencil-public-runtime";
export declare class ProgressCircle implements ComponentInterface {
  /**
   * The percent value of progress filled between 0 and 100
   */
  percent: number;
  /**
   * The radius size of the circle in pixels
   */
  radius: number;
  /**
   * The stroke thickness of the progress bar
   */
  stroke: number;
  render(): any[];
}
