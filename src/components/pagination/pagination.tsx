import { ListQueryInput } from "@madnesslabs/thefloodteam-backend/dist/sdk";
import {
  Component,
  ComponentInterface,
  Event as CustomEvent,
  EventEmitter,
  Prop,
  h,
  Listen,
  Method,
  Watch,
  FunctionalComponent,
  State,
} from "@stencil/core";
import Debounce from "debounce-decorator";

@Component({
  tag: "floodteam-pagination",
  styleUrl: "pagination.css",
})
export class Pagination implements ComponentInterface {
  virtualScrollEl: HTMLIonVirtualScrollElement;
  infiniteScrollEl: HTMLIonInfiniteScrollElement;

  @CustomEvent() floodteamFetch: EventEmitter;

  @Prop() gridEl: FunctionalComponent<any>;
  @Prop() listEl: FunctionalComponent<any>;
  @Prop() disableFetch = false;
  @Prop({ mutable: true }) approxItemHeight: number;
  @Prop() endpoint?: string;
  @Prop() query?: string;
  @Prop() fetchData?: any;
  @Prop() limit?: number;
  @Prop() orderBy?: string;
  @Prop() orderDirection?: string;
  @Prop() dataPropsMap: any;
  @Prop() display: "list" | "grid" = "grid";
  @Prop({ mutable: true }) page? = 0;
  @Prop({ mutable: true }) results: any[] = [];

  @State() paramData: ListQueryInput = {};

  @Debounce(1000)
  @Watch("query")
  onQuery() {
    this.results = [];
    this.getResults({
      page: 0,
    });
  }

  @Watch("orderBy")
  onOrderBy() {
    this.results = [];
    this.getResults({
      page: 0,
    });
  }

  @Watch("display")
  onDisplay() {
    setTimeout(async () => {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
  }

  @Listen("floodteamSuccess", { target: "body" })
  async onSuccess(event) {
    if (event.detail.name === "pagination") {
      try {
        if (this.page === 0) {
          this.results = [];
        }
        this.page = event.detail?.data?.results?.page
          ? event.detail.data.results.page
          : this.page + 1;
        await this.addResults(event.detail.data.results);
      } catch (err) {
        console.log("Error updating results!");
      }

      await this.infiniteScrollEl.complete();
      await this.virtualScrollEl.checkEnd();
      if (!event.detail?.data?.results?.length) {
        this.infiniteScrollEl.disabled = true;
      }
      setTimeout(async () => {
        window.dispatchEvent(new Event("resize"));
      }, 1000);
    }
  }

  @Listen("ionInfinite")
  onInfiniteScroll() {
    this.getResults({
      next: true,
    });
  }

  @Listen("resize", { target: "window" })
  onResize() {
    if (
      this.display === "list" &&
      this.virtualScrollEl.querySelector("ion-item")
    ) {
      this.approxItemHeight = this.virtualScrollEl.querySelector(
        "ion-item"
      ).offsetHeight;
    } else if (
      this.display === "grid" &&
      this.virtualScrollEl.querySelectorAll("ion-col")
    ) {
      let i;
      let lastCol;
      const cols = this.virtualScrollEl.querySelectorAll("ion-col");
      for (i = 0; i < cols.length; i++) {
        const col = cols[i];
        if (lastCol && col.offsetTop !== lastCol.offsetTop) {
          break;
        }
        lastCol = col;
      }
      if (lastCol && lastCol.firstChild) {
        this.approxItemHeight = lastCol.firstChild.scrollHeight / i + 18;
      }
    }
  }

  @Method()
  async clearParamData(key?: string) {
    if (key && this.paramData[key]) {
      const paramData = this.paramData;
      delete paramData[key];
      this.paramData = paramData;
    } else if (!key) {
      this.paramData = {};
    }

    return this.paramData;
  }

  @Method()
  async addResults(results: any[] = []) {
    this.results = [...this.results, ...results];
    setTimeout(() => {
      this.onResize();
    }, 1000);
  }

  @Method()
  async clearResults() {
    this.page = 0;
    this.results = [];
    setTimeout(() => {
      this.onResize();
    }, 1000);
  }

  @Method()
  async getResults(
    options: {
      page?: number;
      next?: boolean;
      limit?: number;
      paramData?: any;
    } = {}
  ) {
    this.paramData = {
      ...this.paramData,
      limit: options.limit ? options.limit : this.limit,
      orderBy: this.orderBy,
      orderDirection: this.orderDirection,
      ...(options?.paramData ? options.paramData : {}),
    };

    if (options.page) {
      this.page = options.page;
    }

    if (this.query?.length > 1) {
      this.paramData.query = this.query;
    }

    if (this.results?.length && this.results[this.results.length - 1]?.id) {
      this.paramData.next = this.results[this.results.length - 1].id;
    }

    this.floodteamFetch.emit({
      name: "pagination",
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap,
      disableFetch: this.disableFetch,
      params: {
        data: this.fetchData ? this.fetchData : this.paramData,
      },
    });
  }

  componentDidLoad() {
    this.getResults();
  }

  render() {
    return (
      <div class="pagination">
        <ion-virtual-scroll
          ref={(el) => (this.virtualScrollEl = el)}
          items={this.results}
          approxItemHeight={this.approxItemHeight}
        >
          {this.display === "grid" ? (
            <ion-grid>
              <ion-row>
                {this.results.map((result) => (
                  <ion-col>
                    {this.display === "grid"
                      ? this.gridEl({ result }, null, null)
                      : this.listEl({ result }, null, null)}
                  </ion-col>
                ))}
              </ion-row>
            </ion-grid>
          ) : (
            <ion-card>
              <ion-list>
                {this.results.map((result) =>
                  this.display === "grid"
                    ? this.gridEl({ result }, null, null)
                    : this.listEl({ result }, null, null)
                )}
              </ion-list>
            </ion-card>
          )}
        </ion-virtual-scroll>
        <ion-infinite-scroll
          style={{ display: "block" }}
          ref={(el) => (this.infiniteScrollEl = el)}
        >
          <ion-infinite-scroll-content
            loading-spinner="bubbles"
            loading-text="Loading more data..."
          ></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </div>
    );
  }
}
