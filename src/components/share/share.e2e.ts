import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-share", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-share></floodteam-share>");

    const element = await page.find("floodteam-share");
    expect(element).toHaveClass("hydrated");
  });
});
