import { Page } from '@playwright/test';

export class NavbarPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async clickHome() {
    await this.page.locator('header').getByRole('link', { name: /home/i }).click();
  }

  async clickProducts() {
    await this.page.locator('header').getByRole('link', { name: /products/i }).click();
  }

  async clickKnowledgeBase() {
    await this.page.locator('header').getByRole('link', { name: /knowledge/i }).click();
  }

  async clickContactUs() {
    await this.page.locator('header').getByRole('link', { name: /contact/i }).click();
  }

  async clickCompany() {
    // await this.page.locator('header').getByRole('link', { name: /company/i }).hover();
    await this.page.evaluate(() => {
        window.location.href = '/company';
    });
  }
}