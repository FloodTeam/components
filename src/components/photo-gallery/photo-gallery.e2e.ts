import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-photo-gallery", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-photo-gallery></floodteam-photo-gallery>");

    const element = await page.find("floodteam-photo-gallery");
    expect(element).toHaveClass("hydrated");
  });
});
