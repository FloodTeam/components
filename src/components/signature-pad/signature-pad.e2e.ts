import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-signature-pad", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-signature-pad></floodteam-signature-pad>");

    const element = await page.find("floodteam-signature-pad");
    expect(element).toHaveClass("hydrated");
  });
});
