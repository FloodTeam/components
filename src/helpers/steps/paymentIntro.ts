import { Step } from "@fireenjin/components/dist/types/typings";

export default ({
  name = "paymentIntro",
  beforeHTML = `<h1>Ready to make a payment?</h1><p style="padding: 2rem; max-width: 400px; color: var(--ion-color-light-shade);">We make payments easy. Pay with a check or credit card on our secure server.</p>`,
} = {}) =>
  ({
    name,
    beforeHTML,
  } as Step);
