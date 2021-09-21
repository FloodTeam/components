import { ComponentInterface } from "../../stencil-public-runtime";
export declare class ProgressBar implements ComponentInterface {
  progressBarEl: any;
  /**
   * The percent of the progress bar that will be filled
   */
  percent: number;
  /**
   * Set the progress bar completion percentage
   */
  setPercent(percent: number): Promise<number>;
  onPercentUpdate(): void;
  componentDidLoad(): void;
  render(): any;
}
