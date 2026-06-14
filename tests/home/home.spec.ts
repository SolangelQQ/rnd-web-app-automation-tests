import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Dislay home funcionality', () => {

  test('should load the home page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await expect(page).toHaveTitle(/R&D Labs AI/i);
  });

  test('should navigate to know more', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.btnKnowMore();
    await expect(page).toHaveURL(/contact/i);
  });

  test('should load the Log in page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.btnLogIn();
    await expect(page).toHaveURL(/dev5.rndlabs.ai/);
  });

  test('should subscribe', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.areaEmail('jhoselin@gmail.com');
    await home.btnSubscribe();
    await expect(page).toHaveTitle("Home R&D Labs AI - R&D Labs AI");
  });

});