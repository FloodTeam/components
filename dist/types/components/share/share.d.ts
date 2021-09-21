import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class Share implements ComponentInterface {
  copyItemEl: any;
  floodteamShareClose: EventEmitter;
  options: {
    url: string;
    text?: string;
    title?: string;
  };
  openPopup(event: any, type: string): boolean;
  componentDidLoad(): void;
  render(): any;
}
