import { SignaturePad } from "./signature-pad";

describe("signature-pad", () => {
  it("should build SignaturePad", () => {
    expect(new SignaturePad()).toBeTruthy();
  });
});
