export declare class BookNow {
  formEl: any;
  /**
   * Is the user referring?
   */
  referring: boolean;
  /**
   * The ID of the referring user
   */
  referralId: string;
  /**
   * The ID of the location
   */
  locationId: string;
  /**
   * The campaign or API token
   */
  token: string;
  /**
   * The Google Maps API Key
   */
  googleMapsKey: string;
  errors: string[];
  successful: boolean;
  formData: any;
  confirmationId: string;
  checkmarkEl: any;
  onError(event: any): void;
  onSuccess(event: any): Promise<void>;
  componentDidLoad(): void;
  onBeforeSubmit(data: any): any;
  render(): any;
}
