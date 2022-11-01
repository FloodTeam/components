import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  beforeHTML = "<h1>Who is the main contact at the service address?</h1>",
  label = "Full Name",
  value = null,
  name = "customerName",
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        label,
        labelPosition: "stacked",
        placeholder: "First and last name",
        name: "customer",
        type: "text",
        clearInput: true,
        required: true,
        value,
      },
    ],
  } as Step);
