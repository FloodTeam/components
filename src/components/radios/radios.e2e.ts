import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-radios", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-radios></floodteam-radios>");

    const element = await page.find("floodteam-radios");
    expect(element).toHaveClass("hydrated");
  });
});
