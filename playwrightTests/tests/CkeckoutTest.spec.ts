// checkout.test.ts
const { test } = require('@playwright/test');
import { Page } from 'playwright';
import OpeningPage from '../pages/OpeningPage';
import ItemAdditionPage from '../pages/ItemAdditionPage';
import CheckOutPage from '../pages/CheckOutPage';
import { expect } from 'playwright/test';

test('Check-out', async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const itemAdditionPage = new ItemAdditionPage(page);
  const checkoutPage = new CheckOutPage(page);

  // Open the page and perform necessary steps
  await openingPage.openPage('https://www.buzzsneakers.com/');
  await openingPage.performAgreementSteps();

  // Log in
  await openingPage.login('amina.mujzin02@gmail.com', 'Nejra310803');

  // Add item to cart
  await itemAdditionPage.hoverOnCategory('MUŠKARCI');
  await itemAdditionPage.clickOnItem('adidas Superstar');
  await itemAdditionPage.clickOnItemVariant('div:nth-child(10) > .row > .item-data > .img-wrapper > a');
  await itemAdditionPage.addItemToCart();

  // Proceed to checkout
  await checkoutPage.proceedToCheckout();

  // Select gift card option
  await checkoutPage.selectGiftCardOption();

  // Enter gift card information
  await checkoutPage.enterGiftCardInfo('4566666', '1234');
  const cardInfoLocator = page.locator('input#cart_onepage_order_ticket.form-control[type="text"][inputmode="decimal"]');
  await expect(cardInfoLocator).toHaveValue(/[0-9]/);
  
});
