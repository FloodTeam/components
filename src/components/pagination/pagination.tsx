import {
  Component,
  ComponentInterface,
  // Event,
  // EventEmitter,
  Prop,
  h,
  Listen,
  Method,
  Watch,
} from "@stencil/core";
import Debounce from "debounce-decorator";

@Component({
  tag: "floodteam-pagination",
  styleUrl: "pagination.css",
})
export class Pagination implements ComponentInterface {
  virtualScrollEl: HTMLIonVirtualScrollElement;
  infiniteScrollEl: HTMLIonInfiniteScrollElement;

  // @Event() floodteamFetch: EventEmitter;

  @Prop() disableFetch = false;
  @Prop({ mutable: true }) approxItemHeight: number;
  @Prop() endpoint?: string;
  @Prop() query?: string;
  @Prop() fetchData?: any;
  @Prop() limit?: number;
  @Prop() orderBy?: string;
  @Prop() orderDirection?: string;
  @Prop() component = "div";
  @Prop() componentProps: any;
  @Prop() dataPropsMap: any;
  @Prop({ mutable: true }) page?: number;
  @Prop({ mutable: true }) results: any[] = [];

  @Debounce(1000)
  @Watch("query")
  onQuery() {
    this.getResults({
      page: 0,
    });
  }

  @Listen("floodteamSuccess", { target: "body" })
  async onSuccess(event) {
    if (event.detail.name === "pagination") {
      console.log(event.detail);
      try {
        if (this.page === 0) {
          this.results = [];
        }
        this.page = event.detail?.data?.results?.page
          ? event.detail.data.results.page
          : 0;
        await this.addResults(event.detail.data.results.results);
      } catch (err) {
        console.log("Error updating results!");
      }
      this.infiniteScrollEl.complete();
      this.virtualScrollEl.checkEnd();
      if (event.detail?.data?.results?.pageCount === this.page) {
        this.infiniteScrollEl.disabled = true;
      }
      setTimeout(() => {
        window.dispatchEvent(new (Event as any)("resize"));
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

  @Method()
  async addResults(results: any[] = []) {
    this.onResize();
    this.results = [...this.results, ...results];
    setTimeout(() => {
      window.dispatchEvent(new (Event as any)("resize"));
    }, 1000);
  }

  getResults(
    options: {
      page?: number;
      next?: boolean;
      limit?: boolean;
    } = {}
  ) {
    console.log(options);
    // this.floodteamFetch.emit({
    //   name: "pagination",
    //   endpoint: this.endpoint,
    //   dataPropsMap: this.dataPropsMap,
    //   disableFetch: this.disableFetch,
    //   params: {
    //     data: this.fetchData
    //       ? this.fetchData
    //       : {
    //           query: this.query ? this.query : "",
    //           page: options.page
    //             ? options.page
    //             : options.next
    //             ? this.page + 1
    //             : this.page,
    //           limit: options.limit ? options.limit : this.limit,
    //           orderBy: this.orderBy,
    //           orderDirection: this.orderDirection
    //         }
    //   }
    // });
  }

  componentDidLoad() {
    this.getResults();
    setTimeout(() => {
      window.dispatchEvent(new (Event as any)("resize"));
    }, 1000);
  }

  render() {
    const ComponentTag = this.component;
    return (
      <div class="pagination">
        <ion-virtual-scroll
          ref={(el) => (this.virtualScrollEl = el)}
          items={this.results}
          approxItemHeight={this.approxItemHeight}
        >
          <ion-grid>
            <ion-row>
              {this.results.map((result) => {
                return (
                  <ion-col>
                    <ComponentTag
                      {...(this.componentProps &&
                      typeof this.componentProps === "function"
                        ? this.componentProps(result)
                        : {})}
                    />
                  </ion-col>
                );
              })}
            </ion-row>
          </ion-grid>
          <ion-infinite-scroll
            style={{ display: "block" }}
            ref={(el) => (this.infiniteScrollEl = el)}
          >
            <ion-infinite-scroll-content
              loading-spinner="bubbles"
              loading-text="Loading more data..."
            ></ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </ion-virtual-scroll>
      </div>
    );
  }
}
