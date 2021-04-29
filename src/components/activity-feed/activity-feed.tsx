import { Feed, FeedListQueryInput } from "@floodteam/backend";
import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  h,
  Listen,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "floodteam-activity-feed",
  styleUrl: "activity-feed.css",
})
export class ActivityFeed implements ComponentInterface {
  filterBarEl;
  filterPopoverEl: HTMLIonPopoverElement;

  @Event() fireenjinTrigger: EventEmitter;

  @Prop() jobId: string;
  @Prop() siteId: string;
  @Prop() userId: string;

  @State() paginationEl: HTMLElement;
  @State() fetchData: FeedListQueryInput = {
    orderBy: "createdAt",
    orderDirection: "desc",
  };
  @State() isLoading = true;

  @Listen("ionChange")
  onChange(event) {
    const listEl = event.target.closest("ion-card ion-list");
    if (listEl) {
      this.setProgress(listEl);
    }
  }

  @Listen("fireenjinSuccess", { target: "body" })
  onSuccess(event) {
    if (event.detail.endpoint !== "listFeed") return;
    setTimeout(() => {
      this.paginationEl
        .querySelectorAll("[data-trigger]")
        .forEach((triggerEl) => {
          if (triggerEl.getAttribute("triggerer")) return;
          triggerEl.addEventListener("click", (triggerEvent: any) => {
            triggerEvent.preventDefault();
            const trigger = triggerEvent?.target?.dataset?.trigger;
            this.fireenjinTrigger.emit({
              trigger,
            });
          });
          triggerEl.setAttribute("triggerer", "true");
        });
    }, 1000);
    this.isLoading = false;
  }

  setProgress(listEl) {
    let completed = 0;
    const items: HTMLIonItemElement[] = Array.from(
      listEl.querySelectorAll("ion-item")
    );
    const progressBarEl: HTMLIonProgressBarElement = listEl.querySelector(
      "ion-progress-bar"
    );
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
      <Host
        class={{
          "is-loading": this.isLoading,
        }}
      >
        <ion-grid>
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col>
              <div class="feed-header">
                <slot />
              </div>
            </ion-col>
            <ion-col class="ion-align-self-end">
              <fireenjin-filter-bar
                ref={(el) => (this.filterBarEl = el)}
                paginationEl={this.paginationEl}
                disableSearch
                filter={{
                  label: "Filter By",
                  controls: [
                    {
                      name: "tags",
                      label: "Tags",
                      endpoint: "listLocations",
                      icon: "business",
                      dataPropsMap: {
                        locations: "results",
                      },
                    },
                  ],
                }}
              />
            </ion-col>
          </ion-row>
        </ion-grid>
        <fireenjin-pagination
          ref={(el) => (this.paginationEl = el)}
          disableVirtualScroll
          display="grid"
          gridEl={({ result: card }: { result: Partial<Feed> }) => (
            <ion-card innerHTML={card.html} />
          )}
          fetchData={{
            ...this.fetchData,
            jobId: this.jobId,
            siteId: this.siteId,
            userId: this.userId,
          }}
          resultsKey="feeds"
          endpoint="listFeed"
          limit={24}
          removeDuplicates
        />
      </Host>
    );
  }
}
