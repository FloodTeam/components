import { Color, SelectCompareFn, SelectInterface } from "@ionic/core";

export interface WhereStatement {
  key?: string;
  conditional?: WhereFilterOp;
  value?: any;
}

export declare type WhereFilterOp =
  | "<"
  | "<="
  | "=="
  | "!="
  | ">="
  | ">"
  | "array-contains"
  | "in"
  | "array-contains-any"
  | "not-in";

export interface QueryFilters {
  query?: string;
  tags?: string[];
  limit?: number;
  orderBy?: string;
  orderDirection?: "asc" | "desc";
  whereEqual?: any;
  whereLessThan?: any;
  whereLessThanOrEqual?: any;
  whereGreaterThan?: any;
  whereGreaterThanOrEqual?: any;
  whereArrayContains?: any;
  whereArrayContainsAny?: any;
  whereIn?: any;
}

export interface TriggerPayload {
  queries?: {
    collection: string;
    aliasAs?: string;
    filter?: QueryFilters;
  }[];
  action?: "alert";
  payload?: any;
}

export interface Control {
  /**
   * The label to show next to the button
   */
  label: string;
  /**
   * The icon to use in the button
   */
  icon: string;
  /**
   * The color from the theme to make the button
   */
  color?: Color;
  /**
   * The link to use for the button
   */
  href?: string;
  /**
   * The functionality to run when the button is clicked
   */
  onClick?: (event: any) => any;
}

export interface PaymentMethod {
  brand?: string;
  expirationMonth?: number;
  expirationYear?: number;
  id?: string;
  last4?: string;
  name?: string;
  type?: string;
}

export type InvoiceType =
  | "water"
  | "mold"
  | "content"
  | "reconstruction"
  | "drain";

export type filterControl = {
  resultsKey?: string;
  name: string;
  icon?: string;
  label?: string;
  value?: any;
  header?: string;
  subHeader?: string;
  message?: string;
  optionEl?: (result: any) => any;
  endpoint?: string;
  query?: string;
  limit?: number;
  orderBy?: string;
  dataPropsMap?: any;
  params?: any;
  multiple?: boolean;
  disabled?: boolean;
  cancelText?: string;
  okText?: string;
  placeholder?: string;
  selectedText?: string;
  interface?: SelectInterface;
  interfaceOptions?: any;
  compareWith?: string | SelectCompareFn | null;
  options?: {
    label: string;
    value: string;
  }[];
};
