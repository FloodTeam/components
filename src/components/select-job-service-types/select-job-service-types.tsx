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
import getInvoiceTypes from "../../helpers/getInvoiceTypes";

@Component({
  tag: "floodteam-select-job-service-types",
})
export class SelectJobServiceTypes {
  @Element() selectLocationEl: any;

  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;
  @Event() fireenjinSubmit: EventEmitter<FireEnjinSubmitEvent>;

  @Prop() name = "serviceTypes";
  @Prop() value: string[];
  @Prop() jobId: string;
  @Prop() locationId: string;
  @Prop() disabled = false;
  @Prop() icon = "reader";

  @Listen("fireenjinTrigger", { target: "document" })
  onTrigger(event: CustomEvent<FireEnjinTriggerInput>) {
    if (event?.detail?.event?.detail?.type !== this.name) return;
    this.value = event?.detail?.payload?.value || null;
    this.fireenjinSubmit.emit({
      endpoint: this.jobId
        ? "editJob"
        : this.locationId
        ? "editLocation"
        : null,
      id: this.jobId || this.locationId || null,
      data: {
        serviceTypes: this.value || [],
      },
    });
  }

  render() {
    const options = getInvoiceTypes();
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
                multiple: true,
                name: this.name,
                label: "Service Types",
                icon: this.icon,
                options,
                value: this.value,
              },
            },
          });
        }}
      >
        <ion-icon name={this.icon} class="ft-icon-style" />
        <ion-label class="ion-text-capitalize">
          {(options || [])
            .filter((option) => (this.value || []).includes(option?.value))
            .map((option) => option?.value)
            .join(", ") || "No Service Types Set"}
        </ion-label>
      </ion-chip>
    );
  }
}
