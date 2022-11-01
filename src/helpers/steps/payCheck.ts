import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  name = "payCheck",
  amount = 0,
  beforeHTML = `<h1>Upload front and back images of your check</h1><floodteam-pay-check amount="${amount}"></floodteam-pay-check>`,
} = {}) =>
  ({
    name,
    beforeHTML,
  } as Step);
