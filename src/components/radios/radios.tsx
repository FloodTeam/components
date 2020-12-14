import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";

@Component({
  tag: "floodteam-radios",
  styleUrl: "radios.css",
})
export class Radios implements ComponentInterface {
  @Prop() label: string;
  @Prop({
    mutable: true,
  })
  value: any;
  @Prop() required: any;
  @Prop() options: any;
  @Prop() name: string;
  @Prop() lines: "full" | "inset" | "none" = "none";
  @Prop({ mutable: true }) selected = 0;

  @State() selectedIndex: number;

  @Event() ionChange: EventEmitter;

  @Watch("selected")
  onSelectedChange() {
    setTimeout(() => {
      this.setSelectedIndex();
    }, 50);
  }

  @Watch("value")
  onValueChange() {
    setTimeout(() => {
      this.setSelectedValue();
    }, 50);
  }

  async getOptionIndex(str: string) {
    if (!this.options || !this.options.length) return false;
    let selectedIndex: any = 0;
    let i = 0;
    for (const option of this.options) {
      if (option.value === str) {
        selectedIndex = i;
        break;
      }
      i = i + 1;
    }
    this.selected = this.selectedIndex;

    return selectedIndex;
  }

  setSelectedValue() {
    let index = 0;
    for (const option of this.options) {
      if (option.value === this.value) {
        this.selected = index;
      }
      index = index + 1;
    }
    this.ionChange.emit({
      value: this.value,
      name: this.name,
    });
  }

  setSelectedIndex() {
    this.selectedIndex = this.selected;
    this.value = this.options[this.selected].value;
    this.ionChange.emit({
      value: this.value,
      name: this.name,
    });
  }

  componentWillLoad() {
    this.setSelectedIndex();
  }

  selectOption(index, option) {
    this.value = typeof option.value !== "undefined" ? option.value : null;
    this.selectedIndex = index;
    if (!this.value) {
      setTimeout(() => {
        this.setSelectedValue();
      }, 50);
    }
  }

  render() {
    return (
      <ion-item lines={this.lines}>
        <ion-label position="stacked">{this.label}</ion-label>
        <ul>
          {this.options.map((radio, index) => (
            <li onClick={() => this.selectOption(index, radio)}>
              {radio.name}
              {index === this.selectedIndex ? (
                <ion-icon name="checkmark-circle" />
              ) : (
                <div class="empty-circle" />
              )}
            </li>
          ))}
        </ul>
      </ion-item>
    );
  }
}
