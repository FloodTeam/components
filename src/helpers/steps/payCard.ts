import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  name = "payCard",
  beforeHTML = `<h1>Please enter card details for payment processing.</h1><floodteam-pay-card></floodteam-pay-card>`,
} = {}) =>
  ({
    name,
    beforeHTML,
  } as Step);
