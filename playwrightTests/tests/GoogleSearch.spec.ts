import { test, expect } from "@playwright/test";


test("Google Search Test", async ({ page }) => {
  
 
    await page.goto("https://www.google.com");
    await page.waitForLoadState("networkidle");
  

 
    await page.fill('[type="search"]', "bilal");
  

 
    await page.keyboard.press("Enter");
  }
);