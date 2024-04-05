import { test, expect } from '@playwright/test';

import { HomePage } from '@pages/home-page';
import { LoginPage } from '@pages/login-page';

test.describe('HRAcuity login page tests', () => {

    test.only('Navigate to login page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login('admin', 'test');
        await loginPage.verifyTitle('HR Acuity Messenger');
        await loginPage.editMessage('This is message one. Oh, what');
        await loginPage.getAllMessages();
        await loginPage.clearMessage();
        await loginPage.logout();
    });

})
