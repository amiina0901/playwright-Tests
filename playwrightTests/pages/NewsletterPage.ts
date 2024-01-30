import { Page } from 'playwright';
import { expect } from '@playwright/test';

class NewsletterPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async subscribe(email: string) {
    const subscribeButton = await this.page.getByRole('button', { name: 'Newsletter prijava' });
    await subscribeButton.click();
    const emailInput = await this.page.getByPlaceholder('Unesite email');
    await emailInput.fill(email);
    await subscribeButton.click();
    const successMessage = await this.page.getByText('Već ste se prijavili na našu',);
    await expect(successMessage).toBeVisible();
  }
}

export default NewsletterPage;
