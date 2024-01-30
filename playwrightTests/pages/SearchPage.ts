// SearchPage.ts
import { Page } from "playwright";

class SearchPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async performSearch(query: string) {
    await this.page.click('text="Pretraži sajt"');
    await this.page.fill('input[placeholder="Pretraži sajt"]', query);
    await this.page.press('input[placeholder="Pretraži sajt"]', "Enter");
  }
}

export default SearchPage;
