import { Page, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private loginLink = '#login2';
    private usernameInput = '#loginusername';
    private passwordInput = '#loginpassword';
    private loginButton = 'button:has-text("Log in")';
    private welcomeMessage = '#nameofuser';

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.locator(this.loginLink).click();
        await this.page.waitForSelector(this.usernameInput, { state: "visible" });
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
        await this.page.waitForSelector(this.welcomeMessage);
        expect(await this.page.locator(this.welcomeMessage).innerText()).toContain(username);
    }
}