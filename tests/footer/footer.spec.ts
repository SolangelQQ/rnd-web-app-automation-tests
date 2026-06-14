import { test, expect } from '@playwright/test';
import { FooterPage } from '../../pages/FooterPage';

test.describe('Footer', () => {

  test('should load the home page', async ({ page }) => {
    const footer = new FooterPage(page);
    await footer.goto();
    await expect(page).toHaveTitle(/R&D Labs AI/i);
  });

  test('should navigate to sitemap', async ({ page }) => {
    const footer = new FooterPage(page);
    await footer.goto();
    await expect(await footer.sitemap()).toBeVisible();
  });

  test('should display the privacy modal', async ({ page }) => {
    const footer = new FooterPage(page);
    await footer.goto();
    await expect(await footer.privacyPolicy()).toBeVisible();
  });

  test('should verify that have copyright logo', async ({ page }) => {
    const footer = new FooterPage(page);
    await footer.goto();
    await expect(await footer.copyright()).toHaveText("© 2025 R&D Labs AI, Inc.");
  });


});