// accountSettings.test.ts
const { test, expect } = require("@playwright/test");
import { Page } from "playwright";
import OpeningPage from "../pages/OpeningPage";
import AccountSettingsPage from "../pages/accountSettingsPage";

test("Account-settings", async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const accountSettingsPage = new AccountSettingsPage(page);

  await openingPage.openPage("https://www.buzzsneakers.com/");
  await openingPage.performAgreementSteps();
  await openingPage.login("amina.mujzin02@gmail.com", "Nejra310803");

  await accountSettingsPage.navigateToProfile();
  await accountSettingsPage.navigateToProfileEdit();

  await accountSettingsPage.updateProfileAddress("Teheranski Trg", "8");

  // Update the assertion to check for the success message
  await page.waitForSelector('div.alert-success');
  const successMessageHandles = await page.locator('div.alert-success').all();

  // Iterate through the handles to find the visible element and extract its text
  let successMessage;
  for (const handle of successMessageHandles) {
    const isVisible = await handle.isVisible();
    if (isVisible) {
      successMessage = await handle.innerText();
      break;
    }
  }

expect(successMessage).toContain('Uspješno ste izmijenili svoje');

});
