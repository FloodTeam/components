import { ComponentInterface } from "../../stencil-public-runtime";
export declare class JsonViewer implements ComponentInterface {
  timer: number;
  lastValue: any;
  jsonViewerEl: any;
  watcher: boolean;
  openDepth: number;
  formatStringJSON(str: string): Promise<void>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidLoad(): void;
  render(): any;
}
