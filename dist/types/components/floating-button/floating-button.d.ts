import { Color } from "@ionic/core";
import { ComponentInterface } from "../../stencil-public-runtime";
export declare class FloatingButton implements ComponentInterface {
  fabEl: HTMLIonFabElement;
  /**
   * The list of buttons to show when the material button is clicked
   */
  buttonList: {
    /**
     * The label to show next to the button
     */
    label: string;
    /**
     * The icon to use in the button
     */
    icon: string;
    /**
     * The color from the theme to make the button
     */
    color?: Color;
    /**
     * The link to use for the button
     */
    href?: string;
    /**
     * The functionality to run when the button is clicked
     */
    onClick?: (event: any) => any;
  }[];
  /**
   * The url to link the material button to
   */
  url: string;
  /**
   * The icon to use on the material button when it's closed
   */
  openIcon: string;
  /**
   * The horizontal position of the button
   */
  horizontal: "end" | "start" | "center";
  /**
   * The vertical position of the button
   */
  vertical: "center" | "top" | "bottom";
  /**
   * The color of the button
   */
  color: Color;
  /**
   * The side the list should display
   */
  listSide: "end" | "start" | "top" | "bottom";
  /**
   * The color of the badge to display
   */
  badgeColor?: Color;
  /**
   * The content of the badge
   */
  badge?: string;
  outterFabClick(event: any): void;
  componentDidLoad(): void;
  render(): any;
}
