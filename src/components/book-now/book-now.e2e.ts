import { newE2EPage } from "@stencil/core/testing";

describe("floodteam-book-now", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<floodteam-book-now></floodteam-book-now>");

    const element = await page.find("floodteam-book-now");
    expect(element).toHaveClass("hydrated");
  });
});
