import { Geolocation } from "@ionic-native/geolocation";
import {
  Component,
  ComponentInterface,
  Prop,
  h,
  Build,
  State,
  Method,
  Listen,
} from "@stencil/core";
import algoliasearch from "algoliasearch";
import zipCodeLookup from "../../helpers/zipCodeLookup";

@Component({
  tag: "floodteam-location-bar",
  styleUrl: "location-bar.css",
})
export class LocationBar implements ComponentInterface {
  index: any;

  @Prop({ mutable: true }) query;
  @Prop() algoliaAppId = "ZKFP93O6EH";
  @Prop() algoliaSearchKey = "cef2b52143823594c9c5af78ad86bcf0";
  @Prop() algoliaIndex = "locations";
  @Prop() locationId: string;

  @State() position: {
    latitude?: string;
    longitude?: string;
  };
  @State() endOfSearch = false;
  @State() searchOptions: any = {};
  @State() searchResults: any[] = [];
  @State() resultCount = 0;
  @State() searchResultPages = 0;
  @State() changingLocation = false;
  @State() location: {
    objectID?: string;
    name?: string;
    path?: string;
    id?: string;
    email?: string;
    phone?: string;
    type?: string;
    address?: any;
    isSearchable?: boolean;
    createdAt?: number;
    updatedAt?: number;
    _geoloc?: {
      lat: string;
      lng: string;
    };
    taxId?: string;
    lastModified?: number;
  };

  @Method()
  async findLocation(id: string) {
    this.location = await this.index.getObject(id);
    return this.location;
  }

  @Method()
  async search(query, options) {
    return this.index.search(query, {
      ...options,
      facetFilters: [["isSearchable:true"]],
    });
  }

  @Listen("ionInput")
  onInput(event) {
    if (event.target?.name !== "query") return;
    this.query = event.target.value;
  }

  getLocationCoords(
    callback: (coords: { latitude: number; longitude: number } | false) => any
  ) {
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
    } catch (error) {
      callback(false);
    }
  }

  changeLocation() {
    const zipCode = zipCodeLookup(this.query);
    this.position = {
      latitude: zipCode?.lat,
      longitude: zipCode?.lng,
    };
    this.resetSearchOptions();

    this.search("", this.searchOptions)
      .then((response: any) => {
        this.searchResultPages = parseInt(response.nbPages, 10);
        this.searchResults = response.hits;
        this.resultCount = response.nbHits;
        this.location = this.searchResults?.[0];
      })
      .catch((error) => {
        console.log(error.message);
      });
    this.changingLocation = false;
  }

  resetSearchOptions() {
    this.query = "";
    this.endOfSearch = false;
    this.searchOptions = this.searchOptions ? this.searchOptions : {};
    this.searchOptions.page = 0;

    if (this.position) {
      this.searchOptions.aroundLatLng = `${this.position.latitude},${this.position.longitude}`;
    }
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    const client = algoliasearch(this.algoliaAppId, this.algoliaSearchKey);
    this.index = client.initIndex(this.algoliaIndex);
    setTimeout(async () => {
      this.getLocationCoords((coords) => {
        this.position = coords
          ? { latitude: `${coords.latitude}`, longitude: `${coords.longitude}` }
          : { latitude: "38.6270025", longitude: "-90.19940419999999" };
        this.resetSearchOptions();

        this.search(this.query || "", this.searchOptions)
          .then((response: any) => {
            this.searchResultPages = parseInt(response.nbPages, 10);
            this.searchResults = response.hits;
            this.resultCount = response.nbHits;
            this.location = this.searchResults?.[0];
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    }, 100);
  }

  render() {
    return (
      <ion-item-divider
        color="primary"
        sticky
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div class="location-lookup">
          <img
            height="30"
            width="30"
            class="map-marker"
            src="https://firebasestorage.googleapis.com/v0/b/ftms-ca85b.appspot.com/o/icons%2Fmap-marker.svg?alt=media&token=dda86d6e-b40c-49ce-b60c-928e4de6879d"
          />
          {!this.changingLocation && (
            <h4 class="location-city">
              {this.location?.name || "Find a Location"}
            </h4>
          )}
          {!this.changingLocation && (
            <a href="#" onClick={() => (this.changingLocation = true)}>
              Change Location
            </a>
          )}
          {this.changingLocation && [
            <fireenjin-input
              name="query"
              value={this.query}
              placeholder="Enter Zip"
            />,
            <ion-button color="secondary" onClick={() => this.changeLocation()}>
              Set
            </ion-button>,
          ]}
        </div>
        <ion-button
          class="location-phone"
          href={`tel:+${this.location?.phone || "833-424-0044"}`}
          color="success"
          shape="round"
          style={{ marginLeft: "auto", display: "table" }}
        >
          <h4 class="ion-no-margin ion-no-padding">
            Call now: {this.location?.phone || "833-424-0044"}
          </h4>
        </ion-button>
      </ion-item-divider>
    );
  }
}
