import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class PayCard implements ComponentInterface {
  stripe: any;
  payCardEl: HTMLElement;
  ftSubmitCard: EventEmitter;
  ftCardError: EventEmitter;
  ftCancel: EventEmitter;
  stripeStyle: any;
  stripeKey: string;
  card: any;
  error: string;
  isLoading: boolean;
  onStripeKeyChange(): void;
  save(event: any): void;
  cancel(event: any): void;
  componentDidLoad(): void;
  initializeStripeElements(): void;
  render(): any;
}
