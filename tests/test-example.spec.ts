import React from 'react';
test('Check Java page', async ({ page }) => {
    await page.goto('https://playwright.dev');

    await page.getByRole('link', {name: 'Get started'}).click();
});