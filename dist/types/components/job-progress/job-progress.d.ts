import { Color } from "@ionic/core";
import { ComponentInterface } from "../../stencil-public-runtime";
export declare class JobProgress implements ComponentInterface {
  name: string;
  value: string;
  statuses: string[];
  color: Color;
  scrollable: boolean;
  render(): any;
}
