import { html } from "lit-html";
import markdown from "./readme.md";
import {
  eventHandles,
  action,
} from "../../../.storybook/helpers/custom-action";

const customEvents = ["floodteamClick"];
const events = ["mouseover", "click", ...eventHandles(customEvents)];

const args = {
  active: false,
  href: "https://madnesslabs.net",
  buttonProps: {
    color: "success",
  },
  buttonText: "Visit Lab",
  photo: "https://madnesslabs.net/img/logo.png",
};
// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  active: {
    control: {
      type: "boolean",
    },
  },
  photo: {
    description: "A photo to display on the card",
    control: {
      type: "text",
    },
  },
  href: {
    description: "The link to link the button to",
    control: {
      type: "text",
    },
  },
  buttonProps: {
    description: "The first name",
    control: {
      type: "object",
    },
  },
  buttontext: {
    description: "The text to display in the button",
    control: {
      type: "text",
    },
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: "Components/Snapshot Card",
  component: "floodteam-snapshot-card",
  parameters: {
    notes: { markdown },
    actions: {
      handles: events,
    },
  },
};

const Template = ({ active, buttonText, buttonProps, photo, href }) => html`
  <floodteam-snapshot-card
    href="${href}"
    active="${active}"
    button-text="${buttonText}"
    button-props="${buttonProps}"
    photo="${photo}"
  >
    <p>wee</p>
  </floodteam-snapshot-card>
  ${action("floodteam-snapshot-card", customEvents)}
`;

export const Default = Template.bind({});
Default.args = { ...args };
Default.argTypes = { ...argTypes };

// export const Modified = Template.bind({});
// Modified.args = { ...args, modifier: "modified" };
// Modified.argTypes = { ...argTypes };
