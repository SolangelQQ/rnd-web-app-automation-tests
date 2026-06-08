import { test, expect } from '@playwright/test';
import { NavbarPage } from '../../pages/NavbarPage';

test.describe('Navbar navigation', () => {

  test('should load the home page', async ({ page }) => {
    const navbar = new NavbarPage(page);
    await navbar.goto();
    await expect(page).toHaveTitle(/R&D Labs AI/i);
  });

  test('should navigate to Products', async ({ page }) => {
    const navbar = new NavbarPage(page);
    await navbar.goto();
    await navbar.clickProducts();
    await expect(page).toHaveURL(/products/i);
  });

  test('should navigate to Knowledge Base', async ({ page }) => {
    const navbar = new NavbarPage(page);
    await navbar.goto();
    await navbar.clickKnowledgeBase();
    await expect(page).toHaveURL(/kb/i);
  });

  test('should navigate to Company', async ({ page }) => {
    const navbar = new NavbarPage(page);
    await navbar.goto();
    await navbar.clickCompany();
    await expect(page).toHaveURL(/company/i);
  });

  test('should navigate to Contact Us', async ({ page }) => {
    const navbar = new NavbarPage(page);
    await navbar.goto();
    await navbar.clickContactUs();
    await expect(page).toHaveURL(/contact/i);
  });

});