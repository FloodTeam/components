import { Component, ComponentInterface, Element, h } from "@stencil/core";

import JSONFormatter from "json-formatter-js";

@Component({
  tag: "floodteam-json-viewer",
  styleUrl: "json-viewer.css"
})
export class JsonViewer implements ComponentInterface {
  @Element() jsonViewerEl: HTMLFloodteamJsonViewerElement;
  codeEl: HTMLElement;

  formatStringJSON(str: string) {
    if (!str || !JSON.parse(str)) return;
    const formatter = new JSONFormatter(JSON.parse(str), 1, {
      theme:
        window &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : null
    });
    this.codeEl.replaceWith(formatter.render());
  }

  componentDidRender() {
    setTimeout(() => {
      try {
        this.formatStringJSON(this.jsonViewerEl.innerText);
      } catch (err) {
        console.log(err);
      }
    }, 1500);
  }

  render() {
    return (
      <code ref={el => (this.codeEl = el)}>
        <slot />
      </code>
    );
  }
}
