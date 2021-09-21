import { ComponentInterface } from "../../stencil-public-runtime";
export declare class Error implements ComponentInterface {
  /**
   * The error message to display
   */
  message: string;
  /**
   * The color of the component
   */
  color: string;
  /**
   * The icon to use
   */
  iconName: string;
  render(): any;
}
