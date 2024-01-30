// FilteringProductPage.ts
import { Page } from "playwright";

class FilteringProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async filterProducts() {
    await this.page.hover('text="MUŠKARCI"');
    await this.page.click('text="Dukserica"');
    await this.page.click('text="Brendovi"');
    await this.page.click('text="adidas (21)"');
    await this.page.waitForLoadState("load");
    await this.page.waitForTimeout(4000);
    await this.page.click('text="Cijena"');
    await this.page.click('text="- 200 KM (16)"');
    await this.page.click('text="Resetujte filtere"');
    await this.page.click('text="101 - 200 KM"');
  }
}

export default FilteringProductPage;
