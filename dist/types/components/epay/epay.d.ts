import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class Epay implements ComponentInterface {
  payCheckEl: any;
  sliderEl: HTMLIonSlidesElement;
  checkmarkEl: any;
  slideIndex: string[];
  countdownTimerEl: any;
  userPrefersDark: boolean;
  epayEl: any;
  ftEpayShowCommisions: EventEmitter<any>;
  fireenjinFetch: EventEmitter<any>;
  fireenjinSubmit: EventEmitter<any>;
  /**
   * The error message to display
   */
  error: string;
  /**
   * The amount of money owed
   */
  owed: any;
  /**
   * The total amount of money billed
   */
  total: any;
  /**
   * The slide to show when loading the component
   */
  showSlide: "report" | "details" | "payments" | "card" | "check" | "confirmation";
  /**
   * The list of payments
   */
  payments: {
    timestamp: string;
    brand: string;
    last4: number;
    amount: number;
  }[];
  stripeKey: string;
  customer: any;
  jobId: string;
  userId: string;
  dadeKey: string;
  dadeUrl: string;
  users: any[];
  paymentId: string;
  amount: number;
  isSlidesHidding: boolean;
  isHeaderShrunk: boolean;
  isBackShowing: boolean;
  isSubTextShowing: boolean;
  isHeaderHidden: boolean;
  paymentType: "card" | "check" | "manual";
  email: string;
  job: any;
  subText: string;
  paymentPayload: any;
  checkFront: string;
  checkBack: string;
  paymentEvent: any;
  loading: boolean;
  errorCode: number;
  onSuccess(event: any): Promise<void>;
  onCheckScan(event: any): boolean;
  onInput(event: any): void;
  onFtToggle(event: any): void;
  onSubmitCard(_event: any): Promise<void>;
  goToConfirmation(event: any): Promise<void>;
  approve(): Promise<void>;
  submitPayment(type: "card" | "check" | "manual", event: any): void;
  onCardError(): void;
  onSlideChange(event: any): Promise<void>;
  onCheckError(event: any): boolean;
  onSelect(event: any): void;
  onSubmitCheck(event: any): Promise<void>;
  onCancel(): void;
  /**
   * Update the ion-slides height
   */
  updateSlides(): Promise<void>;
  success(): Promise<void>;
  reset(): Promise<void>;
  /**
   * Confirm a check payment
   */
  confirmPayment(options?: any): Promise<any>;
  onOwedChange(): void;
  onTotalChange(): void;
  componentDidLoad(): void;
  fetchData(): Promise<void>;
  setSlide(name: "report" | "details" | "payments" | "card" | "check" | "confirmation" | "success"): Promise<void>;
  formatUSD(amount: number): string;
  setSubText(): void;
  calculatePercentPaid(): number;
  takePayment(): Promise<void>;
  payWithCard(): boolean;
  payWithCheck(): boolean;
  payManually(): boolean;
  goBack(): Promise<void>;
  capitalize(s: any): string;
  getPaymentTypeCofirmation(): string;
  getPaymentText(payment: any): string;
  render(): any;
}
