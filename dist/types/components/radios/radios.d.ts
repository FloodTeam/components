import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class Radios implements ComponentInterface {
  label: string;
  value: any;
  required: any;
  options: any;
  name: string;
  lines: "full" | "inset" | "none";
  selected: number;
  selectedIndex: number;
  ionChange: EventEmitter;
  onSelectedChange(): void;
  onValueChange(): void;
  getOptionIndex(str: string): Promise<any>;
  setSelectedValue(): void;
  setSelectedIndex(): void;
  componentWillLoad(): void;
  selectOption(index: any, option: any): void;
  render(): any;
}
