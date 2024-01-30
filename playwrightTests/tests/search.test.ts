// search.test.ts
const { test } = require("@playwright/test");
import { Page } from "playwright";
import OpeningPage from "../pages/OpeningPage";
import SearchPage from "../pages/SearchPage";
import { expect } from "playwright/test";

test("Search", async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const searchPage = new SearchPage(page);

  // Open the page and perform necessary steps
  await openingPage.openPage("https://www.buzzsneakers.com/");
  await openingPage.performAgreementSteps();

  // Perform search
  const searchQuery = "Nike";
  await searchPage.performSearch(searchQuery);
  const searchQuery2 = "adudas";
  await searchPage.performSearch(searchQuery2);

   const expectedUrl = "https://www.buzzsneakers.ba/proizvodi?search=adudas";
   const currentUrl = page.url();
   expect(currentUrl).toBe(expectedUrl);
});
