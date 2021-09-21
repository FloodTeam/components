import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class FeedCard implements ComponentInterface {
  floodteamFeedAction: EventEmitter;
  /**
   * The background image to use for the card
   */
  backgroundImage?: string;
  /**
   * The image to display at the top left of the feed card
   */
  image?: string;
  /**
   * The main text at the top of the feed card
   */
  heading?: string;
  /**
   * The subtext to display under the title
   */
  subtext?: string;
  /**
   * The more in depth details about the feed card
   */
  details?: string;
  /**
   * An optional action button to show on the card
   */
  actionButtons?: {
    action: string;
    size?: "small" | "default" | "large";
    fill?: "clear" | "outline" | "solid" | "default";
    color?: string;
    iconStart?: string;
    iconEnd?: string;
    text?: string;
    href?: string;
  }[];
  /**
   * Whether the message has been read
   */
  read?: boolean;
  /**
   * When the feed item was created
   */
  createdAt?: Date;
  /**
   * The component to load into a modal that will display on load
   */
  modal?: string;
  /**
   * Payload data to send through the feed card
   */
  payload?: any;
  /**
   * A list of tags that apply to this feed card
   */
  tags?: string[];
  render(): any;
}
