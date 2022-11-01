import { Step } from "@fireenjin/components/dist/types/typings";
import getLocationOptions from "../getLocationOptions";

export default ({
  name = "selectLocation",
  locationId = null,
  location = null,
  beforeHTML = `<h1>It looks like the closest Flood Team location is in ${
    location?.name || "St. Louis"
  }.</h1> <h2>Would you like to select a different location?</h2>`,
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        name: "location",
        type: "select",
        value: locationId,
        placeholder: "Select a location",
        interfaceOptions: {
          header: "Flood Team Locations",
          message: "select one",
        },
        options: getLocationOptions(),
      },
    ],
  } as Step);
