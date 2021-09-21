import { ComponentInterface } from "../../stencil-public-runtime";
export declare class InputState implements ComponentInterface {
  stateAutocompleteEl: HTMLElement;
  name: string;
  placeholder: string;
  value: string;
  stateList: any;
  componentDidLoad(): void;
  render(): any;
}
