import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Prop,
  h
} from "@stencil/core";

@Component({
  tag: "floodteam-feed-card",
  styleUrl: "feed-card.css"
})
export class FeedCard implements ComponentInterface {
  @Event() floodteamFeedAction: EventEmitter;

  /**
   * The background image to use for the card
   */
  @Prop() backgroundImage?: string;
  /**
   * The image to display at the top left of the feed card
   */
  @Prop() image?: string;
  /**
   * The main text at the top of the feed card
   */
  @Prop() heading?: string;
  /**
   * The subtext to display under the title
   */
  @Prop() subtext?: string;
  /**
   * The more in depth details about the feed card
   */
  @Prop() details?: string;
  /**
   * An optional action button to show on the card
   */
  @Prop() actionButtons?: {
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
  @Prop() read?: boolean;
  /**
   * When the feed item was created
   */
  @Prop() createdAt?: Date;
  /**
   * The component to load into a modal that will display on load
   */
  @Prop() modal?: string;
  /**
   * Payload data to send through the feed card
   */
  @Prop() payload?: any;
  /**
   * A list of tags that apply to this feed card
   */
  @Prop() tags?: string[];

  render() {
    return (
      <ion-card
        style={
          this.backgroundImage
            ? { backgroundImage: `url('${this.backgroundImage}')` }
            : null
        }
      >
        <ion-item
          class={{
            "has-thumbnail": !!this.image
          }}
        >
          {this.image && (
            <ion-thumbnail slot="start">
              <img src={this.image} />
            </ion-thumbnail>
          )}
          <ion-label style={!this.image ? { paddingLeft: "0px" } : null}>
            <h3>{this.heading}</h3>
            {this.subtext && <h5>{this.subtext}</h5>}
            <div class="tag-list">
              {this.tags && this.tags.map(tag => <ion-chip>{tag}</ion-chip>)}
            </div>
            <p>{this.details}</p>
          </ion-label>
        </ion-item>
        <ion-buttons>
          {this.actionButtons &&
            this.actionButtons.map(actionButton => (
              <ion-button
                size={actionButton.size ? actionButton.size : "large"}
                fill={actionButton.fill ? actionButton.fill : "solid"}
                color={actionButton.color ? actionButton.color : "success"}
                href={actionButton.href ? actionButton.href : null}
                onClick={event =>
                  this.floodteamFeedAction.emit({
                    event,
                    name: actionButton.action
                  })
                }
              >
                {actionButton.iconStart && (
                  <ion-icon name={actionButton.iconStart} slot="start" />
                )}
                {actionButton.text}
                {actionButton.iconEnd && (
                  <ion-icon name={actionButton.iconEnd} slot="end" />
                )}
              </ion-button>
            ))}
        </ion-buttons>
      </ion-card>
    );
  }
}
