import { popoverController } from "@ionic/core";
import {
  Build,
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
import { SelectCompareFn, SelectInterface } from "@ionic/core";

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
    controls: {
      resultsKey?: string;
      name: string;
      icon?: string;
      label?: string;
      value?: any;
      header?: string;
      subHeader?: string;
      message?: string;
      optionEl?: (result: any) => any;
      endpoint?: string;
      query?: string;
      limit?: number;
      orderBy?: string;
      dataPropsMap?: any;
      params?: any;
      multiple?: boolean;
      disabled?: boolean;
      cancelText?: string;
      okText?: string;
      placeholder?: string;
      selectedText?: string;
      interface?: SelectInterface;
      interfaceOptions?: any;
      compareWith?: string | SelectCompareFn | null;
      options?: {
        label: string;
        value: string;
      }[];
    }[];
  };
  @Prop() paginationEl: any;
  @Prop() modeToggle = false;
  @Prop({
    mutable: true,
  })
  displayMode: "list" | "grid" = "grid";
  @Prop() disableSearch = false;
  @Prop() beforeGetResults: any;

  @State() selectOptions: any = {};
  @State() currentFilters: {
    [filterKey: string]: {
      resultsKey?: string;
      name: string;
      icon?: string;
      label?: string;
      value?: any;
      header?: string;
      subHeader?: string;
      message?: string;
      optionEl?: (result: any) => any;
      endpoint?: string;
      query?: string;
      limit?: number;
      orderBy?: string;
      dataPropsMap?: any;
      params?: any;
      multiple?: boolean;
      disabled?: boolean;
      cancelText?: string;
      okText?: string;
      placeholder?: string;
      selectedText?: string;
      interface?: SelectInterface;
      interfaceOptions?: any;
      compareWith?: string | SelectCompareFn | null;
      options?: {
        label: string;
        value: string;
      }[];
    };
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
  async createFilterPopover(event?) {
    return (this.filterPopoverEl = await popoverController.create({
      component: "popover-filter",
      componentProps: { ...this.filter, sort: this.sort },
      event: event ? event : null,
      cssClass: "popover-filter-wrapper",
    }));
  }

  @Method()
  async togglePaginationDisplay() {
    this.displayMode = this.displayMode === "grid" ? "list" : "grid";
    this.paginationEl.display = this.displayMode;
  }

  @Method()
  async openFilterPopover(event) {
    await this.createFilterPopover(event);
    this.filterPopoverEl.present();
  }

  @Method()
  async clearFilter(
    event,
    clearingControl: {
      resultsKey?: string;
      name: string;
      icon?: string;
      label?: string;
      value?: any;
      header?: string;
      subHeader?: string;
      message?: string;
      optionEl?: (result: any) => any;
      endpoint?: string;
      query?: string;
      limit?: number;
      orderBy?: string;
      dataPropsMap?: any;
      params?: any;
      multiple?: boolean;
      disabled?: boolean;
      cancelText?: string;
      okText?: string;
      placeholder?: string;
      selectedText?: string;
      interface?: SelectInterface;
      interfaceOptions?: any;
      compareWith?: string | SelectCompareFn | null;
      options?: {
        label: string;
        value: string;
      }[];
    }
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

  async componentDidLoad() {
    if (this.filter && Build.isBrowser) {
      await this.createFilterPopover();
    }
  }

  render() {
    return (
      <Host>
        {!this.disableSearch && (
          <ion-searchbar
            style={{
              "--background": "transparent",
              "--box-shadow": "none",
              "--color": "var(--ion-text-color)",
            }}
          />
        )}
        {this.filter?.controls?.length && (
          <ion-button class="filter-button" shape="round" fill="outline" color="medium" onClick={(event) => this.openFilterPopover(event)}>
            <ion-icon slot="start" name="funnel" />
            <ion-label>Filter &nbsp;</ion-label>
            <ion-text color="primary" slot="end">{Object.keys(this.currentFilters)?.length}</ion-text>
          </ion-button>
        )}
      </Host>
    );
  }
}
