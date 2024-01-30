import { Page } from "playwright";

class FavoriteProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async markProductAsFavorite() {
    await this.page.getByText('Sačuvaj').click();
    await this.page.waitForLoadState("load");
    await this.page.waitForTimeout(4000);
  }

  async navigateToFavoriteProducts() {
    const linkHref = "https://www.buzzsneakers.ba/omiljeno/product";
    await this.page.locator(`a[href="${linkHref}"]`).click();
  }

  async removeProductFromFavorites() {
    await this.page
      .locator(
        "div:nth-child(2) > div > .product-info-wrapper > .caption-icon > .icon-heart-f"
      )
      .click();
    await this.page.getByRole("button", { name: "OK" }).click();
  }
}

export default FavoriteProductPage;
