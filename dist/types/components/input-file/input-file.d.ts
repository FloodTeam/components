import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class InputFile implements ComponentInterface {
  fileUploaderEl: any;
  path: string;
  icon: string;
  label: string;
  fileName: string;
  name?: string;
  accept?: string;
  defaultValue: any;
  value: any;
  type: string;
  documentId: string;
  /**
   * The endpoint to upload to
   */
  endpoint: string;
  uploadData: any;
  isLoading: boolean;
  fileUrl: string;
  selectedFile: string;
  dragOver: boolean;
  fireenjinUpload: EventEmitter;
  ionInput: EventEmitter;
  onFileChange(): boolean;
  openFile(): Promise<any>;
  uploadFile(file: any): void;
  selectFile(event: any): void;
  onDrop(event: any): void;
  onDrag(event: any): void;
  onDragOver(event: any): void;
  onDragEnter(event: any): void;
  onDragLeave(event: any): void;
  render(): any;
}
