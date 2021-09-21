import { Geolocation } from "@ionic-native/geolocation";
import { Component, Element, Event, Host, State, Prop, Method, h, Build, } from "@stencil/core";
export class Map {
  constructor() {
    /**
     * The current list of map markers
     */
    this.mapMarkers = [];
    /**
     * Should the map be visible?
     */
    this.visible = true;
    /**
     * A list of markers to put onto the map
     */
    this.markers = [];
    /**
     * Is the map currently visible?
     */
    this.isVisible = true;
  }
  /**
   * Add a marker to the map
   * @param location The location information for the marker on the map
   */
  async addMarker(location) {
    const marker = typeof location === "string" ? JSON.parse(location) : location;
    const mapMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.name,
      icon: {
        url: marker.icon,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 15),
        scaledSize: new google.maps.Size(34, 34),
        shape: { coords: [17, 17, 18], type: "circle" },
        optimized: false,
      },
    });
    mapMarker.addListener("click", () => {
      this.onMarkerClick(mapMarker, marker);
    });
    this.mapMarkers.push(mapMarker);
    return mapMarker;
  }
  /**
   * Set the list of map markers
   * @param markers A list of map markers
   */
  async setMarkers(markers = []) {
    return (this.markers =
      typeof markers === "string"
        ? JSON.parse(markers)
        : markers.length > 0
          ? markers
          : this.mapEl.getAttribute("markers")
            ? JSON.parse(this.mapEl.getAttribute("markers"))
            : []);
  }
  async setZoom(level) {
    return this.map.setZoom(level);
  }
  async setCenter(latLng) {
    return this.map.setCenter(latLng);
  }
  /**
   * Clear the markers off of the map
   */
  async clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.mapMarkers[i].setMap(null);
    }
    this.mapMarkers = [];
    return true;
  }
  /**
   * When a marker is clicked set the zoom level,
   * animate to center, and emit an event
   * @param marker The map marker that has been clicked
   * @param location The location information tied to the map marker
   */
  onMarkerClick(marker, location) {
    this.map.setZoom(12);
    this.map.setCenter(marker.getPosition());
    this.floodteamMapMarkerClick.emit({
      marker,
      location,
    });
  }
  /**
   * Get a device's location via Geolocation api and
   * fallback to location based on IP
   * @param callback The function to run when the location is determined
   */
  getLocationCoords(callback) {
    try {
      Geolocation.getCurrentPosition()
        .then((position) => {
        if (callback && typeof callback === "function") {
          callback(position.coords);
        }
      })
        .catch(async (_error) => {
        fetch("http://ip-api.com/json").then(async (response) => {
          const ISPInfo = await response.json();
          callback({
            latitude: ISPInfo.lat,
            longitude: ISPInfo.lon,
          });
        });
        if (callback && typeof callback === "function") {
          callback(false);
        }
      });
    }
    catch (error) {
      callback(false);
    }
  }
  /**
   * Create the instance of Google Maps
   * @param position The latitude and longitude to center the map on
   */
  createMap(position) {
    this.map = new google.maps.Map(this.mapEl.querySelector("#map"), {
      zoom: 9,
      center: {
        lat: position.latitude,
        lng: position.longitude,
      },
    });
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.isVisible = this.visible;
      this.getLocationCoords(async (coords) => {
        this.position = coords
          ? coords
          : { latitude: 38.6270025, longitude: -90.19940419999999 };
        this.createMap(this.position);
        await this.setMarkers(this.markers);
        if (this.markers.length >= 1) {
          this.markers.map(this.addMarker.bind(this));
        }
      });
    }
  }
  render() {
    return (h(Host, { class: { "map-is-visible": this.isVisible } },
      h("div", { id: "map" })));
  }
  static get is() { return "floodteam-map"; }
  static get originalStyleUrls() { return {
    "$": ["map.css"]
  }; }
  static get styleUrls() { return {
    "$": ["map.css"]
  }; }
  static get properties() { return {
    "visible": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Should the map be visible?"
      },
      "attribute": "visible",
      "reflect": false,
      "defaultValue": "true"
    },
    "markers": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "{\r\n    position: {\r\n      lat: number;\r\n      lng: number;\r\n    };\r\n    name: string;\r\n    icon: string;\r\n    payload?: any;\r\n  }[]",
        "resolved": "{ position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A list of markers to put onto the map"
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "position": {},
    "isVisible": {}
  }; }
  static get events() { return [{
      "method": "floodteamMapMarkerClick",
      "name": "floodteamMapMarkerClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "When a marker on the map is clicked"
      },
      "complexType": {
        "original": "{\r\n    marker: google.maps.Marker;\r\n    location: {\r\n      position: {\r\n        lat: number;\r\n        lng: number;\r\n      };\r\n      name: string;\r\n      icon: string;\r\n      payload?: any;\r\n    };\r\n  }",
        "resolved": "{ marker: Marker; location: { position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }; }",
        "references": {
          "google": {
            "location": "global"
          }
        }
      }
    }]; }
  static get methods() { return {
    "addMarker": {
      "complexType": {
        "signature": "(location: { position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }) => Promise<google.maps.Marker>",
        "parameters": [{
            "tags": [{
                "text": "location The location information for the marker on the map",
                "name": "param"
              }],
            "text": "The location information for the marker on the map"
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "google": {
            "location": "global"
          }
        },
        "return": "Promise<Marker>"
      },
      "docs": {
        "text": "Add a marker to the map",
        "tags": [{
            "name": "param",
            "text": "location The location information for the marker on the map"
          }]
      }
    },
    "setMarkers": {
      "complexType": {
        "signature": "(markers?: { position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }[]) => Promise<any>",
        "parameters": [{
            "tags": [{
                "text": "markers A list of map markers",
                "name": "param"
              }],
            "text": "A list of map markers"
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Set the list of map markers",
        "tags": [{
            "name": "param",
            "text": "markers A list of map markers"
          }]
      }
    },
    "setZoom": {
      "complexType": {
        "signature": "(level: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setCenter": {
      "complexType": {
        "signature": "(latLng: google.maps.LatLng | google.maps.LatLngLiteral) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "google": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearMarkers": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Clear the markers off of the map",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "mapEl"; }
}
