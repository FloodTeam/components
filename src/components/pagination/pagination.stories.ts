import { html } from "lit-html";
import markdown from "./readme.md";
import {
  eventHandles,
  action,
} from "../../../.storybook/helpers/custom-action";

const costumEvents = ["clicked"];
const events = ["ionInfinite", "floodteamFetch", ...eventHandles(costumEvents)];

const args = {
  limit: 24,
  endpoint: "listUsers",
  display: "list",
};
// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  limit: {
    description: "The number of results per set",
  },
  endpoint: {
    description: "The endpoint ",
  },
  display: {
    description: "The display mode list or grid to use",
    control: {
      type: "select",
      options: ["list", "grid"],
    },
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: "Components/Pagination",
  component: "floodteam-pagination",
  parameters: {
    notes: { markdown },
    actions: {
      handles: events,
    },
  },
};

const Template = ({ display, endpoint, limit }) => html`
  <ion-content>
    <floodteam-pagination
      display="${display}"
      endpoint="${endpoint}"
      limit="${limit}"
    >
    </floodteam-pagination>
  </ion-content>
  ${action("floodteam-pagination", costumEvents)}
`;

export const Default = Template.bind({});
Default.args = { ...args };
Default.argTypes = { ...argTypes };