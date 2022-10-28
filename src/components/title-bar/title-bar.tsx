import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-title-bar",
})
export class TitleBar {
  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;

  @Prop() heading?: number = 1;
  @Prop() disableUnderline? = false;
  @Prop() pin?: any;
  @Prop() icon?: string;
  @Prop() back?: string;
  @Prop() pins: any[];

  render() {
    const HeadingTag = `h${this.heading}`;
    return (
      <ion-toolbar
        style={{
          "--background": "transparent",
          "--padding-start": "0",
          "--padding-end": "0",
        }}
        class="ion-padding-horizontal"
      >
        <ion-buttons
          style={{
            display: "flex",
            alignItems: "center",
          }}
          slot="start"
        >
          {this.back && (
            <ion-back-button icon="arrow-back" defaultHref={this.back} />
          )}
          <slot name="start" />
          {this.icon && (
            <ion-icon
              name={this.icon}
              class="ft-icon-style"
              style={{ marginRight: "8px" }}
            />
          )}
          {this.pin && (
            <ion-button
              onClick={() =>
                this.fireenjinTrigger.emit({
                  name: "pin",
                  payload: this.pin,
                })
              }
            >
              <ion-icon
                name="pin"
                color={
                  (this.pins || [])
                    .map((pin) => pin?.href)
                    ?.includes(this.pin?.href)
                    ? "primary"
                    : null
                }
              />
            </ion-button>
          )}
        </ion-buttons>
        <HeadingTag
          class={{
            "underline-title": !this.disableUnderline,
            "ion-margin-vertical": true,
          }}
          style={{ paddingTop: "0" }}
        >
          <slot />
        </HeadingTag>
        <slot name="end" />
      </ion-toolbar>
    );
  }
}
