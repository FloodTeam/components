import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class InputAddress implements ComponentInterface {
  autocompleteFieldEl: HTMLIonInputElement;
  streetInputEl: HTMLIonInputElement;
  unitInputEl: HTMLIonInputElement;
  stateSelectEl: any;
  cityInputEl: HTMLIonInputElement;
  zipInputEl: HTMLIonInputElement;
  addressAutocompleteEl: any;
  /**
   * The placeholder text for the input field
   */
  placeholder: string;
  /**
   * The value of the input field
   */
  value: any;
  /**
   * The label of the input field
   */
  label: string;
  /**
   * Whether the address input is required
   */
  required: boolean;
  /**
   * The name attribute of the input
   */
  name: string;
  /**
   * The Google Maps API Key
   */
  googleMapsKey: string;
  place: any;
  manualEntry: boolean;
  forceUpdate: boolean;
  ionInput: EventEmitter;
  floodteamAddressMode: EventEmitter;
  floodteamUpdateAutoHeight: EventEmitter;
  onChange(): void;
  injectScript(src: any): Promise<unknown>;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): Promise<void>;
  toggleManualEntry(): void;
  render(): any[];
}
