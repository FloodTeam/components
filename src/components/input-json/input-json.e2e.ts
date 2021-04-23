import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-input-json", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-input-json></floodteam-input-json>");

    const element = await page.find("floodteam-input-json");
    expect(element).toHaveClass("hydrated");
  });
});
