import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
import { filterControl } from "../../typings";
export declare class SearchBar implements ComponentInterface {
  fireenjinTrigger: EventEmitter;
  sort?: {
    label?: string;
    value?: string;
    header?: string;
    subHeader?: string;
    message?: string;
    options: {
      label: string;
      value: string;
    }[];
  };
  filter?: {
    label?: string;
    controls: filterControl[];
  };
  paginationEl: any;
  modeToggle: boolean;
  displayMode: "list" | "grid";
  disabled: boolean;
  beforeGetResults: any;
  showFilter: boolean;
  selectOptions: any;
  currentFilters: {
    [filterKey: string]: filterControl;
  };
  onFilterChange(): void;
  onSuccess(event: any): void;
  onChange(event: any): Promise<void>;
  togglePaginationDisplay(): Promise<void>;
  clearFilter(event: any, clearingControl: filterControl): Promise<void>;
  updateCurrentFilters(): Promise<void>;
  getControlLabel(control: filterControl): any;
  componentDidLoad(): void;
  render(): any;
}
