import { Component, Event, EventEmitter, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-item-site",
  styleUrl: "item-site.css",
})
export class ItemSite {
  @Event() floodteamOpenSiteEditModal: EventEmitter;

  @Prop() href?: string;
  @Prop() detail = true;
  @Prop() disabled = false;
  @Prop() site: any;

  openTab(event, selectedTab?: "info" | "areas" | "photos" | "dots") {
    event.stopPropagation();
    event.preventDefault();
    this.floodteamOpenSiteEditModal.emit({
      selectedTab,
      site: this.site,
    });
  }

  render() {
    return (
      <Host>
        <ion-item
          detail={this.detail}
          href={this.href}
          disabled={this.disabled}
        >
          <ion-label>
            <h3>{this.site?.name ? this.site.name : "Common"}</h3>
            <ion-grid>
              <ion-row>
                <ion-col size="3">
                  <ion-chip onClick={(event) => this.openTab(event, "photos")}>
                    <ion-icon name="images" />
                    <ion-label>
                      {this.site?.photos?.length ? this.site.photos.length : 0}
                    </ion-label>
                  </ion-chip>
                </ion-col>
                <ion-col size="3">
                  <ion-chip onClick={(event) => this.openTab(event, "info")}>
                    <ion-icon name="construct" />
                    <ion-label>
                      {this.site?.equipment?.length
                        ? this.site.equipment.length
                        : 0}
                    </ion-label>
                  </ion-chip>
                </ion-col>
                <ion-col size="3">
                  <ion-chip onClick={(event) => this.openTab(event, "info")}>
                    <ion-icon name="reader" />
                    <ion-label>
                      {this.site?.services?.length
                        ? this.site.services.length
                        : 0}
                    </ion-label>
                  </ion-chip>
                </ion-col>
                <ion-col size="3">
                  <ion-chip onClick={(event) => this.openTab(event, "dots")}>
                    <ion-icon name="ellipse" />
                    <ion-label>
                      {this.site?.dots?.length ? this.site.dots.length : 0}
                    </ion-label>
                  </ion-chip>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-label>
        </ion-item>
      </Host>
    );
  }
}
