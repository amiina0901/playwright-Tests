// ProductBrowsingPage.ts
import { Page } from "playwright";

class ProductBrowsingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hoverOnCategory(categoryName: string) {
    await this.page.getByRole("link", { name: categoryName }).hover();
  }

  async clickSubCategory(subCategoryName: string) {
    await this.page.getByRole("link", { name: subCategoryName }).click();
  }

  async clickBrand() {
    await this.page.getByText('Brendovi', { exact: true }).click();
  }

  async clickReebokBrand(brandName: string) {
    await this.page.getByText(brandName).click();
  }
}

export default ProductBrowsingPage;
