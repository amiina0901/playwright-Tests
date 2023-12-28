import { test, expect } from "@playwright/test";
import { link } from "fs";

test("First",
async ({ page }) => {
    await page.goto("https://www.buzzsneakers.com/");
    await page.waitForLoadState("networkidle");
    await expect(page.url()).toContain("sneakers");
    await page.getByTitle('Bosnian/Croatian/Serbian').click();

    await page.getByRole('link', { name: 'Registrujte se' }).click();
    await page.locator('input[placeholder="Ime"]').first().fill('Amina');
    await page.getByRole('button', { name: 'Registracija' }).click();

    // await page.waitForSelector('[role="link"][name="Registrujte se"]');
    // await page.click('[role="link"][name="Registrujte se"]');
    // await page.waitForLoadState("networkidle");
    // await page.waitForSelector('input[placeholder="Ime"]', { timeout: 60000 });
    // await page.fill('input[placeholder="Ime"]', 'Amina');

    // await page.getByRole('link', {name:'Registrujte se'}).click();
    // await page.waitForLoadState("networkidle");
    //await page.locator('input[placeholder="Ime"]').first().fill('Amina');

     });