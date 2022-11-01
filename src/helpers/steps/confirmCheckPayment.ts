import { Step } from "@fireenjin/components/dist/types/typings";
import formatUSD from "../formatUSD";

export default ({
  checkBack = "",
  checkFront = "",
  amount = 0,
  invoiceAmount = 0,
  name = "confirmCheckPayment",
  email = "",
  method = "",
  checkAmount = 0,
  beforeHTML = `<div class="ion-text-left">
              <h1>Confirm and Submit Payment</h1>
              <p>You will receive a receipt to confirm payment processing.</p>
              <div class="confirm-card">
                <h4>Payment Details</h4>
                <div
                  style="display: flex; gap: 0.8rem; justify-content: space-between;">
                  <span>
                    <small>Invoice Amount</small>
                    <p>${formatUSD(invoiceAmount)}</p>
                  </span>
                  <span>
                    <small>Payment Amount</small>
                    <p>${formatUSD(amount)}</p>
                  </span>
                </div>
                <span>
                  <small>Invoice Email</small>
                  <p>${email}</p>
                </span>
                <span>
                  <small>Payment Method</small>
                  <p style="text-transform: capitalize">
                    ${method}
                  </p>
                </span>
              </div>
              <div class="confirm-card">
                <h4>Check Images</h4>
                <div style="display: flex; justify-content: space-around; gap: 1.2rem;">
                  <div
                    class="check-scanner-preview check-front"
                    style="background: url(${checkFront})"
                  >
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                  <div
                    class="check-scanner-preview check-back"
                    style="background: url(${checkBack})"
                  >
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                </div>
                <h4>Check Details</h4>
                <div
                  style="display: flex; justify-content: space-between; gap: "1.2rem;"
                >
                  <span>
                    <small>Detected Check Amount</small>
                    <p>${formatUSD(checkAmount)}</p>
                  </span>
                </div>
              </div>
            </div>`,
} = {}) =>
  ({
    name,
    beforeHTML,
  } as Step);
