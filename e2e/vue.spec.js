import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test.skip('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Pizzas');
})
