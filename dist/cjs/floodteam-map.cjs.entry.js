'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c3aefc5.js');
const index$1 = require('./index-17620c37.js');

const mapCss = "floodteam-map{position:relative;display:block}floodteam-map #map{display:block;height:0px;width:100%;margin:0 auto;opacity:0;transition:all ease 0.5s}floodteam-map.map-is-visible #map{height:var(--map-height, 300px);opacity:1}floodteam-map.map-is-visible tmg-search{margin:-35px auto 0}";

const Map = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.floodteamMapMarkerClick = index.createEvent(this, "floodteamMapMarkerClick", 7);
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
            index$1.Geolocation.getCurrentPosition()
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
        {
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
        return (index.h(index.Host, { class: { "map-is-visible": this.isVisible } }, index.h("div", { id: "map" })));
    }
    get mapEl() { return index.getElement(this); }
};
Map.style = mapCss;

exports.floodteam_map = Map;
