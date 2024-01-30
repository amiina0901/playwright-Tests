import { Page } from 'playwright';

class BuzzCrewPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToNews() {
    await this.page.getByRole('link', { name: 'News' }).nth(1).click();
  }

  async navigateToBuzzGiftCard() {
    await this.page.getByRole('link', { name: 'BONUS UZ BUZZ GIFT CARD –' }).first().click();
  }
}

export default BuzzCrewPage;
