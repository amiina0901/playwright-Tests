// registration.test.ts
const { test, expect } = require('@playwright/test');
import { Page } from 'playwright';
import OpeningPage from '../pages/OpeningPage.js';
import RegistrationPage from '../pages/RegistrationPage.js';

test('Registration', async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const registrationPage = new RegistrationPage(page);

  await openingPage.openPage('https://www.buzzsneakers.com/');
  await openingPage.performAgreementSteps();
  await openingPage.clickOnRegisterLink();

  await registrationPage.inputFirstName('Amina');
  await registrationPage.inputLastName('Mujezinovic');
  await registrationPage.inputEmail('aminamujezinovic@gmail.com');
  await registrationPage.inputPhone('056312453');
  await registrationPage.inputCity('Sarajevo');
  await registrationPage.inputStreet('Paromlinska');
  await registrationPage.inputStreetNumber('55');
  await registrationPage.inputPostalCode('71000');
await registrationPage.inputPassword('123123');
await registrationPage.inputConfirmPassword('123123');
await registrationPage.selectGender();
await registrationPage.agreeToTerms();
await registrationPage.clickRegisterButton();

const successMessage = await page.waitForSelector('.success-message');
expect(successMessage).toBeTruthy();

const dashboardUrl = await page.url();
expect(dashboardUrl).toContain('/dashboard');
});
