import { OrganismPresets } from "@madnesslabs/fireenjin-designer/dist/types/interfaces";

export default {
  default: {
    name: "Default",
    props: {
      src: "https://madnesslabs.net/img/logo.png",
      size: "100px",
    },
  },
  wee: {
    props: {
      size: "100px",
      initials: "ML",
    },
  },
} as OrganismPresets;
