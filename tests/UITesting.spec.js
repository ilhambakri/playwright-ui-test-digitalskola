const { test, expect } = require('@playwright/test');

test.describe('Saucedemo Login Test', () => {
    test('Successful Login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[id="user-name"]').fill("standard_user")
        await page.getByPlaceholder('Password').fill("secret_sauce")
        await page.getByText('Login').click()

        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText('1');
    });
});

