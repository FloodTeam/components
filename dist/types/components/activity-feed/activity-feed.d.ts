import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class ActivityFeed implements ComponentInterface {
  filterBarEl: any;
  filterPopoverEl: HTMLIonPopoverElement;
  fireenjinTrigger: EventEmitter;
  jobId: string;
  siteId: string;
  userId: string;
  paginationEl: HTMLElement;
  fetchData: any;
  isLoading: boolean;
  onChange(event: any): void;
  onSuccess(event: any): void;
  setProgress(listEl: any): void;
  render(): any;
}
