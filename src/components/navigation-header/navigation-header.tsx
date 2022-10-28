import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "floodteam-navigation-header",
})
export class NavigationHeader implements ComponentInterface {
  menuEl: HTMLIonMenuElement;
  scannerModalEl: HTMLIonModalElement;
  paginationEl;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;

  @Prop() navigationView: string;
  @Prop() isLoggedIn = false;

  @State() isLoading = false;
  @State() unreadFeedCount = 0;
  @State() query: string;

  @Listen("ionChange")
  onChange(event) {
    if (event?.target?.tagName === "ION-SEGMENT") {
      this.navigationView = event.target.value;
    } else {
      this.query = event?.target?.value || null;
    }
  }

  @Listen("fireenjinSuccess", { target: "document" })
  onSuccess(event) {
    if (event.detail.endpoint === "listFeed") {
      setTimeout(() => {
        this.paginationEl
          .querySelectorAll("[data-trigger]")
          .forEach((triggerEl) => {
            if (triggerEl.getAttribute("triggerer")) return;
            triggerEl.addEventListener("click", (triggerEvent: any) => {
              triggerEvent.preventDefault();
              const name = triggerEvent?.target?.dataset?.trigger;
              const payload = triggerEvent?.target?.dataset?.triggerPayload;
              this.fireenjinTrigger.emit({
                name,
                payload,
              });
            });
            triggerEl.setAttribute("triggerer", "true");
          });
      }, 1000);
    }

    this.isLoading = false;
  }

  setProgress(listEl) {
    let completed = 0;
    const items: HTMLIonItemElement[] = Array.from(
      listEl.querySelectorAll("ion-item")
    );
    const progressBarEl: HTMLIonProgressBarElement =
      listEl.querySelector("ion-progress-bar");
    for (const item of items) {
      completed =
        completed + (item?.querySelector("ion-checkbox")?.checked ? 1 : 0);
    }
    const progressMath = completed / items.length;
    const progress =
      isFinite(progressMath) && progressMath > 0 ? progressMath : 0;
    progressBarEl.value = progress;
  }

  render() {
    return (
      <ion-header>
        <ion-segment scrollable value={this.navigationView || "menu"}>
          <ion-segment-button value="menu">
            <ion-icon
              src="/assets/logo/logo.svg"
              style={{
                width: "100px",
                height: "40px",
                color: "var(--ion-text-color)",
              }}
            />
          </ion-segment-button>
          {this.isLoggedIn && (
            <ion-segment-button value="pins" layout="icon-top">
              <ion-icon name="pin" />
              <ion-label>
                <small>Pins</small>
              </ion-label>
            </ion-segment-button>
          )}
          {this.isLoggedIn && (
            <ion-segment-button value="profile" layout="icon-top">
              <ion-icon name="person" />
              <ion-label>
                <small>Profile</small>
              </ion-label>
            </ion-segment-button>
          )}
          {this.isLoggedIn && (
            <ion-segment-button
              value="feed"
              layout="label-hide"
              style={{
                "--color":
                  this.unreadFeedCount > 0 ? "var(--ion-color-warning)" : null,
                "--indicator-color": "var(--ion-color-warning)",
                "--color-checked": "var(--ion-color-warning)",
              }}
            >
              <ion-icon name="notifications" />
            </ion-segment-button>
          )}
        </ion-segment>
      </ion-header>
    );
  }
}
