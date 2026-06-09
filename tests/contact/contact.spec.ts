import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../../pages/ContactUsPage';

test.describe('Contact us page', () => {

  test('should fill the form from contact', async ({ page }) => {
    const contact = new ContactUsPage(page);

    await contact.gotoContact();
    await contact.fillFirstName('Jhoselin');
    await contact.fillLastName('Quiroga');
    await contact.fillPhone(71711393);
    await contact.fillEmail('jhoselin@gmail.com');
    await contact.fillMessage('Quisiera conocer su numero de contacto de Bolivia');
    await contact.clickSubscribe();
    await contact.clickSend();

    await expect(page.getByRole('button', { name: /enviar/i })).toBeVisible();
  });

});