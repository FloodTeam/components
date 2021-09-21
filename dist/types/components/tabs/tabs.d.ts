import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class Tabs implements ComponentInterface {
  tabsWrapperEl: HTMLElement;
  floodteamTabChange: EventEmitter;
  hash: boolean;
  selected: string;
  tabs: any[];
  componentDidLoad(): void;
  setSelectedTab(): any[];
  tabClick(tab: any): void;
  render(): any;
}
