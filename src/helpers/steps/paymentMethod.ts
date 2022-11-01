import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  name = "paymentMethod",
  beforeHTML = "<h1>What is the method of payment?</h1>",
  value = null,
  placeholder = "Select a Payment Method",
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        label: "Payment Method",
        labelPosition: "stacked",
        name: "method",
        type: "select",
        value,
        placeholder,
        options: [
          {
            label: "Card",
            value: "card",
          },
          {
            label: "Check",
            value: "check",
          },
        ],
      },
    ],
  } as Step);
