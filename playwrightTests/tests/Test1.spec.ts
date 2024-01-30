import { test, expect, Page } from "@playwright/test";
import { link } from "fs";

async function OpeningPage(page: Page) {
  await page.goto("https://www.buzzsneakers.com/");
  await page.waitForLoadState("networkidle");
  await expect(page.url()).toContain("sneakers");
  await page.getByTitle("Bosnian/Croatian/Serbian").click();
 // await page.locator("#onload_modal").getByText("×").click();
  await page .locator('button').filter({ hasText: 'Slažem se' }).click();
}
test("Registration", async ({ page }) => {
  await OpeningPage(page);
  await page.getByRole("link", { name: "Registrujte se" }).click();
  await page.locator('input[placeholder="Ime"]').first().fill("Amina");
  await page.locator('input[placeholder="Prezime"]').fill("Mujezinovic");
  await page
    .getByRole("textbox", { name: "Email:" })
    .fill("aminamujezinovic@gmail.com");
  await page.locator('input[placeholder="Telefon"]').fill("056312453");
  await page.getByLabel("Grad:").fill("Sarajevo");
  await page.getByPlaceholder("Ulica").fill("Paromlinska");
  await page.getByPlaceholder("Broj ulice").fill("55");
  await page.getByPlaceholder("Unesite poštanski broj").fill("71000");
  await page.getByRole("textbox", { name: "Lozinka: " }).fill("123123");
  await page.getByPlaceholder("Ponovite lozinku").fill("123123");
  await page.locator('label[for="reg_gender_2"]').click();
  await page.locator(".icheckbox_flat").first().click();
  await page.waitForTimeout(7000);
  await page.getByRole("button", { name: "Registracija" }).click();
});

async function login(page: Page) {
  await OpeningPage(page);
  await page.getByRole("link", { name: "Prijavi se" }).click();
  await page
    .getByRole("textbox", { name: "Email:" })
    .fill("amina.mujzin02@gmail.com");
  await page.getByRole("textbox", { name: "Lozinka:" }).fill("Nejra310803");
  await page.getByRole("button", { name: "Prijava", exact: true }).click();
}

test("Login", async ({ page }) => {
  await login(page);
});

test("Log out", async ({ page }) => {
  await login(page);
  await page.getByRole("link", { name: "Odjava" }).click();
});

test("Newsletter", async ({page}) => {
  await OpeningPage(page);
  await page .getByRole('button', { name: 'Newsletter prijava' }).click();
 await page .getByPlaceholder('Unesite email').fill("aminaaajla@gmail.com");
 await page .getByRole('button', { name: 'Newsletter prijava' }).click();
  
})


test("Product-browsing", async ({ page }) => {
  await OpeningPage(page);
  await page.getByRole("link", { name: "MUŠKARCI" }).hover();
  await page.getByRole("link", { name: "OBUĆA OBUĆA" }).click();
  await page.getByText("Brendovi", { exact: true }).click();
  await page .getByText('Reebok (13)').click();

});
test("Gift Card",async ({page}) => {
  await OpeningPage(page);
  await page .getByRole('link', { name: 'BUZZ CREW', exact: true }).click();
  await page .getByRole('link', { name: 'News' }).nth(1).click();
  await page .getByRole('link', { name: 'BONUS UZ BUZZ GIFT CARD –' }).first().click();  
})

test("Favorite Product",async ({page}) => {
  await login(page);
  await page .getByRole('link', { name: 'MUŠKARCI' }).hover();
  await page .getByRole('link', { name: 'Nike Air Max', exact: true }).click();
  await page .locator('.img-wrapper > a').first().click();
  await page .locator('.product-favorite').click();
  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  // Assuming you want to click on a link with a specific href value
const linkHref = 'https://www.buzzsneakers.ba/omiljeno/product'; // Replace with the actual href value
await page.locator(`a[href="${linkHref}"]`).click();

  //await page .locator('#miniFavContent').click();
  //await page .waitForTimeout(3000);
  //await page.waitForLoadState("load");
  // await page .getByRole('link', { name: 'ŽENE' }).hover();
  // await page .getByRole('link', { name: 'Torbica' }).click();
  // await page.waitForLoadState("load");
  // await page .getByRole('link', { name: 'NIKE Torbica Heritage' }).first().click();
  // await page .locator('.product-favorite').click();
  // await page.locator(`a[href="${linkHref}"]`).click();
  await page .locator('div:nth-child(2) > div > .product-info-wrapper > .caption-icon > .icon-heart-f').click();
  await page .getByRole('button', { name: 'OK' }).click();

})

test("Search",async ({page}) => {
  await OpeningPage(page);
  await page .getByTitle('Pretraži sajt').click();
  await page .getByPlaceholder('Pretraži sajt').fill("Nike");
  await page.keyboard.press('Enter');
  await page .getByTitle('Pretraži sajt').click();
  await page .getByPlaceholder('Pretraži sajt').fill("adudas");
  await page.keyboard.press('Enter');
})

test("Filtering Product",async ({page}) => {
  await OpeningPage(page);
  await page .getByRole('link', { name: 'MUŠKARCI' }).hover();
  await page .getByRole('link', { name: 'Dukserica', exact: true }).click();
  await page .getByText('Brendovi', { exact: true }).click();
  await page .getByText('adidas (20)').click();
  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await page .getByText('Cijena', { exact: true }).click();
  await page .getByText('- 200 KM (16)').click();
  await page .getByText('Resetujte filtere').click();
  await page .getByText('101 - 200 KM', { exact: true }).click();
  
})
test("Check-out", async ({ page }) => {
  await login(page);
  await page.getByText("NIKE Patike AIR FORCE 1 '07").click();
  await page.locator("li").filter({ hasText: "41 26" }).click();
 //await page .locator('li').filter({ hasText: '8.5 42' }).click();
  //await page.waitForLoadState("load");
 // await page .locator('li.ease.active:has-text("Veličina: 8") span.eur-size:visible').click();
  await page .getByRole("button", { name: " Dodaj u korpu" }).click();
  // await page.getByText("Korpa 1").click();
   await page.waitForLoadState("load");
  const linkHref = "https://www.buzzsneakers.ba/kupovina";
  await page.locator(`a[href="${linkHref}"]`).click();
  // await page
  //   .getByText("GIFT KARTICA", { exact: true }).click();
  await page.locator('div.delivery-option-name:has-text("GIFT KARTICA")').click();
  await page .locator('input#cart_onepage_order_ticket.form-control[type="text"][inputmode="decimal"]').fill("4566666");
  await page.getByLabel("Sigurnosni kod:").fill("1234");
});

test("Adding-item", async ({ page }) => {
  await login(page);
  await page.getByRole("link", { name: "MUŠKARCI" }).hover();
  await page.getByRole("link", { name: "adidas Superstar" }).click();
  await page .locator("div:nth-child(10) > .row > .item-data > .img-wrapper > a").click();
  await page.getByText("37 1/").first().click();
  await page.getByRole("button", { name: " Dodaj u korpu" }).click();
});
//User acc settings
test("Account-settings", async ({ page }) => {
  await login(page);
  await page .getByRole("link", { name: "Amina Mujezinović" }).click();
  await page .getByRole("link", { name: "Izmjena profila" }).click();
  await page .getByPlaceholder("Ulica").fill("Teheranski Trg");
  await page .getByPlaceholder('Broj ulice').fill("8");
  await page .getByRole('button', { name: 'Sačuvajte podatke' }).click();
});

test("Country-change", async ({ page }) => {
  await login(page);
  await page .getByRole("link", { name: "Amina Mujezinović" }).click();
  await page .getByRole("link", { name: "Izmjena profila" }).click();
  await page .getByText("Promijeni").hover();
  await page .getByRole('link', { name: 'Buzz Bugarska' }).click();
  page.on('dialog', async (dialog) => {
    await dialog.accept();  // or use dismiss() for cancel
  });
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
});