import { Geolocation } from "@ionic-native/geolocation";
import { Component, Prop, h, Build, State, } from "@stencil/core";
import algoliasearch from "algoliasearch/lite";
export class LocationBar {
  constructor() {
    this.algoliaAppId = "ZKFP93O6EH";
    this.algoliaSearchKey = "cef2b52143823594c9c5af78ad86bcf0";
    this.algoliaIndex = "locations";
    this.endOfSearch = false;
    this.searchResults = [];
    this.resultCount = 0;
    this.searchResultPages = 0;
    this.changingLocation = false;
  }
  getLocationCoords(callback) {
    try {
      Geolocation.getCurrentPosition()
        .then((position) => {
        if (callback && typeof callback === "function") {
          callback(position.coords);
        }
      })
        .catch(async (error) => {
        console.log(error);
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
  search(query, options) {
    const client = algoliasearch(this.algoliaAppId, this.algoliaSearchKey);
    const index = client.initIndex(this.algoliaIndex);
    return index.search(query, Object.assign(Object.assign({}, options), { facetFilters: [["isSearchable:true"]] }));
  }
  resetSearchOptions() {
    this.query = "";
    this.endOfSearch = false;
    this.searchOptions = this.searchOptions ? this.searchOptions : {};
    this.searchOptions.page = 0;
    if (this.position) {
      this.searchOptions.aroundLatLng = `${this.position.latitude}, ${this.position.longitude}`;
    }
  }
  async componentDidLoad() {
    if (Build.isBrowser) {
      setTimeout(async () => {
        this.getLocationCoords((coords) => {
          this.position = coords
            ? coords
            : { latitude: 38.6270025, longitude: -90.19940419999999 };
          this.resetSearchOptions();
          this.search(this.query, this.searchOptions)
            .then((response) => {
            this.searchResultPages = parseInt(response.nbPages, 10);
            this.searchResults = response.hits;
            this.resultCount = response.nbHits;
          })
            .catch((error) => {
            console.log(error.message);
          });
        });
      }, 100);
    }
  }
  render() {
    return (h("ion-grid", null,
      h("ion-row", { class: "ion-align-items-center" },
        h("ion-col", { size: "12", sizeLg: "6" },
          h("ion-icon", { name: "navigate", class: "ft-icon-style" }),
          !this.changingLocation && h("h4", { class: "location-city" }, "O\u2019Fallon"),
          !this.changingLocation && (h("a", { href: "#", onClick: () => (this.changingLocation = true) }, "Change Location")),
          this.changingLocation && (h("fireenjin-form", { hideControls: true },
            h("floodteam-input", { name: "query", value: this.query, placeholder: "Enter Zip" }),
            h("ion-button", { color: "success", onClick: () => (this.changingLocation = false) }, "Set")))),
        h("ion-col", { size: "12", sizeLg: "6" },
          h("h4", null,
            "Call now:",
            " ",
            h("a", { href: "tel:+13143103064", class: "location-phone" }, "314-310-3064"))))));
  }
  static get is() { return "floodteam-location-bar"; }
  static get originalStyleUrls() { return {
    "$": ["location-bar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["location-bar.css"]
  }; }
  static get properties() { return {
    "query": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "query",
      "reflect": false
    },
    "algoliaAppId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "algolia-app-id",
      "reflect": false,
      "defaultValue": "\"ZKFP93O6EH\""
    },
    "algoliaSearchKey": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "algolia-search-key",
      "reflect": false,
      "defaultValue": "\"cef2b52143823594c9c5af78ad86bcf0\""
    },
    "algoliaIndex": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "algolia-index",
      "reflect": false,
      "defaultValue": "\"locations\""
    }
  }; }
  static get states() { return {
    "position": {},
    "endOfSearch": {},
    "searchOptions": {},
    "searchResults": {},
    "resultCount": {},
    "searchResultPages": {},
    "changingLocation": {}
  }; }
}
