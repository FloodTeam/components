import { ComponentInterface } from "../../stencil-public-runtime";
export declare class LogItem implements ComponentInterface {
  type: string;
  name: string;
  resolveTime: number;
  input: string;
  output: string;
  createdAt: string;
  formatDate(timestamp: string): string;
  render(): any;
}
