// CheckOutPage.ts
import { Page } from 'playwright';

class CheckOutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

   async proceedToCheckout() {
    await this.page.locator('a[title="Korpa"]').first().click();
    await this.page.waitForLoadState('load');
    // const linkHref = 'https://www.buzzsneakers.ba/kupovina';
    // await this.page.locator(`a[href="${linkHref}"]`).click();
    // await this.page.waitForLoadState('networkidle');
   }

  async selectGiftCardOption() {
    await this.page.locator('div.delivery-option-name:has-text("GIFT KARTICA")').click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterGiftCardInfo(cardNumber: string, securityCode: string) {
    await this.page.locator('input#cart_onepage_order_ticket.form-control[type="text"][inputmode="decimal"]').fill(cardNumber);
    await this.page.getByLabel('Sigurnosni kod:').fill(securityCode);
  }
}

export default CheckOutPage;
