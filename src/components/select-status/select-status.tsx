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
import getStatusOptions from "../../helpers/getStatusOptions";

@Component({
  tag: "floodteam-select-status",
})
export class SelectStatus {
  @Element() selectStatusEl: any;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;
  @Event() fireenjinSubmit: EventEmitter<FireEnjinSubmitEvent>;

  @Prop() name = "status";
  @Prop() value: string;
  @Prop() jobId: string;
  @Prop() disabled = false;

  @Listen("fireenjinTrigger", { target: "document" })
  onTrigger(event: CustomEvent<FireEnjinTriggerInput>) {
    if (
      event?.detail?.name !== "select" ||
      this.selectStatusEl !== event?.detail?.el
    )
      return;
    this.value = event?.detail?.payload?.value || null;
    this.fireenjinSubmit.emit({
      endpoint: "editJob",
      id: this.jobId,
      data: {
        status: this.value,
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
            type: "status",
            el: this.selectStatusEl,
            payload: {
              control: {
                name: "status",
                label: "Status",
                icon: "help-circle",
                options: getStatusOptions(),
                value: this.value,
              },
            },
          });
        }}
      >
        <ion-icon name="help-circle" class="ft-icon-style" />
        <ion-label class="ion-text-capitalize">
          {this.value || "No Status"}
        </ion-label>
      </ion-chip>
    );
  }
}
