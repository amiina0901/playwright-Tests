const { test } = require("@playwright/test");
import { Page } from "playwright";
import OpeningPage from "../pages/OpeningPage";
import FavoriteProductPage from "../pages/favoriteProductPage";
import { expect } from "playwright/test";

test("Favorite Product", async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const favoriteProductPage = new FavoriteProductPage(page);

  await openingPage.openPage("https://www.buzzsneakers.com/");
  await openingPage.performAgreementSteps();
  await openingPage.login("amina.mujzin02@gmail.com", "Nejra310803");

  await page.getByRole("link", { name: "MUŠKARCI" }).hover();
  await page.getByRole("link", { name: "Nike Air Max", exact: true }).click();
  await page.locator(".img-wrapper > a").first().click();
  await favoriteProductPage.markProductAsFavorite();

  await favoriteProductPage.navigateToFavoriteProducts();
  await favoriteProductPage.removeProductFromFavorites();
  const expectedUrl =
  "https://www.buzzsneakers.ba/omiljeno/product";
const currentUrl = page.url();
expect(currentUrl).toBe(expectedUrl);
  
});
