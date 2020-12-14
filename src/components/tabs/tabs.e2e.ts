import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-tabs", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-tabs></floodteam-tabs>");

    const element = await page.find("floodteam-tabs");
    expect(element).toHaveClass("hydrated");
  });
});
