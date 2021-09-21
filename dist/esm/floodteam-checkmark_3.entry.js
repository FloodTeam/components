import { r as registerInstance, h, H as Host, c as createEvent, a as getElement } from './index-2bcfd230.js';

const checkmarkCss = "@keyframes fadeRoll{0%{transform:rotate(30deg) translateY(50px) scale(0.6);opacity:0}80%{transform:rotate(-15deg) translateY(-10px) scale(1);opacity:1}100%{transform:rotate(0deg) translateY(0) scale(1);opacity:1}}.checkmark-wrapper{display:block;margin:0 auto;width:var(\r\n    --floodteam-checkmark-width,\r\n    var(--floodteam-checkmark-size, 150px)\r\n  );height:var(\r\n    --floodteam-checkmark-height,\r\n    var(--floodteam-checkmark-size, 150px)\r\n  );max-width:var(--floodteam-checkmark-max-width, 800px);min-height:var(\r\n    --floodteam-checkmark-min-height,\r\n    var(--floodteam-checkmark-size, 150px)\r\n  )}ion-icon{display:block;height:var(--floodteam-checkmark-size, 150px);width:var(--floodteam-checkmark-size, 150px);color:var(--ion-color-success, #000000);display:block;margin:0 auto;opacity:0}.animate ion-icon{animation:fadeRoll 2s;animation-iteration-count:1;animation-fill-mode:forwards}";

const Checkmark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The size of the thumb
         */
        this.size = "150px";
        /**
         * Start the animation
         */
        this.animating = false;
    }
    render() {
        return (h(Host, { style: {
                "--floodteam-checkmark-size": this.size,
            } }, h("div", { class: {
                "checkmark-wrapper": true,
                animate: this.animating,
            } }, h("ion-icon", { name: "checkmark-circle" }))));
    }
};
Checkmark.style = checkmarkCss;

const inputAddressCss = "floodteam-input-address ion-label{font-size:12px;font-weight:bold;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0}floodteam-input-address .invalid .input-wrapper{border-bottom-color:var(--theme-red) !important}floodteam-input-address .invalid .label{color:var(--theme-red) !important}floodteam-input-address ion-item{position:relative;border-bottom:none !important;box-shadow:none !important}floodteam-input-address ion-item.is-hidden{display:none}floodteam-input-address ion-item ion-label{color:var(--theme-dark-grey) !important}floodteam-input-address ion-item ion-input{border:none;box-shadow:none !important;outline:none !important;font-size:16px;font-weight:normal !important}floodteam-input-address ion-item.item-has-focus{--border-width:0;border-color:var(--theme-blue)}floodteam-input-address ion-item.item-has-focus ion-label{color:var(--theme-blue) !important}floodteam-input-address ion-input.autocomplete-field{--padding-top:13px !important}floodteam-input-address ion-button{text-decoration:none;position:absolute;right:0px;top:3px;z-index:3}floodteam-input-address ion-button .button-inner{font-size:14px;color:var(--theme-blue);padding-right:25px}floodteam-input-address ion-button ion-icon{position:absolute;top:6px;right:10px;color:var(--theme-blue)}floodteam-input-address .manual-fields{width:100%;padding-top:5px}floodteam-input-address .manual-fields ion-input{--padding-top:8px;--padding-bottom:8px;--padding-start:17px}floodteam-input-address .manual-fields ion-grid floodbot-state-autocomplete,floodteam-input-address .manual-fields ion-grid ion-input{display:block;min-width:150px}floodteam-input-address .autocomplete-field{display:block;padding-top:8px}floodteam-input-address .manual-fields ion-grid,floodteam-input-address .manual-fields ion-grid ion-row ion-col{padding-bottom:0 !important;padding-top:0 !important}floodteam-input-address .manual-fields ion-input:not(.zip-input){border-bottom:1px solid var(--theme-grey-light, #eee) !important}";

const InputAddress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionInput = createEvent(this, "ionInput", 7);
        this.floodteamAddressMode = createEvent(this, "floodteamAddressMode", 7);
        this.floodteamUpdateAutoHeight = createEvent(this, "floodteamUpdateAutoHeight", 7);
        /**
         * The value of the input field
         */
        this.value = {};
        this.manualEntry = false;
    }
    onChange() {
        if (this.manualEntry) {
            setTimeout(() => {
                const fullAddress = `${this.streetInputEl.value},${this.unitInputEl.value ? ` ${this.unitInputEl.value},` : ""} ${this.cityInputEl.value}, ${this.stateSelectEl.querySelector("ion-select").value} ${this.zipInputEl.value}`;
                this.autocompleteFieldEl.value = fullAddress;
                this.value.full = fullAddress;
                this.ionInput.emit({
                    name: this.name,
                    value: this.value,
                });
            }, 100);
        }
    }
    injectScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.async = true;
            script.src = src;
            script.addEventListener("load", resolve);
            script.addEventListener("error", () => reject("Error loading script."));
            script.addEventListener("abort", () => reject("Script loading aborted."));
            document.head.appendChild(script);
        });
    }
    async componentWillLoad() {
        var _a;
        {
            try {
                if (this.googleMapsKey && !((_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps)) {
                    await this.injectScript(`https://maps.googleapis.com/maps/api/js?key=${this.googleMapsKey}&libraries=places`);
                }
            }
            catch (e) {
                console.log("Error injecting Google Maps");
            }
        }
    }
    async componentDidLoad() {
        {
            const inputEl = await this.autocompleteFieldEl.getInputElement();
            setTimeout(() => {
                inputEl.setAttribute("autocomplete", "new-password");
            }, 200);
            const autocomplete = new google.maps.places.Autocomplete(inputEl, {
                types: ["address"],
            });
            google.maps.event.addListener(autocomplete, "place_changed", () => {
                var _a, _b, _c, _d, _e, _f, _g;
                this.place = autocomplete.getPlace();
                if (!this.value) {
                    this.value = {};
                }
                this.value.full = this.place.formatted_address;
                let streetAddress = "";
                this.value.placeId = (_a = this.place) === null || _a === void 0 ? void 0 : _a.place_id;
                this.value.lat = (_d = (_c = (_b = this.place) === null || _b === void 0 ? void 0 : _b.geometry) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.lat();
                this.value.lng = (_g = (_f = (_e = this.place) === null || _e === void 0 ? void 0 : _e.geometry) === null || _f === void 0 ? void 0 : _f.location) === null || _g === void 0 ? void 0 : _g.lng();
                this.place.address_components.map((field, index) => {
                    if (field.types.indexOf("street_number") !== -1) {
                        streetAddress = field.long_name;
                    }
                    if (field.types.indexOf("route") !== -1) {
                        streetAddress = streetAddress + " " + field.long_name;
                    }
                    if (field.types.indexOf("locality") !== -1) {
                        this.value.city = field.long_name;
                    }
                    if (field.types.indexOf("postal_code") !== -1) {
                        this.value.zip = field.short_name;
                    }
                    if (field.types.indexOf("administrative_area_level_1") !== -1) {
                        this.value.state = field.short_name;
                    }
                    if (this.place.address_components.length === index + 1) {
                        this.value.street = streetAddress;
                    }
                    if (index === this.place.address_components.length - 1) {
                        setTimeout(() => {
                            this.ionInput.emit({
                                name: this.name,
                                value: this.value,
                            });
                        }, 10);
                    }
                });
            });
        }
    }
    toggleManualEntry() {
        this.manualEntry = !this.manualEntry;
        if (this.manualEntry) {
            this.value = {
                city: this.cityInputEl.value,
                country: "US",
                full: this.autocompleteFieldEl.value,
                state: this.stateSelectEl.value,
                street: this.streetInputEl.value,
                unit: this.unitInputEl.value,
                zip: this.zipInputEl.value,
            };
        }
        this.floodteamAddressMode.emit({ maual: this.manualEntry });
        this.floodteamUpdateAutoHeight.emit();
        setTimeout(() => {
            this.addressAutocompleteEl.forceUpdate();
        }, 0);
    }
    render() {
        const value = this.value ? this.value : {};
        return [
            h("ion-item", { class: { "is-hidden": !this.manualEntry } }, h("ion-label", { position: "stacked" }, this.label), h("div", { class: "manual-fields" }, h("ion-input", { ref: (el) => (this.streetInputEl = el), type: "text", name: this.name + ".street", placeholder: "Street Address", value: value.street, required: this.required && this.manualEntry }), h("ion-input", { ref: (el) => (this.unitInputEl = el), type: "text", name: this.name + ".unit", placeholder: "Street Address 2", value: value.unit }), h("ion-input", { ref: (el) => (this.cityInputEl = el), type: "text", name: this.name + ".city", placeholder: "City", value: value.city, required: this.required && this.manualEntry }), h("ion-grid", null, h("ion-row", null, h("ion-col", { size: "6" }, h("floodteam-input-state", { ref: (el) => (this.stateSelectEl = el), name: this.name + ".state", value: value.state, placeholder: "State" })), h("ion-col", { size: "6" }, h("ion-input", { ref: (el) => (this.zipInputEl = el), class: "zip-input", type: "tel", name: this.name + ".zip", min: "0", max: "999999", value: value.zip, placeholder: "Zip Code", required: this.required && this.manualEntry }))))), h("ion-button", { fill: "clear", color: "primary", onClick: () => this.toggleManualEntry(), slot: "end" }, h("span", { class: "button-inner" }, "Search", h("ion-icon", { name: "search" })))),
            h("ion-item", { class: { "is-hidden": this.manualEntry } }, h("ion-label", { position: "stacked" }, this.label), h("ion-input", { ref: (el) => (this.autocompleteFieldEl = el), class: "autocomplete-field", type: "text", placeholder: this.placeholder, value: value.full, autocomplete: "off", required: this.required && !this.manualEntry }), h("ion-button", { fill: "clear", color: "primary", onClick: () => this.toggleManualEntry(), slot: "end" }, h("span", { class: "button-inner" }, "Manual", h("ion-icon", { name: "create" })))),
        ];
    }
    get addressAutocompleteEl() { return getElement(this); }
};
InputAddress.style = inputAddressCss;

const inputStateCss = "floodteam-input-state ion-select{color:var(--theme-dark);font-family:var(--theme-font-primary);--padding-start:0;max-width:auto}";

const InputState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stateList = {
            AK: "Alaska",
            AL: "Alabama",
            AR: "Arkansas",
            AS: "American Samoa",
            AZ: "Arizona",
            CA: "California",
            CO: "Colorado",
            CT: "Connecticut",
            DC: "District of Columbia",
            DE: "Delaware",
            FL: "Florida",
            GA: "Georgia",
            GU: "Guam",
            HI: "Hawaii",
            IA: "Iowa",
            ID: "Idaho",
            IL: "Illinois",
            IN: "Indiana",
            KS: "Kansas",
            KY: "Kentucky",
            LA: "Louisiana",
            MA: "Massachusetts",
            MD: "Maryland",
            ME: "Maine",
            MI: "Michigan",
            MN: "Minnesota",
            MO: "Missouri",
            MS: "Mississippi",
            MT: "Montana",
            NC: "North Carolina",
            ND: " North Dakota",
            NE: "Nebraska",
            NH: "New Hampshire",
            NJ: "New Jersey",
            NM: "New Mexico",
            NV: "Nevada",
            NY: "New York",
            OH: "Ohio",
            OK: "Oklahoma",
            OR: "Oregon",
            PA: "Pennsylvania",
            PR: "Puerto Rico",
            RI: "Rhode Island",
            SC: "South Carolina",
            SD: "South Dakota",
            TN: "Tennessee",
            TX: "Texas",
            UT: "Utah",
            VA: "Virginia",
            VI: "Virgin Islands",
            VT: "Vermont",
            WA: "Washington",
            WI: "Wisconsin",
            WV: "West Virginia",
            WY: "Wyoming"
        };
    }
    componentDidLoad() {
        {
            const ionSelectEl = this.stateAutocompleteEl.querySelector("ion-select");
            ionSelectEl.interfaceOptions = { header: "State" };
        }
    }
    render() {
        return (h("ion-select", { color: "primary", name: this.name, value: this.value, "ok-text": "Select", "cancel-text": "Cancel", placeholder: this.placeholder }, Object.keys(this.stateList).map(abbrev => (h("ion-select-option", { value: abbrev }, this.stateList[abbrev])))));
    }
    get stateAutocompleteEl() { return getElement(this); }
};
InputState.style = inputStateCss;

export { Checkmark as floodteam_checkmark, InputAddress as floodteam_input_address, InputState as floodteam_input_state };
