// profile.test.ts
const { test } = require("@playwright/test");
import { Page } from "playwright";
import OpeningPage from "../pages/OpeningPage";
import AgreementPage from "../pages/agreementPage";
import ProfilePage from "../pages/profilePage";
import { expect } from "playwright/test";

test("Country-change", async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const agreementPage = new AgreementPage(page);
  const profilePage = new ProfilePage(page);

  await openingPage.openPage("https://www.buzzsneakers.com/");
  await openingPage.performAgreementSteps();
  await openingPage.login("amina.mujzin02@gmail.com", "Nejra310803");

  await profilePage.navigateToProfile();
  await profilePage.navigateToProfileEdit();

  await profilePage.hoverOverChangeButton();
  await profilePage.changeCountryToBuzzBugarska();

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.keyboard.press("Enter");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Enter");

 // await page.waitForLoadState('networkidle'); 

  const expectedUrl = "https://www.buzzsneakers.bg/";
  const currentUrl = page.url();
  expect(currentUrl).toBe(expectedUrl);
});
