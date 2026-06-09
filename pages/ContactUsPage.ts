import { Page } from '@playwright/test';

export class ContactUsPage {
  private page: Page;
 
  private firstName = '#fieldFirstName'
  private lastName = "#fieldLastName"
  private email = "#fieldEmail"
  private phone = "#fieldPhone"
  private message = "#fieldMessage"
  private subscribe = "#fieldSubscribe"

  constructor(page: Page) {
    this.page = page;
  }
  async gotoContact(){
    await this.page.goto('/');
    // await this.page.getByRole('link', { name: /contact/i }).click();

    await this.page.evaluate(() => {
        window.location.href = '/contact-us';
    });
  }

  async fillFirstName(firstName : string) {
    await this.page.locator(this.firstName).fill(firstName);
  }

  async fillLastName(lastName : string) {
    await this.page.locator(this.lastName).fill(lastName);
  }

  async fillEmail(email : string) {
    await this.page.locator(this.email).fill(email);
  }

  async fillPhone(phone : number) {
    await this.page.locator(this.phone).fill(phone.toString());
  }

  async fillMessage(message : string) {
    await this.page.locator(this.message).fill(message);
  }

  async clickSubscribe() {
    await this.page.locator(this.subscribe).check()
  }

  async clickSend() {
    await this.page.getByRole('button', {name: /enviar/i}).click();
  }
}