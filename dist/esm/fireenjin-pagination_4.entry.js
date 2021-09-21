import { r as registerInstance, c as createEvent, h, w as writeTask, d as readTask, a as getElement, H as Host, f as forceUpdate } from './index-2bcfd230.js';
import { D as Debounce } from './index-c899d0b9.js';
import { g as getIonMode, c as config } from './ionic-global-338b6e55.js';
import { s as sanitizeDOMString } from './index-cc97b114.js';
import { c as componentOnReady } from './helpers-c13e5d7e.js';
import './_commonjsHelpers-5ec8f9b7.js';

const paginationCss = "";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Pagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.disablePageCheck = false;
    this.disableFetch = false;
    this.display = "grid";
    this.page = 0;
    this.results = [];
    this.loadingSpinner = "bubbles";
    this.loadingText = "Loading more data...";
    this.name = "pagination";
    this.disableVirtualScroll = false;
    this.removeDuplicates = false;
    this.paramData = {};
  }
  onQuery() {
    this.infiniteScrollEl.disabled = false;
    this.results = [];
    this.getResults({
      page: 0,
    });
  }
  onOrderBy() {
    this.results = [];
    this.infiniteScrollEl.disabled = false;
    this.getResults({
      page: 0,
    });
  }
  onDisplay() {
    this.infiniteScrollEl.disabled = false;
    setTimeout(async () => {
      window.dispatchEvent(new window.Event("resize"));
    }, 2000);
  }
  async onSuccess(event) {
    if (event.detail.name === this.name) {
      let results = [];
      try {
        results = this.resultsKey
          .split(".")
          .reduce((o, i) => o[i], event.detail.data);
      }
      catch (error) {
        console.log("Error getting results", event.detail, this.resultsKey);
      }
      try {
        if (this.page === 0) {
          this.results = [];
        }
        this.page = this.pageKey
          ? this.pageKey.split(".").reduce((o, i) => o[i], event.detail.data)
          : this.page + 1;
        await this.addResults(results);
      }
      catch (err) {
        console.log("Error updating results!");
      }
      await this.infiniteScrollEl.complete();
      if (!(results === null || results === void 0 ? void 0 : results.length) ||
        (this.pageCountKey &&
          this.pageKey &&
          this.pageKey.split(".").reduce((o, i) => o[i], event.detail.data) ===
            this.pageCountKey
              .split(".")
              .reduce((o, i) => o[i], event.detail.data))) {
        this.infiniteScrollEl.disabled = true;
      }
      if (!this.disableVirtualScroll) {
        await this.virtualScrollEl.checkEnd();
        setTimeout(() => {
          window.dispatchEvent(new window.Event("resize"));
        }, 200);
      }
    }
  }
  onInfiniteScroll() {
    this.getResults({
      next: true,
    });
  }
  onResize() {
    var _a, _b;
    if (this.disableVirtualScroll)
      return;
    if (this.display === "list" &&
      ((_a = this.virtualScrollEl) === null || _a === void 0 ? void 0 : _a.querySelector("ion-item"))) {
      this.approxItemHeight = this.virtualScrollEl.querySelector("ion-item").offsetHeight;
    }
    else if (this.display === "grid" &&
      ((_b = this.virtualScrollEl) === null || _b === void 0 ? void 0 : _b.querySelectorAll("ion-col"))) {
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
  async clearParamData(key) {
    if (key && this.paramData[key]) {
      const paramData = this.paramData;
      delete paramData[key];
      this.paramData = paramData;
    }
    else if (!key) {
      this.paramData = {};
    }
    this.infiniteScrollEl.disabled = false;
    return this.paramData;
  }
  async addResults(results = []) {
    if (this.removeDuplicates) {
      const newResultIds = results.map(result => result.id);
      this.results = [...this.results.filter(result => !newResultIds.includes(result.id)), ...results];
    }
    else {
      this.results = [...this.results, ...results];
    }
    this.infiniteScrollEl.disabled = false;
  }
  async clearResults() {
    this.page = 0;
    this.results = [];
    this.infiniteScrollEl.disabled = false;
  }
  async getResults(options = {}) {
    var _a, _b, _c;
    if (!this.disablePageCheck &&
      ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname) !== this.initailizedOnPath)
      return;
    if (options.page || options.page === 0) {
      this.page = options.page;
    }
    if (options.next) {
      this.page = this.page + 1;
    }
    this.paramData = Object.assign(Object.assign(Object.assign({}, this.paramData), { limit: options.limit ? options.limit : this.limit, orderBy: this.orderBy, orderDirection: this.orderDirection, page: this.page }), ((options === null || options === void 0 ? void 0 : options.paramData) ? options.paramData : {}));
    if (this.query || this.query === "") {
      this.paramData.query = this.query;
    }
    if (options.next &&
      ((_b = this.results) === null || _b === void 0 ? void 0 : _b.length) &&
      ((_c = this.results[this.results.length - 1]) === null || _c === void 0 ? void 0 : _c.id)) {
      this.paramData.next = this.results[this.results.length - 1].id;
    }
    this.fireenjinFetch.emit({
      name: this.name,
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap ? this.dataPropsMap : null,
      disableFetch: this.disableFetch,
      params: Object.assign(Object.assign({}, (this.fetchParams ? this.fetchParams : {})), { data: Object.assign(Object.assign({}, (this.fetchData ? this.fetchData : {})), this.paramData) }),
    });
  }
  componentWillLoad() {
    if (this.collection) {
      this.resultsKey = !this.resultsKey
        ? `${this.collection}.results`
        : this.resultsKey;
      this.pageKey = !this.pageKey ? `${this.collection}.page` : this.pageKey;
      this.pageCountKey = !this.pageCountKey
        ? `${this.collection}.pageCount`
        : this.pageCountKey;
      this.resultCountKey = !this.resultCountKey
        ? `${this.collection}.resultCount`
        : this.resultCountKey;
      this.name = !this.name ? `${this.collection}Pagination` : this.name;
    }
  }
  componentDidLoad() {
    var _a, _b;
    {
      if ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname) {
        this.initailizedOnPath = window.location.pathname;
      }
      if (!this.disableVirtualScroll) {
        window.dispatchEvent(new window.Event("resize"));
        this.resizeInterval = setInterval(() => {
          window.dispatchEvent(new window.Event("resize"));
        }, 3000);
      }
      if (!((_b = this.results) === null || _b === void 0 ? void 0 : _b.length)) {
        this.getResults();
      }
    }
  }
  disconnectedCallback() {
    if (!this.disableVirtualScroll) {
      clearInterval(this.resizeInterval);
    }
  }
  renderResults() {
    return this.display === "grid" ? (h("ion-grid", null, h("ion-row", null, this.results.map((result) => typeof this.gridEl({ result }, null, null) === "string" ? (h("ion-col", { innerHTML: this.gridEl({ result }, null, null) })) : (h("ion-col", null, this.gridEl({ result }, null, null))))))) : (h("ion-card", null, h("ion-list", null, this.results.map((result) => typeof this.listEl({ result }, null, null) === "string" ? (h("div", { innerHTML: this.listEl({ result }, null, null) })) : (this.listEl({ result }, null, null))))));
  }
  render() {
    return (h("div", { class: "pagination" }, this.disableVirtualScroll ? (h("div", null, this.renderResults())) : (h("ion-virtual-scroll", { items: this.results, approxItemHeight: this.approxItemHeight, renderItem: this.renderItem, ref: (el) => (this.virtualScrollEl = el) }, this.renderResults())), h("ion-infinite-scroll", { style: { display: "block" }, ref: (el) => (this.infiniteScrollEl = el) }, h("ion-infinite-scroll-content", { "loading-spinner": this.loadingSpinner, "loading-text": this.loadingText }))));
  }
  static get watchers() { return {
    "query": ["onQuery"],
    "orderBy": ["onOrderBy"],
    "display": ["onDisplay"]
  }; }
};
__decorate([
  Debounce(1000)
], Pagination.prototype, "onQuery", null);
Pagination.style = paginationCss;

const infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";

const InfiniteScroll = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInfinite = createEvent(this, "ionInfinite", 7);
    this.thrPx = 0;
    this.thrPc = 0;
    this.didFire = false;
    this.isBusy = false;
    this.isLoading = false;
    /**
     * The threshold distance from the bottom
     * of the content to call the `infinite` output event when scrolled.
     * The threshold value can be either a percent, or
     * in pixels. For example, use the value of `10%` for the `infinite`
     * output event to get called when the user has scrolled 10%
     * from the bottom of the page. Use the value `100px` when the
     * scroll is within 100 pixels from the bottom of the page.
     */
    this.threshold = '15%';
    /**
     * If `true`, the infinite scroll will be hidden and scroll event listeners
     * will be removed.
     *
     * Set this to true to disable the infinite scroll from actively
     * trying to receive new data while scrolling. This is useful
     * when it is known that there is no more data that can be added, and
     * the infinite scroll is no longer needed.
     */
    this.disabled = false;
    /**
     * The position of the infinite scroll element.
     * The value can be either `top` or `bottom`.
     */
    this.position = 'bottom';
    this.onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        // if there is no height of this element then do nothing
        return 2;
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? (height * this.thrPc) : this.thrPx;
      const distanceFromInfinite = (this.position === 'bottom')
        ? scrollHeight - infiniteHeight - scrollTop - threshold - height
        : scrollTop - infiniteHeight - threshold;
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.ionInfinite.emit();
          return 3;
        }
      }
      else {
        this.didFire = false;
      }
      return 4;
    };
  }
  thresholdChanged() {
    const val = this.threshold;
    if (val.lastIndexOf('%') > -1) {
      this.thrPx = 0;
      this.thrPc = (parseFloat(val) / 100);
    }
    else {
      this.thrPx = parseFloat(val);
      this.thrPc = 0;
    }
  }
  disabledChanged() {
    const disabled = this.disabled;
    if (disabled) {
      this.isLoading = false;
      this.isBusy = false;
    }
    this.enableScrollEvents(!disabled);
  }
  async connectedCallback() {
    const contentEl = this.el.closest('ion-content');
    if (!contentEl) {
      console.error('<ion-infinite-scroll> must be used inside an <ion-content>');
      return;
    }
    this.scrollEl = await contentEl.getScrollElement();
    this.thresholdChanged();
    this.disabledChanged();
    if (this.position === 'top') {
      writeTask(() => {
        if (this.scrollEl) {
          this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        }
      });
    }
  }
  disconnectedCallback() {
    this.enableScrollEvents(false);
    this.scrollEl = undefined;
  }
  /**
   * Call `complete()` within the `ionInfinite` output event handler when
   * your async operation has completed. For example, the `loading`
   * state is while the app is performing an asynchronous operation,
   * such as receiving more data from an AJAX request to add more items
   * to a data list. Once the data has been received and UI updated, you
   * then call this method to signify that the loading has completed.
   * This method will change the infinite scroll's state from `loading`
   * to `enabled`.
   */
  async complete() {
    const scrollEl = this.scrollEl;
    if (!this.isLoading || !scrollEl) {
      return;
    }
    this.isLoading = false;
    if (this.position === 'top') {
      /**
       * New content is being added at the top, but the scrollTop position stays the same,
       * which causes a scroll jump visually. This algorithm makes sure to prevent this.
       * (Frame 1)
       *    - complete() is called, but the UI hasn't had time to update yet.
       *    - Save the current content dimensions.
       *    - Wait for the next frame using _dom.read, so the UI will be updated.
       * (Frame 2)
       *    - Read the new content dimensions.
       *    - Calculate the height difference and the new scroll position.
       *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
       * (Still frame 2, if I'm correct)
       *    - Change the scroll position (= visually maintain the scroll position).
       *    - Change the state to re-enable the InfiniteScroll.
       *    - This should be after changing the scroll position, or it could
       *    cause the InfiniteScroll to be triggered again immediately.
       * (Frame 3)
       *    Done.
       */
      this.isBusy = true;
      // ******** DOM READ ****************
      // Save the current content dimensions before the UI updates
      const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
      // ******** DOM READ ****************
      requestAnimationFrame(() => {
        readTask(() => {
          // UI has updated, save the new content dimensions
          const scrollHeight = scrollEl.scrollHeight;
          // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
          const newScrollTop = scrollHeight - prev;
          // ******** DOM WRITE ****************
          requestAnimationFrame(() => {
            writeTask(() => {
              scrollEl.scrollTop = newScrollTop;
              this.isBusy = false;
            });
          });
        });
      });
    }
  }
  canStart() {
    return (!this.disabled &&
      !this.isBusy &&
      !!this.scrollEl &&
      !this.isLoading);
  }
  enableScrollEvents(shouldListen) {
    if (this.scrollEl) {
      if (shouldListen) {
        this.scrollEl.addEventListener('scroll', this.onScroll);
      }
      else {
        this.scrollEl.removeEventListener('scroll', this.onScroll);
      }
    }
  }
  render() {
    const mode = getIonMode(this);
    const disabled = this.disabled;
    return (h(Host, { class: {
        [mode]: true,
        'infinite-scroll-loading': this.isLoading,
        'infinite-scroll-enabled': !disabled
      } }));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "threshold": ["thresholdChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
InfiniteScroll.style = infiniteScrollCss;

const infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";

const infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";

const InfiniteScrollContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    if (this.loadingSpinner === undefined) {
      const mode = getIonMode(this);
      this.loadingSpinner = config.get('infiniteLoadingSpinner', config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
    }
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        // Used internally for styling
        [`infinite-scroll-content-${mode}`]: true
      } }, h("div", { class: "infinite-loading" }, this.loadingSpinner && (h("div", { class: "infinite-loading-spinner" }, h("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (h("div", { class: "infinite-loading-text", innerHTML: sanitizeDOMString(this.loadingText) })))));
  }
};
InfiniteScrollContent.style = {
  ios: infiniteScrollContentIosCss,
  md: infiniteScrollContentMdCss
};

const CELL_TYPE_ITEM = 'item';
const CELL_TYPE_HEADER = 'header';
const CELL_TYPE_FOOTER = 'footer';
const NODE_CHANGE_NONE = 0;
const NODE_CHANGE_POSITION = 1;
const NODE_CHANGE_CELL = 2;

const MIN_READS = 2;
const updateVDom = (dom, heightIndex, cells, range) => {
  // reset dom
  for (const node of dom) {
    node.change = NODE_CHANGE_NONE;
    node.d = true;
  }
  // try to match into exisiting dom
  const toMutate = [];
  const end = range.offset + range.length;
  for (let i = range.offset; i < end; i++) {
    const cell = cells[i];
    const node = dom.find(n => n.d && n.cell === cell);
    if (node) {
      const top = heightIndex[i];
      if (top !== node.top) {
        node.top = top;
        node.change = NODE_CHANGE_POSITION;
      }
      node.d = false;
    }
    else {
      toMutate.push(cell);
    }
  }
  // needs to append
  const pool = dom.filter(n => n.d);
  for (const cell of toMutate) {
    const node = pool.find(n => n.d && n.cell.type === cell.type);
    const index = cell.i;
    if (node) {
      node.d = false;
      node.change = NODE_CHANGE_CELL;
      node.cell = cell;
      node.top = heightIndex[index];
    }
    else {
      dom.push({
        d: false,
        cell,
        visible: true,
        change: NODE_CHANGE_CELL,
        top: heightIndex[index],
      });
    }
  }
  dom
    .filter(n => n.d && n.top !== -9999)
    .forEach(n => {
    n.change = NODE_CHANGE_POSITION;
    n.top = -9999;
  });
};
const doRender = (el, nodeRender, dom, updateCellHeight) => {
  const children = Array.from(el.children).filter(n => n.tagName !== 'TEMPLATE');
  const childrenNu = children.length;
  let child;
  for (let i = 0; i < dom.length; i++) {
    const node = dom[i];
    const cell = node.cell;
    // the cell change, the content must be updated
    if (node.change === NODE_CHANGE_CELL) {
      if (i < childrenNu) {
        child = children[i];
        nodeRender(child, cell, i);
      }
      else {
        const newChild = createNode(el, cell.type);
        child = nodeRender(newChild, cell, i) || newChild;
        child.classList.add('virtual-item');
        el.appendChild(child);
      }
      child['$ionCell'] = cell;
    }
    else {
      child = children[i];
    }
    // only update position when it changes
    if (node.change !== NODE_CHANGE_NONE) {
      child.style.transform = `translate3d(0,${node.top}px,0)`;
    }
    // update visibility
    const visible = cell.visible;
    if (node.visible !== visible) {
      if (visible) {
        child.classList.remove('virtual-loading');
      }
      else {
        child.classList.add('virtual-loading');
      }
      node.visible = visible;
    }
    // dynamic height
    if (cell.reads > 0) {
      updateCellHeight(cell, child);
      cell.reads--;
    }
  }
};
const createNode = (el, type) => {
  const template = getTemplate(el, type);
  if (template && el.ownerDocument) {
    return el.ownerDocument.importNode(template.content, true).children[0];
  }
  return null;
};
const getTemplate = (el, type) => {
  switch (type) {
    case CELL_TYPE_ITEM: return el.querySelector('template:not([name])');
    case CELL_TYPE_HEADER: return el.querySelector('template[name=header]');
    case CELL_TYPE_FOOTER: return el.querySelector('template[name=footer]');
  }
};
const getViewport = (scrollTop, vierportHeight, margin) => {
  return {
    top: Math.max(scrollTop - margin, 0),
    bottom: scrollTop + vierportHeight + margin
  };
};
const getRange = (heightIndex, viewport, buffer) => {
  const topPos = viewport.top;
  const bottomPos = viewport.bottom;
  // find top index
  let i = 0;
  for (; i < heightIndex.length; i++) {
    if (heightIndex[i] > topPos) {
      break;
    }
  }
  const offset = Math.max(i - buffer - 1, 0);
  // find bottom index
  for (; i < heightIndex.length; i++) {
    if (heightIndex[i] >= bottomPos) {
      break;
    }
  }
  const end = Math.min(i + buffer, heightIndex.length);
  const length = end - offset;
  return { offset, length };
};
const getShouldUpdate = (dirtyIndex, currentRange, range) => {
  const end = range.offset + range.length;
  return (dirtyIndex <= end ||
    currentRange.offset !== range.offset ||
    currentRange.length !== range.length);
};
const findCellIndex = (cells, index) => {
  const max = cells.length > 0 ? cells[cells.length - 1].index : 0;
  if (index === 0) {
    return 0;
  }
  else if (index === max + 1) {
    return cells.length;
  }
  else {
    return cells.findIndex(c => c.index === index);
  }
};
const inplaceUpdate = (dst, src, offset) => {
  if (offset === 0 && src.length >= dst.length) {
    return src;
  }
  for (let i = 0; i < src.length; i++) {
    dst[i + offset] = src[i];
  }
  return dst;
};
const calcCells = (items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) => {
  const cells = [];
  const end = len + offset;
  for (let i = offset; i < end; i++) {
    const item = items[i];
    if (headerFn) {
      const value = headerFn(item, i, items);
      if (value != null) {
        cells.push({
          i: j++,
          type: CELL_TYPE_HEADER,
          value,
          index: i,
          height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
          reads: headerHeight ? 0 : MIN_READS,
          visible: !!headerHeight,
        });
      }
    }
    cells.push({
      i: j++,
      type: CELL_TYPE_ITEM,
      value: item,
      index: i,
      height: itemHeight ? itemHeight(item, i) : approxItemHeight,
      reads: itemHeight ? 0 : MIN_READS,
      visible: !!itemHeight,
    });
    if (footerFn) {
      const value = footerFn(item, i, items);
      if (value != null) {
        cells.push({
          i: j++,
          type: CELL_TYPE_FOOTER,
          value,
          index: i,
          height: footerHeight ? footerHeight(value, i) : approxFooterHeight,
          reads: footerHeight ? 0 : MIN_READS,
          visible: !!footerHeight,
        });
      }
    }
  }
  return cells;
};
const calcHeightIndex = (buf, cells, index) => {
  let acum = buf[index];
  for (let i = index; i < buf.length; i++) {
    buf[i] = acum;
    acum += cells[i].height;
  }
  return acum;
};
const resizeBuffer = (buf, len) => {
  if (!buf) {
    return new Uint32Array(len);
  }
  if (buf.length === len) {
    return buf;
  }
  else if (len > buf.length) {
    const newBuf = new Uint32Array(len);
    newBuf.set(buf);
    return newBuf;
  }
  else {
    return buf.subarray(0, len);
  }
};
const positionForIndex = (index, cells, heightIndex) => {
  const cell = cells.find(c => c.type === CELL_TYPE_ITEM && c.index === index);
  if (cell) {
    return heightIndex[cell.i];
  }
  return -1;
};

const virtualScrollCss = "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;transition-duration:0ms;will-change:transform}";

const VirtualScroll = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.range = { offset: 0, length: 0 };
    this.viewportHeight = 0;
    this.cells = [];
    this.virtualDom = [];
    this.isEnabled = false;
    this.viewportOffset = 0;
    this.currentScrollTop = 0;
    this.indexDirty = 0;
    this.lastItemLen = 0;
    this.totalHeight = 0;
    /**
     * It is important to provide this
     * if virtual item height will be significantly larger than the default
     * The approximate height of each virtual item template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    this.approxItemHeight = 45;
    /**
     * The approximate height of each header template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    this.approxHeaderHeight = 30;
    /**
     * The approximate width of each footer template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    this.approxFooterHeight = 30;
    this.onScroll = () => {
      this.updateVirtualScroll();
    };
  }
  itemsChanged() {
    this.calcCells();
    this.updateVirtualScroll();
  }
  componentWillLoad() {
    console.warn(`[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.`);
  }
  async connectedCallback() {
    const contentEl = this.el.closest('ion-content');
    if (!contentEl) {
      console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
      return;
    }
    this.scrollEl = await contentEl.getScrollElement();
    this.contentEl = contentEl;
    this.calcCells();
    this.updateState();
  }
  componentDidUpdate() {
    this.updateState();
  }
  disconnectedCallback() {
    this.scrollEl = undefined;
  }
  onResize() {
    this.calcCells();
    this.updateVirtualScroll();
  }
  /**
   * Returns the position of the virtual item at the given index.
   */
  positionForItem(index) {
    return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
  }
  /**
   * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
   * dirty any time the content or their style changes.
   *
   * The subset of items to be updated can are specifing by an offset and a length.
   */
  async checkRange(offset, len = -1) {
    // TODO: kind of hacky how we do in-place updated of the cells
    // array. this part needs a complete refactor
    if (!this.items) {
      return;
    }
    const length = (len === -1)
      ? this.items.length - offset
      : len;
    const cellIndex = findCellIndex(this.cells, offset);
    const cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
    this.cells = inplaceUpdate(this.cells, cells, cellIndex);
    this.lastItemLen = this.items.length;
    this.indexDirty = Math.max(offset - 1, 0);
    this.scheduleUpdate();
  }
  /**
   * This method marks the tail the items array as dirty, so they can be re-rendered.
   *
   * It's equivalent to calling:
   *
   * ```js
   * virtualScroll.checkRange(lastItemLen);
   * ```
   */
  async checkEnd() {
    if (this.items) {
      this.checkRange(this.lastItemLen);
    }
  }
  updateVirtualScroll() {
    // do nothing if virtual-scroll is disabled
    if (!this.isEnabled || !this.scrollEl) {
      return;
    }
    // unschedule future updates
    if (this.timerUpdate) {
      clearTimeout(this.timerUpdate);
      this.timerUpdate = undefined;
    }
    // schedule DOM operations into the stencil queue
    readTask(this.readVS.bind(this));
    writeTask(this.writeVS.bind(this));
  }
  readVS() {
    const { contentEl, scrollEl, el } = this;
    let topOffset = 0;
    let node = el;
    while (node && node !== contentEl) {
      topOffset += node.offsetTop;
      node = node.offsetParent;
    }
    this.viewportOffset = topOffset;
    if (scrollEl) {
      this.viewportHeight = scrollEl.offsetHeight;
      this.currentScrollTop = scrollEl.scrollTop;
    }
  }
  writeVS() {
    const dirtyIndex = this.indexDirty;
    // get visible viewport
    const scrollTop = this.currentScrollTop - this.viewportOffset;
    const viewport = getViewport(scrollTop, this.viewportHeight, 100);
    // compute lazily the height index
    const heightIndex = this.getHeightIndex();
    // get array bounds of visible cells base in the viewport
    const range = getRange(heightIndex, viewport, 2);
    // fast path, do nothing
    const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
    if (!shouldUpdate) {
      return;
    }
    this.range = range;
    // in place mutation of the virtual DOM
    updateVDom(this.virtualDom, heightIndex, this.cells, range);
    // Write DOM
    // Different code paths taken depending of the render API used
    if (this.nodeRender) {
      doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
    }
    else if (this.domRender) {
      this.domRender(this.virtualDom);
    }
    else if (this.renderItem) {
      forceUpdate(this);
    }
  }
  updateCellHeight(cell, node) {
    const update = () => {
      if (node['$ionCell'] === cell) {
        const style = window.getComputedStyle(node);
        const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
        this.setCellHeight(cell, height);
      }
    };
    if (node) {
      componentOnReady(node, update);
    }
    else {
      update();
    }
  }
  setCellHeight(cell, height) {
    const index = cell.i;
    // the cell might changed since the height update was scheduled
    if (cell !== this.cells[index]) {
      return;
    }
    if (cell.height !== height || cell.visible !== true) {
      cell.visible = true;
      cell.height = height;
      this.indexDirty = Math.min(this.indexDirty, index);
      this.scheduleUpdate();
    }
  }
  scheduleUpdate() {
    clearTimeout(this.timerUpdate);
    this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
  }
  updateState() {
    const shouldEnable = !!(this.scrollEl &&
      this.cells);
    if (shouldEnable !== this.isEnabled) {
      this.enableScrollEvents(shouldEnable);
      if (shouldEnable) {
        this.updateVirtualScroll();
      }
    }
  }
  calcCells() {
    if (!this.items) {
      return;
    }
    this.lastItemLen = this.items.length;
    this.cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
    this.indexDirty = 0;
  }
  getHeightIndex() {
    if (this.indexDirty !== Infinity) {
      this.calcHeightIndex(this.indexDirty);
    }
    return this.heightIndex;
  }
  calcHeightIndex(index = 0) {
    // TODO: optimize, we don't need to calculate all the cells
    this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
    this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
    this.indexDirty = Infinity;
  }
  enableScrollEvents(shouldListen) {
    if (this.rmEvent) {
      this.rmEvent();
      this.rmEvent = undefined;
    }
    const scrollEl = this.scrollEl;
    if (scrollEl) {
      this.isEnabled = shouldListen;
      scrollEl.addEventListener('scroll', this.onScroll);
      this.rmEvent = () => {
        scrollEl.removeEventListener('scroll', this.onScroll);
      };
    }
  }
  renderVirtualNode(node) {
    const { type, value, index } = node.cell;
    switch (type) {
      case CELL_TYPE_ITEM: return this.renderItem(value, index);
      case CELL_TYPE_HEADER: return this.renderHeader(value, index);
      case CELL_TYPE_FOOTER: return this.renderFooter(value, index);
    }
  }
  render() {
    return (h(Host, { style: {
        height: `${this.totalHeight}px`
      } }, this.renderItem && (h(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(node => this.renderVirtualNode(node))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "itemHeight": ["itemsChanged"],
    "headerHeight": ["itemsChanged"],
    "footerHeight": ["itemsChanged"],
    "items": ["itemsChanged"]
  }; }
};
const VirtualProxy = ({ dom }, children, utils) => {
  return utils.map(children, (child, i) => {
    const node = dom[i];
    const vattrs = child.vattrs || {};
    let classes = vattrs.class || '';
    classes += 'virtual-item ';
    if (!node.visible) {
      classes += 'virtual-loading';
    }
    return Object.assign(Object.assign({}, child), { vattrs: Object.assign(Object.assign({}, vattrs), { class: classes, style: Object.assign(Object.assign({}, vattrs.style), { transform: `translate3d(0,${node.top}px,0)` }) }) });
  });
};
VirtualScroll.style = virtualScrollCss;

export { Pagination as fireenjin_pagination, InfiniteScroll as ion_infinite_scroll, InfiniteScrollContent as ion_infinite_scroll_content, VirtualScroll as ion_virtual_scroll };
