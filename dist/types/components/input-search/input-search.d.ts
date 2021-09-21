import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
import { TextFieldTypes } from "@ionic/core";
export declare class InputSearch implements ComponentInterface {
  itemEl: HTMLIonItemElement;
  timer: any;
  resultsPopover: HTMLIonPopoverElement;
  inputEl: HTMLIonInputElement;
  name: string;
  label: string;
  placeholder: string;
  value: any;
  required: boolean;
  autofocus: boolean;
  disabled: boolean;
  endpoint: string;
  dataPropsMap: any;
  template: (result: any) => any;
  type: TextFieldTypes;
  searchParams: any;
  disableSearch: boolean;
  mode: "popover" | "inline";
  iconEnd: string;
  iconStart: string;
  results: any[];
  resultsKey: string;
  ionInput: EventEmitter;
  fireenjinFetch: EventEmitter;
  checkValidity(options?: {
    setValidationClass?: boolean;
    validationClassOptions?: {
      ignoreInvalid?: boolean;
    };
  }): Promise<boolean>;
  reportValidity(): Promise<boolean>;
  onBlur(): Promise<void>;
  onSuccess(event: any): Promise<void>;
  onInput(event: any): void;
  clearResults(): Promise<any[]>;
  closePopover(): Promise<boolean>;
  openPopover(): Promise<void>;
  setValidationClass(options?: {
    ignoreInvalid?: boolean;
  }): Promise<void>;
  render(): any[];
}
