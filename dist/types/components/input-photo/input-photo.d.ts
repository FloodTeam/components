import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class InputPhoto implements ComponentInterface {
  photoUploaderEl: any;
  /**
   * Is the uploader disabled
   */
  disabled: boolean;
  /**
   * A link to the photo to display
   */
  value: string;
  /**
   * The storage path to upload the file to
   */
  path: string;
  /**
   * The fallback image to use if photo isn't set
   */
  fallback: string;
  /**
   * The name to use when emitting field change event
   */
  name?: string;
  /**
   * The filename to use for the uploaded file
   */
  fileName?: string;
  /**
   * Should the photo uploader show the button
   */
  showButton: boolean;
  /**
   * Text to display on the photo upload button
   */
  buttonText: string;
  /**
   * The type of photo being uploaded
   */
  type: string;
  /**
   * The ID of the document the photo is tied to
   */
  documentId: string;
  /**
   * The endpoint to upload to
   */
  endpoint: string;
  initials: string;
  /**
   * Allow uploading multiple
   */
  multiple: boolean;
  loading: boolean;
  photoUrl: string;
  fireenjinUpload: EventEmitter;
  ionInput: EventEmitter;
  onSuccess(event: any): boolean;
  onPhotoChange(): void;
  componentDidLoad(): void;
  updatePhoto(): void;
  triggerFileInput(_event: any): Promise<boolean>;
  selectFile(event: any): void;
  uploadPhoto(file: any): void;
  onDrop(event: any): void;
  onDrag(event: any): void;
  onDragEnter(): void;
  onDragLeave(): void;
  render(): any;
}
