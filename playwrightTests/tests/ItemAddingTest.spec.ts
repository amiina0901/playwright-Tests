// itemAddition.test.ts
const { test } = require("@playwright/test");
import { Page } from "playwright";
import OpeningPage from "../pages/OpeningPage";
import ItemAdditionPage from "../pages/ItemAdditionPage";
import { expect } from "playwright/test";

test("Adding-item", async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const itemAdditionPage = new ItemAdditionPage(page);

  // Open the page and perform necessary steps
  await openingPage.openPage("https://www.buzzsneakers.com/");
  await openingPage.performAgreementSteps();
  await openingPage.login("amina.mujzin02@gmail.com", "Nejra310803");

  // Add item to cart
  await itemAdditionPage.hoverOnCategory("MUŠKARCI");
  await itemAdditionPage.clickOnItem("adidas Superstar");
  await itemAdditionPage.clickOnItemVariant(
    "div:nth-child(10) > .row > .item-data > .img-wrapper > a"
  );
  await itemAdditionPage.addItemToCart();

  const expectedUrl = "https://www.buzzsneakers.ba/patike/277013-adidas-patike-superstar";
  const currentUrl = page.url();
  expect(currentUrl).toBe(expectedUrl);
});