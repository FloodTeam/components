import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  name = "receiptEmail",
  beforeHTML = "<h1>Where can we send an invoice receipt to?</h1>",
  value = null,
  placeholder = "Enter an Email Address",
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        label: "Receipt Email Address",
        labelPosition: "stacked",
        name: "email",
        clearInput: true,
        placeholder,
        value,
      },
    ],
  } as Step);
