import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-toggle", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-toggle></floodteam-toggle>");

    const element = await page.find("floodteam-toggle");
    expect(element).toHaveClass("hydrated");
  });
});
