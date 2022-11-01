import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  beforeHTML = "<h1>What is the best phone number to use?</h1>",
  value = null,
  name = "contactInformation",
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        autocomplete: "off",
        label: " Contact Number",
        labelPosition: "stacked",
        placeholder: "xxx-xxx-xxxx",
        name: "phone",
        type: "phone",
        clearInput: true,
        value,
        required: true,
      },
      // {
      //   label: "Email",
      //   labelPosition: "stacked",
      //   placeholder: "example@email.com",
      //   name: "email",
      //   type: "text",
      //   clearInput: true,
      //   required: true,
      //   value,
      // },
    ],
  } as Step);
