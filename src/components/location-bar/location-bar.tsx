import { Geolocation } from "@ionic-native/geolocation";
import {
  Component,
  ComponentInterface,
  Prop,
  h,
  Build,
  State,
} from "@stencil/core";
import algoliasearch from "algoliasearch/lite";

@Component({
  tag: "floodteam-location-bar",
  styleUrl: "location-bar.css",
})
export class LocationBar implements ComponentInterface {
  @Prop({ mutable: true }) query: string;
  @Prop() algoliaAppId = "ZKFP93O6EH";
  @Prop() algoliaSearchKey = "cef2b52143823594c9c5af78ad86bcf0";
  @Prop() algoliaIndex = "locations";

  @State() position: any;
  @State() endOfSearch = false;
  @State() searchOptions: any;
  @State() searchResults: any[] = [];
  @State() resultCount = 0;
  @State() searchResultPages = 0;
  @State() changingLocation = false;

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

  search(query, options) {
    const client = algoliasearch(this.algoliaAppId, this.algoliaSearchKey);
    const index = client.initIndex(this.algoliaIndex);

    return index.search(query, {
      ...options,
      facetFilters: [["isSearchable:true"]],
    });
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
            .then((response: any) => {
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
    return (
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="12" sizeLg="6">
            <ion-icon name="navigate" class="ft-icon-style" />
            {!this.changingLocation && <h4 class="location-city">O’Fallon</h4>}
            {!this.changingLocation && (
              <a href="#" onClick={() => (this.changingLocation = true)}>
                Change Location
              </a>
            )}
            {this.changingLocation && (
              <fireenjin-form hideControls>
                <fireenjin-input
                  name="query"
                  value={this.query}
                  placeholder="Enter Zip"
                />
                <ion-button
                  onClick={() => (this.changingLocation = false)}
                >
                  Set
                </ion-button>
              </fireenjin-form>
            )}
          </ion-col>
          <ion-col size="12" sizeLg="6">
            <h4>
              Call now:{" "}
              <a href="tel:+13143103064" class="location-phone">
                314-310-3064
              </a>
            </h4>
          </ion-col>
        </ion-row>
      </ion-grid>
    );
  }
}
