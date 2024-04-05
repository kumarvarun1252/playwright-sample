import { expect, Page, Locator, ElementHandle } from '@playwright/test';
import { PageBase } from './page-base';
// import { LoginLocators } from './page-locators';

export class LoginPage extends PageBase {
    constructor(page: Page) {
        super(page);
    }

    async open() {
        await this.page.goto('/');
        this.logger.info('Welcome to HRAcuity');
    }
    async login(username: string, password: string): Promise<void> {
        await this.page.getByLabel('Username').fill(username);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async verifyTitle(title: string): Promise<void> {
        const headerElement = await this.page.getByRole('heading');
        const actualTitle = await headerElement.textContent();
        expect(actualTitle).toBe(title);
        this.logger.info('title verified');
    }

    async editMessage(message: string, editmessage: string): Promise<void> {
        // const messageList = LoginLocators.messageList;
        // const clearButton = LoginLocators.clearButton;
        // await super.click(messageList);
        // await super.fill(messageList, 'This is message one. Oh, what');
        // await super.click(clearButton);

        await this.page.locator('li').filter({ hasText: message }).getByRole('button').first().click();
        var newmessage = await this.page.locator('li').filter({ hasText: message }).textContent + editmessage;

    }

    async getAllMessages() {
        // Get all elements with the locator 'li'
        const listItems = await this.page.$$('li');
        for (const listItem of listItems) {
            const textContent = await listItem.textContent();
            console.log('Text Content:', textContent);
        }
        console.log('Count Of Messages', listItems.length);
        return listItems;
    }

    async deleteMessage(message: string) {

    }

    async clearMessage() {
            await this.page.locator('button').filter({ hasText: 'clear' }).click();
        }

    async logout() {
            await this.page.getByRole('button', { name: 'Logout' }).click();
        }
    }