import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  beforeHTML = "<h1>What is the total invoice amount on the invoice?</h1>",
  label = "Invoice Amount",
  name = "invoiceAmount",
  value = null,
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        label,
        labelPosition: "stacked",
        inputMode: "decimal",
        placeholder: "0",
        required: true,
        name: "amount",
        type: "number",
        value,
      },
    ],
  } as Step);
