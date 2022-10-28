import { Component, Prop, h } from "@stencil/core";
import formatUSD from "../../helpers/formatUSD";

@Component({
  tag: "floodteam-item-job",
})
export class ItemJob {
  @Prop() job: any;
  @Prop() lines?: "none" | "inset" | "full" = "inset";
  @Prop() isAdmin = false;

  render() {
    return (
      <ion-item lines={this.lines} href={`/jobs/${this.job?.id}`} detail>
        <fireenjin-avatar
          slot="start"
          style={{
            display: "inline-block",
            position: "relative",
            borderRadius: "4px",
            padding: "0 !important",
            overflow: "hidden",
            marginRight: "10px",
          }}
          initials={this.job?.title ? this.job?.title.charAt(0) : ""}
          src={this.job?.photos?.[0]?.url}
        />
        <ion-label
          class="ion-text-wrap"
          style={{ position: "relative", textOverflow: "initial" }}
        >
          <h2>{this.job?.title}</h2>
          <fireenjin-chip-bar>
            <floodteam-select-status
              jobId={this.job?.id}
              value={this.job?.status}
            />
            <floodteam-select-location
              disabled
              jobId={this.job?.id}
              value={this.job?.location?.id}
            />
            {this.isAdmin && (
              <ion-chip>
                <ion-icon class="ft-icon-style" name="logo-usd" />
                <ion-label>
                  Owed {formatUSD(this.job?.amountOwed || 0)}
                </ion-label>
              </ion-chip>
            )}
            <ion-router-link
              onClick={(event) => event.stopPropagation()}
              href={`/jobs/${this.job?.id}/scope`}
            >
              <ion-chip>
                <ion-icon class="ft-icon-style" name="list" />
                <ion-label>View Scope</ion-label>
              </ion-chip>
            </ion-router-link>
            <floodteam-select-job-service-types
              disabled
              jobId={this.job?.id}
              value={this.job?.serviceTypes || []}
            />
          </fireenjin-chip-bar>
        </ion-label>
      </ion-item>
    );
  }
}
