import {
  Component,
  ComponentInterface,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import { filterControl } from "../../typings";

@Component({
  tag: "floodteam-search-bar",
  styleUrl: "search-bar.css",
})
export class SearchBar implements ComponentInterface {
  filterPopoverEl: HTMLIonPopoverElement;
  @Prop() sort?: {
    label?: string;
    value?: string;
    header?: string;
    subHeader?: string;
    message?: string;
    options: {
      label: string;
      value: string;
    }[];
  };
  @Prop() filter?: {
    label?: string;
    controls: filterControl[];
  };
  @Prop() paginationEl: any;
  @Prop() modeToggle = false;
  @Prop({
    mutable: true,
  })
  displayMode: "list" | "grid" = "grid";
  @Prop() disabled = false;
  @Prop() beforeGetResults: any;
  @Prop({
    mutable: true
  })
  showFilter = true;

  @State() selectOptions: any = {};
  @State() currentFilters: {
    [filterKey: string]: filterControl;
  } = {};

  @Watch("paginationEl")
  onPaginationElChange() {
    if (!this.paginationEl) return;
    this.displayMode = this.paginationEl.display
      ? this.paginationEl.display
      : this.displayMode;
  }

  @Listen("fireenjinSuccess", { target: "body" })
  onSuccess(event) {
    if (event?.detail?.name !== "select") return;
    this.selectOptions[event.detail.target.name] = event.detail.data.results;
  }

  @Listen("fireenjinReset", { target: "body" })
  onReset() {
    if (!this.filterPopoverEl) return;
    this.filterPopoverEl.dismiss();
  }

  @Listen("fireenjinSubmit", { target: "body" })
  async onSubmit(event) {
    if (!this.filterPopoverEl || event?.detail?.name !== "filter") return;
    if (event.detail?.data && Object.keys(event.detail.data).length) {
      for (const [i, control] of this.filter.controls.entries()) {
        if (!control.name || !event.detail?.data[control.name]) continue;
        const controlData = {
          ...control,
          value: event.detail.data[control.name],
        };
        this.filter.controls[i] = controlData;
        this.currentFilters[control.name] = controlData;
        this.filter = { ...this.filter };
      }
    }
    this.filterPopoverEl.dismiss();
    if (!this.paginationEl) return;
    await this.paginationEl.clearResults();
    let fetchData = {
      paramData: event?.detail?.data ? event.detail.data : {},
    };
    if (this.beforeGetResults && typeof this.beforeGetResults === "function")
      fetchData = await this.beforeGetResults(fetchData);
    this.paginationEl.getResults(fetchData);
  }

  @Listen("ionChange")
  async onChange(event) {
    if (event?.target?.name === "orderBy") {
      this.paginationEl.orderBy = event.detail.value;
    }
    if (event?.target?.tagName === "ION-SEARCHBAR") {
      await this.paginationEl.clearParamData("next");
      await this.paginationEl.clearParamData("back");
      await this.paginationEl.clearParamData("page");
      this.paginationEl.query = event.detail.value ? event.detail.value : "";
    }
  }

  @Method()
  async togglePaginationDisplay() {
    this.displayMode = this.displayMode === "grid" ? "list" : "grid";
    this.paginationEl.display = this.displayMode;
  }

  @Method()
  async clearFilter(
    event,
    clearingControl: filterControl
  ) {
    event.preventDefault();
    event.stopPropagation();
    for (const [i, control] of this.filter.controls.entries()) {
      if (
        !control.name ||
        !control.value ||
        control.name !== clearingControl.name
      )
        continue;
      this.filter.controls[i] = {
        ...control,
        value: null,
      };
      delete this.currentFilters[clearingControl.name];
      this.filter = { ...this.filter };
      await this.paginationEl.clearParamData(control.name);
    }
    await this.paginationEl.clearResults();
    await this.paginationEl.getResults(
      await new Promise(async (resolve, reject) => {
        try {
          const paramData = {};
          for (const filter of Object.values(this.currentFilters)) {
            paramData[filter.name] = filter.value;
          }
          let fetchData = { paramData };
          if (
            this.beforeGetResults &&
            typeof this.beforeGetResults === "function"
          )
            fetchData = await this.beforeGetResults(fetchData);
          resolve(fetchData);
        } catch (err) {
          console.log(err);
          reject({});
        }
      })
    );
  }

  render() {
    return (
      <Host>
        <div class="search-bar-wrapper">
          <ion-searchbar
            disabled={this.disabled}
          />
          {this.showFilter && <div class="filter-bar">
            {this.filter?.controls?.length && this.filter?.controls.map(control => (<ion-chip outline={!Object.keys(this.currentFilters).includes(control?.name)}>
              {control?.icon && <ion-icon name={control.icon}></ion-icon>}
              {control?.label && <ion-label>{control.label}</ion-label>}
              {Object.keys(this.currentFilters).includes(control?.name) && <ion-icon name="close-circle"></ion-icon>}
            </ion-chip>))}
          </div>}
        </div>
        <ion-button onClick={() => this.showFilter = !this.showFilter} class="filter-button" fill="clear" shape="round" style={{ color: "var(--ion-text-color)" }}>
          <ion-icon name="funnel" slot="icon-only" />
          {Object.keys(this.currentFilters)?.length && <ion-badge slot="end">{Object.keys(this.currentFilters).length}</ion-badge>}
        </ion-button>
      </Host>
    );
  }
}
