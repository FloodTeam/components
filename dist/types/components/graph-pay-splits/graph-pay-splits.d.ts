import { ComponentInterface } from "../../stencil-public-runtime";
import { ChartDataset } from "chart.js";
export declare class GraphPaySplits implements ComponentInterface {
  graphPaySplitsEl: any;
  users: any[];
  graphTitle: string;
  datasets: ChartDataset[];
  labels: string[];
  currentUsers: any[];
  setUsers(users: any): Promise<any[]>;
  onUsersUpdate(): void;
  formatUSD(amount: number): string;
  getPaymentText(payment: any): string;
  componentDidLoad(): void;
  render(): any;
}
