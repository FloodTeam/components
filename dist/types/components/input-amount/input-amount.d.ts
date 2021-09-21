import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class InputAmount implements ComponentInterface {
  inputEl: HTMLIonInputElement;
  name: string;
  label: string;
  placeholder: string;
  value: any;
  required: boolean;
  presets: ({
    label?: string;
    value: any;
  } | string)[];
  decimal: boolean;
  autofocus: boolean;
  disabled: boolean;
  min: string;
  max: string;
  step: string;
  formattedValue: string;
  ionInput: EventEmitter;
  ionChange: EventEmitter;
  onChange(event: any): void;
  onValueChange(newValue: any, oldValue: any): boolean;
  formatCurrency(amount: any): string;
  componentDidLoad(): void;
  selectPreset(preset: {
    label?: string;
    value: any;
  } | string): void;
  render(): any;
}
