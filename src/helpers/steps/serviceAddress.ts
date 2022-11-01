import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  name = "serviceAddress",
  beforeHTML = "<h1>What is the service address?</h1>",
  label = "Address",
  value = null,
  googleMapsKey = null,
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        googleMapsKey,
        label,
        labelPosition: "stacked",
        name: "address",
        type: "address",
        required: true,
        clearInput: true,
        value,
      },
    ],
  } as Step);
