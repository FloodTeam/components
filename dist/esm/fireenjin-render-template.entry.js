import { r as registerInstance, c as createEvent, h } from './index-2bcfd230.js';

/**
 * Function for running a function until it completes successfully
 * with an optional delay between runs that gets progressively longer.
 *
 * Special Thanks to @MyBuilderTech
 * @see https://tech.mybuilder.com/handling-retries-and-back-off-attempts-with-javascript-promises/
 */
const pause = (duration) => new Promise((res) => setTimeout(res, duration));
async function backoff(retries, fn, delay = 500) {
  return new Promise(async (resolve, reject) => {
    if (!fn || typeof fn !== "function")
      reject("Callback function is required!");
    try {
      resolve(fn());
    }
    catch (err) {
      if (retries > 1) {
        await pause(delay);
        backoff(retries - 1, fn, delay * 2);
      }
      else {
        reject(err);
      }
    }
  });
}

/**
 * Injects a script tag into the page for a desired JS file
 * and is async if you need to wait for it to load before continuing
 * @param src The path to the JavaScript file
 * @returns void when the script is loaded
 */
async function injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.addEventListener("load", resolve);
    script.addEventListener("error", () => reject("Error loading script."));
    script.addEventListener("abort", () => reject("Script loading aborted."));
    document.head.appendChild(script);
  });
}

const RenderTemplate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.data = {};
    this.template = {};
    this.html = "";
  }
  componentWillLoad() {
    var _a;
    if (!((_a = window) === null || _a === void 0 ? void 0 : _a.Handlebars))
      injectScript('https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js');
    if (this.templateId)
      this.fireenjinFetch.emit({
        endpoint: "findTemplate",
        params: {
          id: this.templateId
        }
      });
  }
  componentDidLoad() {
    backoff(10, this.renderTemplate.bind(this));
    if (this.partials) {
      this.setPartials(this.partials);
    }
  }
  async setPartials(partials) {
    const localPartials = (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem) ? JSON.parse(localStorage.getItem("enjin-editor-partials")) : null;
    this.partials = partials ? partials : localPartials ? localPartials : [];
    for (const partial of this.partials) {
      if (!partial.html)
        continue;
      window.Handlebars.registerPartial(partial.id, partial.html);
    }
    if (localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem) {
      localStorage.setItem("enjin-editor-partials", JSON.stringify(this.partials));
    }
  }
  async renderTemplate() {
    var _a, _b;
    this.html = window.Handlebars.compile(((_a = this.template) === null || _a === void 0 ? void 0 : _a.html) ? (_b = this.template) === null || _b === void 0 ? void 0 : _b.html : "")(this.data ? this.data : {});
  }
  onSuccess(event) {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.endpoint) === "findTemplate" && ((_d = (_c = (_b = event.detail) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.template) === null || _d === void 0 ? void 0 : _d.id) === this.templateId) {
      this.template = ((_f = (_e = event === null || event === void 0 ? void 0 : event.detail) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.template)
        ? event.detail.data.template
        : null;
    }
  }
  onTemplateId() {
    this.fireenjinFetch.emit({
      endpoint: "findTemplate",
      params: {
        id: this.templateId,
      },
    });
  }
  onData() {
    backoff(10, this.renderTemplate.bind(this));
  }
  onTemplate() {
    backoff(10, this.renderTemplate.bind(this));
  }
  onPartials() {
    this.setPartials(this.partials);
  }
  render() {
    return h("div", { innerHTML: this.html });
  }
  static get watchers() { return {
    "templateId": ["onTemplateId"],
    "data": ["onData"],
    "template": ["onTemplate"],
    "partials": ["onPartials"]
  }; }
};

export { RenderTemplate as fireenjin_render_template };
