import { Step } from "@fireenjin/components/dist/types/typings";
import formatUSD from "../formatUSD";

export default ({
  amount = 0,
  email = "",
  last4 = "",
  expirationMonth = "",
  expirationYear = "",
  cvv = "",
  name = "confirmCardPayment",
  beforeHTML = `<div class="ion-text-left">
  <h1>Confirm Payment Details</h1>
  <p>You will receive a receipt to confirm payment processing.</p>
  <div class="confirm-card">
    <span>
      <small>Invoice Amount</small>
      <p>${formatUSD(amount)}</p>
    </span>   
    <span>
      <small>Invoice Email</small>
      <p>${email}</p>
    </span>
    <span>
      <small>Card Number</small>
      <p>*** *** *** ${last4}</p>
    </span>
    <div style="display:flex; gap: 1rem; justify-content: space-between;">
      <span>
        <small>Expiration Date</small>
        <p>${expirationMonth}/${expirationYear}</p>
      </span>
      <span>
        <small>CVV</small>
        <p>${cvv}</p>
      </span>
    </div>
  </div>
</div>`,
} = {}) =>
  ({
    name,
    beforeHTML,
  } as Step);
