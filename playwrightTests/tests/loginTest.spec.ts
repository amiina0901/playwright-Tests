// login.test.ts
const { test, expect } = require('@playwright/test');
import { Page } from 'playwright';
import OpeningPage from '../pages/OpeningPage.js';

test('Login', async ({ page }: { page: Page }) => {
    const openingPage = new OpeningPage(page);
    
    await openingPage.openPage('https://www.buzzsneakers.com/');
    await openingPage.performAgreementSteps();
    await openingPage.login('amina.mujzin02@gmail.com', 'Nejra310803');
    await page.waitForLoadState();
    const afterLoginUrl = page.url();
    const expectedUrl = 'https://www.buzzsneakers.ba/'; 
    expect(afterLoginUrl).toBe(expectedUrl)
    await openingPage.logout();
});
