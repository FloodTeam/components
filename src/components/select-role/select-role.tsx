import { FireEnjinSubmitEvent, FireEnjinTriggerInput } from "@fireenjin/sdk";
import {
  Element,
  Component,
  Event,
  EventEmitter,
  Listen,
  Prop,
  h,
} from "@stencil/core";
import getRoleOptions from "../../helpers/getRoleOptions";

@Component({
  tag: "floodteam-select-role",
})
export class SelectRole {
  @Element() selectRoleEl: any;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;
  @Event() fireenjinSubmit: EventEmitter<FireEnjinSubmitEvent>;

  @Prop() name = "role";
  @Prop() value: string;
  @Prop() jobId: string;
  @Prop() userId: string;
  @Prop() disabled = false;

  @Listen("fireenjinTrigger", { target: "document" })
  onTrigger(event: CustomEvent<FireEnjinTriggerInput>) {
    if (
      event?.detail?.name !== "select" ||
      this.selectRoleEl !== event?.detail?.el
    )
      return;
    this.value = event?.detail?.payload?.value || null;
    this.fireenjinSubmit.emit({
      endpoint: "addUserToJob",
      data: {
        jobId: this.jobId,
        userId: this.userId,
        role: this.value,
      },
    });
  }

  render() {
    return (
      <ion-chip
        onClick={(event) => {
          if (this.disabled) return;
          event.preventDefault();
          event.stopPropagation();
          this.fireenjinTrigger.emit({
            event,
            name: "filter",
            type: "role",
            el: this.selectRoleEl,
            payload: {
              control: {
                name: "role",
                label: "Role",
                icon: "person-circle",
                options: getRoleOptions(),
                value: this.value,
              },
            },
          });
        }}
      >
        <small class="ion-text-capitalize">{this.value || "No Role"}</small>
      </ion-chip>
    );
  }
}
