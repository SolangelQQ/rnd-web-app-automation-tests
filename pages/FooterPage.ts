import { Page } from '@playwright/test';

export class FooterPage {
  private page: Page;
 
  private privacyPolicyModal = '#privacypolicy'
  private copyrightArea = '[data-type="copyright"]'

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }
  
  async sitemap() {
    return this.page.getByRole('link', {name: /sitemap/i});
  }
  async privacyPolicy() {
    return this.page.locator(this.privacyPolicyModal);
  }

  async copyright() {
    return this.page.locator(this.copyrightArea);
  }
}