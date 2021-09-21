import { EventEmitter } from "../../stencil-public-runtime";
export declare class SignaturePad {
  canvasEl: any;
  pad: any;
  ionChange: EventEmitter;
  ionInput: EventEmitter;
  /**
   * The name of the element
   */
  name: string;
  /**
   * The current data for the signature pad
   */
  value: any;
  /**
   * Color used to draw the lines. Can be any color format accepted by context.fillStyle
   */
  penColor: string;
  /**
   * The text to display on the submit button
   */
  submitText: string;
  /**
   * The text to display on the clear button
   */
  clearText: string;
  /**
   * The label to display below signature pad
   */
  label: string;
  /**
   * The background color for the signature pad
   */
  backgroundColor: string;
  /**
   * Radius of a single dot
   */
  dotSize: number;
  /**
   * Minimum width of a line
   */
  minWidth: number;
  /**
   * Maximum width of a line
   */
  maxWidth: number;
  /**
   * Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling
   */
  throttle: number;
  /**
   * Add the next point only if the previous one is farther than x pixels
   */
  minDistance: number;
  /**
   * Weight used to modify new velocity based on the previous velocity
   */
  velocityFilterWeight: number;
  onDataChange(): void;
  onBackgroundColorChange(): void;
  onPenColorChange(): void;
  onMinWidthChange(): void;
  onMaxWidthChange(): void;
  onDotSizeChange(): void;
  onThrottleChange(): void;
  onMinDistanceChange(): void;
  onVelocityFilterWeightChange(): void;
  onResize(): Promise<void>;
  /**
   * Check if the signature pad is empty
   */
  isEmpty(): Promise<any>;
  toDataURL(type?: string): Promise<any>;
  /**
   * Download the signature as an SVG file
   */
  downloadSVG(): Promise<void>;
  /**
   * Download the signature as a PNG file
   */
  downloadPNG(): Promise<void>;
  /**
   * Download the signature as a JPG file
   */
  downloadJPG(): Promise<void>;
  /**
   * Clear the signature field
   */
  clear(): Promise<any>;
  /**
   * Undo the last stroke from the signature
   */
  undo(): Promise<any>;
  /**
   * Fill the signature pad from data
   * @param data The signature data
   */
  fromData(data: any): Promise<any>;
  /**
   * Get the signature pad data
   */
  toData(): Promise<any>;
  /**
   * Download a file via a new browser tab
   * @param dataURL The signature image file data
   * @param filename The name of the file
   */
  download(dataURL: any, filename: any): Promise<void>;
  /**
   * Resize the canvas based on browser
   */
  resizeCanvas(): Promise<void>;
  /**
   * Update the value and emit ionChange event
   */
  submit(): Promise<void>;
  getSignatureInstace(): Promise<any>;
  dataURLToBlob(dataURL: any): Blob;
  componentDidLoad(): void;
  render(): any;
}
