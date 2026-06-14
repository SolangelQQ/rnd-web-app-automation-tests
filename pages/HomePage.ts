import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;
 
  private knowMore = '[data-prop="buttons.0.title"]'
  private logIn = '[data-prop="global.callToAction.title"]'
  private emailField = '#fieldEmail'
  private subscribe = '[data-prop="formData.submitButton.title"]'

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }
  
  async btnKnowMore() {
    await this.page.getByText('Know More!').click();
  }

  async btnLogIn() {
    await this.page.getByText('Log in').click();
  }

  async areaEmail(email: string) {
    await this.page.locator(this.emailField).fill(email);
  }

  async btnSubscribe() {
    await this.page.getByRole('button', {name: 'Subscribe'}).click();
  }
}