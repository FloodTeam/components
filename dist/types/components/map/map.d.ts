/// <reference types="googlemaps" />
import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class Map implements ComponentInterface {
  /**
   * The Google Maps instance
   */
  map: google.maps.Map;
  /**
   * The current list of map markers
   */
  mapMarkers: google.maps.Marker[];
  mapEl: HTMLElement;
  /**
   * When a marker on the map is clicked
   */
  floodteamMapMarkerClick: EventEmitter<{
    marker: google.maps.Marker;
    location: {
      position: {
        lat: number;
        lng: number;
      };
      name: string;
      icon: string;
      payload?: any;
    };
  }>;
  /**
   * Should the map be visible?
   */
  visible: boolean;
  /**
   * A list of markers to put onto the map
   */
  markers: {
    position: {
      lat: number;
      lng: number;
    };
    name: string;
    icon: string;
    payload?: any;
  }[];
  /**
   * The approximate lat and lng of the current device
   */
  position: any;
  /**
   * Is the map currently visible?
   */
  isVisible: boolean;
  /**
   * Add a marker to the map
   * @param location The location information for the marker on the map
   */
  addMarker(location: {
    position: {
      lat: number;
      lng: number;
    };
    name: string;
    icon: string;
    payload?: any;
  }): Promise<google.maps.Marker>;
  /**
   * Set the list of map markers
   * @param markers A list of map markers
   */
  setMarkers(markers?: {
    position: {
      lat: number;
      lng: number;
    };
    name: string;
    icon: string;
    payload?: any;
  }[]): Promise<any>;
  setZoom(level: number): Promise<void>;
  setCenter(latLng: google.maps.LatLng | google.maps.LatLngLiteral): Promise<void>;
  /**
   * Clear the markers off of the map
   */
  clearMarkers(): Promise<boolean>;
  /**
   * When a marker is clicked set the zoom level,
   * animate to center, and emit an event
   * @param marker The map marker that has been clicked
   * @param location The location information tied to the map marker
   */
  onMarkerClick(marker: google.maps.Marker, location: {
    position: {
      lat: number;
      lng: number;
    };
    name: string;
    icon: string;
    payload?: any;
  }): void;
  /**
   * Get a device's location via Geolocation api and
   * fallback to location based on IP
   * @param callback The function to run when the location is determined
   */
  getLocationCoords(callback: (coords: {
    latitude: number;
    longitude: number;
  } | false) => any): void;
  /**
   * Create the instance of Google Maps
   * @param position The latitude and longitude to center the map on
   */
  createMap(position: {
    latitude: number;
    longitude: number;
  }): void;
  componentDidLoad(): void;
  render(): any;
}
