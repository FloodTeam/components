import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  name = "serviceType",
  beforeHTML = "<h1>What type of service are you contacting us about?</h1>",
} = {}) =>
  ({
    name,
    beforeHTML,
    fields: [
      {
        name: "serviceTypes",
        required: true,
        type: "checklist",
        options: [
          {
            label: "Water Clean-up & dry",
            value: "water",
          },
          {
            label: "Mold Remediation",
            value: "mold",
          },
          {
            label: "Box Out / Contents",
            value: "content",
          },
          {
            label: "Reconstruction",
            value: "reconstruction",
          },
          {
            label: "Drain Cleaning",
            value: "drain",
          },
        ],
      },
    ],
  } as Step);
