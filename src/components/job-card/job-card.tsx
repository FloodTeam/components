import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-job-card",
  styleUrl: "job-card.css"
})
export class JobCard implements ComponentInterface {
  @Prop() buttonLink: string;
  @Prop() curbshot: string;
  @Prop() curbshotLink: string;
  @Prop() buttonText = "View Ticket";
  @Prop() badgeText: string;
  @Prop() titleText = "No Name on File...";
  @Prop() subText = "Status - Step";
  @Prop() address = "No Address on File...";
  @Prop() return = "No Return Date Set...";
  @Prop() curbshotBadgeText: string;
  @Prop() info: {
    name: string;
    value: any;
  }[] = [];
  @Prop() type: string;
  @Prop() cause: string;
  @Prop() active = false;
  @Prop() category: string;
  @Prop() referral: string;
  @Prop() manager: string;

  onCurbshotClick() {
    if (!this.curbshotLink) {
      return false;
    }
    window.location.href = this.curbshotLink;
  }

  render() {
    return (
      <div class={this.active ? "widget active" : "widget"}>
        <div
          class="widget__photo"
          onClick={this.onCurbshotClick.bind(this)}
          style={
            this.curbshot
              ? { backgroundImage: `url('${this.curbshot}')` }
              : null
          }
        />
        {this.curbshotBadgeText ? (
          <ft-badge>{this.curbshotBadgeText}</ft-badge>
        ) : null}
        <ion-button class="widget__button" href={this.buttonLink}>
          {this.buttonText}
        </ion-button>
        <div class="widget__details">
          {this.badgeText ? (
            <div class="widget__badges">
              <div class="widget__badge widget__badge--rating">
                {this.badgeText}
              </div>
            </div>
          ) : null}
          <div class="widget__name" innerHTML={this.titleText} />
          <div class="widget__type" innerHTML={this.subText} />
          <div class="widget__info">
            <span>{this.address}</span>
            <span>{this.return}</span>
          </div>
          <div class="widget__hidden">
            <hr />
            <table class="widget__table">
              <tr>
                <td>Type</td>
                <td>{this.type}</td>
              </tr>
              <tr>
                <td>Cause</td>
                <td>{this.cause}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{this.category}</td>
              </tr>
              {this.referral && (
                <tr>
                  <td>Referral</td>
                  <td>{this.referral}</td>
                </tr>
              )}
              {this.manager && (
                <tr>
                  <td>Manager</td>
                  <td>{this.manager}</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
