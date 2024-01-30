// registrationPage.ts
import { Page } from 'playwright';

class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async inputFirstName(firstName: string) {
    await this.page.locator('input[placeholder="Ime"]').first().fill(firstName);
  }

  async inputLastName(lastName: string) {
    await this.page.locator('input[placeholder="Prezime"]').fill(lastName);
  }

  async inputEmail(email: string) {
    await this.page.getByRole('textbox', { name: 'Email:' }).fill(email);
  }

  async inputPhone(phone: string) {
    await this.page.locator('input[placeholder="Telefon"]').fill(phone);
  }

  async inputCity(city: string) {
    await this.page.getByLabel('Grad:').fill(city);
  }

  async inputStreet(street: string) {
    await this.page.getByPlaceholder('Ulica').fill(street);
  }

  async inputStreetNumber(streetNumber: string) {
    await this.page.getByPlaceholder('Broj ulice').fill(streetNumber);
  }

  async inputPostalCode(postalCode: string) {
    await this.page.getByPlaceholder('Unesite poštanski broj').fill(postalCode);
  }

  async inputPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Lozinka: ' }).fill(password);
  }

  async inputConfirmPassword(confirmPassword: string) {
    await this.page.getByPlaceholder('Ponovite lozinku').fill(confirmPassword);
  }

  async selectGender() {
    await this.page.locator('label[for="reg_gender_2"]').click();
  }

  async agreeToTerms() {
    await this.page.locator('.icheckbox_flat').first().click();
  }

  async clickRegisterButton() {
    await this.page.getByRole('button', { name: 'Registracija' }).click();
    await this.page.waitForLoadState('networkidle');
  }
}

export default RegistrationPage;
