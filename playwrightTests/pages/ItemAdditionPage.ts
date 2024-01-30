// itemAdditionPage.ts
import { Page } from "playwright";

class ItemAdditionPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hoverOnCategory(categoryName: string) {
    await this.page.getByRole("link", { name: categoryName }).hover();
  }

  async clickOnItem(itemName: string) {
    await this.page.getByRole("link", { name: itemName }).click();
  }

  async clickOnItemVariant(variantSelector: string) {
    await this.page.locator(variantSelector).click();
  }

  async addItemToCart() {
    await this.page.getByRole("button", { name: " Dodaj u korpu" }).click();
    await this.page.waitForLoadState('load');
  }
}

export default ItemAdditionPage;