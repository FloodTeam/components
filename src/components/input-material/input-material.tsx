import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
  tag: "floodteam-input-material",
})
export class InputMaterial {
  @Event() ionInput: EventEmitter;
  @Event() ionChange: EventEmitter;

  @Prop() label: string;
  @Prop() labelPosition: "stacked" | "fixed" | "floating" = "stacked";
  @Prop() name = "material";
  @Prop() list: string;
  @Prop() placeholder = "Choose a material";
  @Prop() options: { label: string; value: any }[];
  @Prop() multiple = false;
  @Prop() value: any;

  render() {
    return (
      <ion-item style={{ overflow: "visible" }}>
        <ion-label position={this.labelPosition}>{this.label}</ion-label>
        <input
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
          multiple={this.multiple}
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
