import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-input-totaller-type",
})
export class InputTotallerType {
  @Event() ionInput: EventEmitter;
  @Event() ionChange: EventEmitter;

  @Prop() label: string;
  @Prop() labelPosition: "stacked" | "fixed" | "floating" = "stacked";
  @Prop() name = "type";
  @Prop() list: string;
  @Prop() placeholder = "Type";
  @Prop() options?: { label: string; value: any }[] = [
    {
      label: "Year",
      value: "year",
    },
    {
      label: "Quarter",
      value: "quarter",
    },
    {
      label: "Month",
      value: "month",
    },
    {
      label: "Week",
      value: "week",
    },
    {
      label: "Day",
      value: "day",
    },
  ];
  @Prop() value: any;
  @Prop() required = false;

  render() {
    return (
      <ion-item style={{ overflow: "visible" }}>
        <ion-label position={this.labelPosition}>{this.label}</ion-label>
        <input
          required={this.required}
          onInput={(event: any) => {
            this.value = event?.target?.value;
            this.ionInput.emit({
              name: this.name,
              value: this.value,
              event,
            });
          }}
          onChange={(event: any) => {
            this.value = event?.target?.value;
            this.ionChange.emit({
              name: this.name,
              value: this.value,
              event,
            });
          }}
          style={{
            border: "none",
            background: "transparent",
          }}
          list={this.list || this.name}
          name={this.name}
          placeholder={this.placeholder}
          value={this.value}
        />
        <datalist id={this.list || this.name}>
          {(this.options || []).map((option) => (
            <option>{option?.value}</option>
          ))}
        </datalist>
      </ion-item>
    );
  }
}
