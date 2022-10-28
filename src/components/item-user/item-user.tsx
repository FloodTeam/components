import { FireEnjinSubmitEvent } from "@fireenjin/sdk";
import { Component, Event, EventEmitter, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-item-user",
  styleUrl: "item-user.css",
})
export class ItemUser {
  slidingEl: HTMLIonItemSlidingElement;

  @Event() fireenjinSubmit: EventEmitter<FireEnjinSubmitEvent>;

  @Prop() user: any;
  @Prop() jobId: string;
  @Prop() role: string;
  @Prop() disabled = false;

  removeUserFromJob(user) {
    if (
      !confirm(
        `Are you sure you want to remove ${
          user?.firstName ? user.firstName : "this user"
        } from the job?`
      )
    )
      return;
    this.fireenjinSubmit.emit({
      endpoint: "removeUserFromJob",
      data: {
        jobId: this.jobId,
        userId: user.id,
      },
    });

    if (this.slidingEl) this.slidingEl.close();
  }

  render() {
    return (
      <Host>
        <ion-item-sliding
          ref={(el) => (this.slidingEl = el)}
          disabled={this.disabled}
        >
          <ion-item
            href={this.disabled ? null : `/users/${this.user.id}`}
            detail
          >
            <fireenjin-avatar
              style={{
                marginInlineEnd: "8px",
              }}
              src={this.user.photo}
              initials={`${
                this.user?.firstName ? this.user.firstName.charAt(0) : ""
              }${this.user?.lastName ? this.user.lastName.charAt(0) : ""}`}
              slot="start"
            />
            <ion-label>
              <h2>
                {this.user?.firstName || ""} {this.user?.lastName || ""}
              </h2>
              <p>{this.user?.email || ""}</p>
            </ion-label>
            <floodteam-select-role
              jobId={this.jobId}
              userId={this.user?.id}
              value={this.role}
              slot="end"
            />
          </ion-item>
          <ion-item-options>
            <ion-item-option
              color="danger"
              onClick={() => this.removeUserFromJob(this.user)}
            >
              <ion-icon slot="end" name="close-circle" />
              Remove
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </Host>
    );
  }
}
