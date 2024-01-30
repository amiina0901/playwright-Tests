// accountSettingsPage.ts
import { Page } from "playwright";

class AccountSettingsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProfile() {
    await this.page.getByRole("link", { name: "Amina Mujezinović" }).click();
  }

  async navigateToProfileEdit() {
    await this.page.getByRole("link", { name: "Izmjena profila" }).click();
  }

  async updateProfileAddress(street: string, streetNumber: string) {
    await this.page.getByPlaceholder("Ulica").fill(street);
    await this.page.getByPlaceholder("Broj ulice").fill(streetNumber);
    await this.page.getByRole("button", { name: "Sačuvajte podatke" }).click();
  }
}

export default AccountSettingsPage;
