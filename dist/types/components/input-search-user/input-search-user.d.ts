import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class InputSearchUser implements ComponentInterface {
  timer: any;
  inputEl: HTMLIonInputElement;
  inputSearchEl: HTMLFloodteamInputSearchElement;
  name: string;
  label: string;
  placeholder: string;
  value: any;
  required: boolean;
  autofocus: boolean;
  disableSearch: boolean;
  disabled: boolean;
  endpoint: string;
  dataPropsMap: any;
  mode: "popover" | "inline";
  iconEnd: string;
  iconStart: string;
  limit: number;
  template: (result: any) => any;
  results: any[];
  ionInput: EventEmitter;
  floodteamSelectUser: EventEmitter;
  selectUser(event: any, user: any): Promise<void>;
  render(): any;
}
