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

@Component({
  tag: "floodteam-select-location",
})
export class SelectLocation {
  @Element() selectLocationEl: any;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;
  @Event() fireenjinSubmit: EventEmitter<FireEnjinSubmitEvent>;

  @Prop() name = "status";
  @Prop() value: string;
  @Prop() jobId: string;
  @Prop() disabled = false;
  @Prop() locations: any[];

  @Listen("fireenjinTrigger", { target: "document" })
  onTrigger(event: CustomEvent<FireEnjinTriggerInput>) {
    if (
      event?.detail?.name !== "select" ||
      this.selectLocationEl !== event?.detail?.el
    )
      return;
    this.value = event?.detail?.payload?.value || null;
    this.fireenjinSubmit.emit({
      endpoint: "editJob",
      id: this.jobId,
      data: {
        locationId: this.value,
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
            type: "location",
            el: this.selectLocationEl,
            payload: {
              control: {
                name: "location",
                label: "Location",
                icon: "business",
                options: (this.locations || []).map((location) => ({
                  label: location?.name || "",
                  value: location?.id || null,
                })),
                value: this.value,
              },
            },
          });
        }}
      >
        <ion-icon name="business" class="ft-icon-style" />
        <ion-label class="ion-text-capitalize">
          {(this.locations || []).find(
            (location) => location?.id === this.value
          )?.name || "No Location Set"}
        </ion-label>
      </ion-chip>
    );
  }
}
