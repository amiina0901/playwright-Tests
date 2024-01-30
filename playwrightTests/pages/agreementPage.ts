// agreementPage.ts
import { Page } from 'playwright';

class AgreementPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//   async closeOnloadModal() {
//     await this.page.locator('#onload_modal').getByText('×').click();
//   }

  async acceptTerms() {
    await this.page.locator('button').filter({ hasText: 'Slažem se' }).click();
  }
}

export default AgreementPage;
