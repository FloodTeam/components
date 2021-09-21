import { ComponentInterface } from "../../stencil-public-runtime";
export declare class LocationBar implements ComponentInterface {
  query: string;
  algoliaAppId: string;
  algoliaSearchKey: string;
  algoliaIndex: string;
  position: any;
  endOfSearch: boolean;
  searchOptions: any;
  searchResults: any[];
  resultCount: number;
  searchResultPages: number;
  changingLocation: boolean;
  getLocationCoords(callback: (coords: {
    latitude: number;
    longitude: number;
  } | false) => any): void;
  search(query: any, options: any): Readonly<Promise<import("@algolia/client-search").SearchResponse<unknown>>>;
  resetSearchOptions(): void;
  componentDidLoad(): Promise<void>;
  render(): any;
}
