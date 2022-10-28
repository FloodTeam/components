import { FireEnjinSubmitEvent, FireEnjinTriggerInput } from "@fireenjin/sdk";
import {
  Element,
  Component,
  Listen,
  Prop,
  Event,
  EventEmitter,
  h,
} from "@stencil/core";
import getLostReasonOptions from "../../helpers/getLostReasonOptions";

@Component({
  tag: "floodteam-select-lost-reason",
})
export class SelectLostReason {
  @Element() selectLocationEl: any;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;
  @Event() fireenjinSubmit: EventEmitter<FireEnjinSubmitEvent>;

  @Prop() name = "lostReason";
  @Prop() value: string;
  @Prop() jobId: string;
  @Prop() disabled = false;

  @Listen("fireenjinTrigger", { target: "document" })
  onTrigger(event: CustomEvent<FireEnjinTriggerInput>) {
    if (event?.detail?.event?.detail?.type !== this.name) return;
    this.value = event?.detail?.payload?.value || null;
    this.fireenjinSubmit.emit({
      endpoint: "editJob",
      id: this.jobId,
      data: {
        lostReason: this.value,
      },
    });
  }

  render() {
    const options = getLostReasonOptions();
    return (
      <ion-chip
        onClick={(event) => {
          if (this.disabled) return;
          event.preventDefault();
          event.stopPropagation();
          this.fireenjinTrigger.emit({
            event,
            name: "filter",
            type: this.name,
            el: this.selectLocationEl,
            payload: {
              control: {
                name: this.name,
                label: "Lost Reason",
                icon: "info",
                options,
                value: this.value,
              },
            },
          });
        }}
      >
        <ion-icon name="help" class="ft-icon-style" />
        <ion-label class="ion-text-capitalize">
          {(options || []).find((option) => option?.value === this.value)
            ?.label || "No Reason Set"}
        </ion-label>
      </ion-chip>
    );
  }
}
