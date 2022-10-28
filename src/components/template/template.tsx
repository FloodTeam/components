import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-template",
})
export class TemplateBlock {
  templateEl: HTMLElement;

  @Prop() templateId: string;
  @Prop() template: any;
  @Prop() partials: any[];
  @Prop() data: any;
  @Prop() helpers: any;
  @Prop() zoom = 1;
  @Prop() resize = false;
  @Prop() allowFullscreen = false;
  @Prop() rawHtml: string;
  @Prop() disablePosition = false;
  @Prop() disableFrame = false;

  componentDidLoad() {
    try {
      this.templateEl.shadowRoot.querySelector(".contract-header").remove();
      this.templateEl.shadowRoot.querySelector(".contract-footer").remove();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const template =
      this.template ||
      (this.partials || []).find?.(
        (template) => template?.id === this.templateId
      );
    const helpers = this.helpers || {};
    const partials = (this.partials || [])
      .filter((template) => !!template?.partial)
      .map((partial) => ({
        html: partial?.html || "",
        id: partial?.id || null,
      }));
    return (
      <fireenjin-render-template
        ref={(el) => (this.templateEl = el)}
        disableFrame
        enableClicks={true}
        template={template}
        templateId={this.templateId}
        data={this.data}
        helpers={helpers}
        partials={partials}
        zoom={this.zoom}
        allowFullscreen={this.allowFullscreen}
        resize={this.resize}
        rawHtml={this.rawHtml}
        disablePosition={this.disablePosition}
      />
    );
  }
}
