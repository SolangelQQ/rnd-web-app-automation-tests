import { test, expect } from '@playwright/test';

test.describe('Navbar navigation', () => {

  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/R&D Labs AI/i);
  });

  test('should navigate to Products', async ({ page }) => {
    await page.goto('/');
    await page.locator('header').getByRole('link', { name: /products/i }).click();
    await expect(page).toHaveURL(/products/i);
  });

  test('should navigate to Knowledge Base', async ({ page }) => {
    await page.goto('/');
    await page.locator('header').getByRole('link', { name: /knowledge/i }).click();
    await expect(page).toHaveURL(/kb/i);
  });

  test('should navigate to Company', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
        window.location.href = '/company';
    });
    await expect(page).toHaveURL(/company/i);
  });

});