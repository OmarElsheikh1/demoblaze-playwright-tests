import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.describe("The user can Logout", () => {

    test("Logout", async ({ page }) => {

        // Open the website
        await page.goto("https://www.demoblaze.com/");

        // Locate login button, and click
        await page.locator("#login2").click();

        // Locate username field, and fill
        await page.locator("#loginusername").fill("omar_demo");

        // Locate password field, and fill
        await page.locator("#loginpassword").fill("123456");

        // Locate loging button, and click
        await page.locator('button:has-text("Log in")').click();

        // Locate logout button, and click
        await page.locator("#logout2").click();

         // Pause execution to inspect the browser before it closes
         await page.pause();
    });
});