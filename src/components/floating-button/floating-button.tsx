import { Color, popoverController } from "@ionic/core";
import { Component, ComponentInterface, Prop, h, Build, Listen } from "@stencil/core";

@Component({
  tag: "floodteam-floating-button",
  styleUrl: "floating-button.css",
})
export class FloatingButton implements ComponentInterface {
  fabEl: HTMLIonFabElement;
  popoverEl: HTMLIonPopoverElement;

  @Listen("floodteamClosePopover", { target: "body" })
  onClosePopover() {
    this.popoverEl.dismiss();
    this.popoverEl = null;
  }

  /**
   * The list of buttons to show when the material button is clicked
   */
  @Prop() buttonList: {
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
  }[] = [];
  /**
   * The url to link the material button to
   */
  @Prop() url: string;
  /**
   * The icon to use on the material button when it's closed
   */
  @Prop() openIcon = "ellipsis-vertical";
  /**
   * The horizontal position of the button
   */
  @Prop() horizontal: "end" | "start" | "center" = "end";
  /**
   * The vertical position of the button
   */
  @Prop() vertical: "center" | "top" | "bottom" = "center";
  /**
   * The color of the button
   */
  @Prop() color: Color;
  /**
   * The side the list should display
   */
  @Prop() listSide: "end" | "start" | "top" | "bottom" = "bottom";
  /**
   * The color of the badge to display
   */
  @Prop() badgeColor?: Color = "success";
  /**
   * The content of the badge
   */
  @Prop() badge?: string;

  componentDidLoad() {
    if (Build.isBrowser) {
      const fabIconEl: HTMLIonIconElement = this.fabEl
        .querySelector("ion-fab-button")
        .shadowRoot.querySelector("ion-icon");
      fabIconEl.style.setProperty("font-size", "40px");
    }
  }

  render() {
    return (
      <div class="ion-fab-wrapper">
        <ion-fab
          horizontal={this.horizontal}
          vertical={this.vertical}
          ref={(el) => (this.fabEl = el as HTMLIonFabElement)}
          onClick={async (event) => {
            event.preventDefault();
            this.popoverEl = await popoverController.create({
              event,
              component: "floodteam-popover-controls",
              componentProps: {
                buttonList: this.buttonList
              }
            });
            await this.popoverEl.present();
          }}
        >
          <ion-fab-button color={this.color}>
            <ion-icon name={this.openIcon} />
          </ion-fab-button>
        </ion-fab>
        {this.badge && (
          <ion-badge color={this.badgeColor} innerHTML={this.badge} />
        )}
      </div>
    );
  }
}
