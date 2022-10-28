import { Component, h } from "@stencil/core";

@Component({
  tag: "floodteam-navigation-footer",
  styleUrl: "navigation-footer.css",
})
export class NavigationFooter {
  render() {
    return (
      <ion-header class="showing-pins">
        <ion-toolbar>
          <div
            class="header-content"
            style={{ display: "flex", "flex-wrap": "wrap" }}
          >
            <slot></slot>
            <floodteam-pin-bar
              style={{
                display: "flex",
                "justify-content": "flex-end",
              }}
            />
          </div>
          <div class="menu-buttons">
            <ion-menu-button autoHide={false}>
              <ion-icon
                src="/assets/icon/icon.svg"
                aria-hidden="true"
                style={{
                  height: "55px",
                  width: "60px",
                  margin: "auto",
                  textDecoration: "none",
                  color: "var(--ion-text-color)",
                }}
              />
            </ion-menu-button>
          </div>
        </ion-toolbar>
      </ion-header>
    );
  }
}
