const { test } = require('@playwright/test');
import { Page } from 'playwright';
import OpeningPage from '../pages/OpeningPage';
import NewsletterPage from '../pages/NewsletterPage';

test('Newsletter Subscription', async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  await openingPage.openPage('https://www.buzzsneakers.com/');
  await openingPage.performAgreementSteps();

  const newsletterPage = new NewsletterPage(page);
  await newsletterPage.subscribe('aminaaajla@gmail.com');
});
