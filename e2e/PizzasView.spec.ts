import { expect, test } from '@playwright/test';

test.describe('Pizzas View', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/pizzas');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('should display the page title', async ({ page }) => {
    const title = page.locator('h1');
    expect(await title.textContent()).toBe('Pizzas');
  });

  test('should search for a pizza', async ({ page }) => {
    const searchInput = page.locator('[data-testid="search-input"]');
    await searchInput.fill('Hawaiian');
    expect(await page.isVisible('[data-testid*="Hawaiian"]')).toBeTruthy();
  });
});
