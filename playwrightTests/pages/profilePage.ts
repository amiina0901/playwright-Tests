//changing country
import { Page } from "playwright";

class ProfilePage {
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

  async hoverOverChangeButton() {
    await this.page.getByText("Promijeni").hover();
  }

  async changeCountryToBuzzBugarska() {
    await this.page.getByRole("link", { name: "Buzz Bugarska" }).click();
   // await this.page.waitForTimeout(60000); // Adjust the timeout as needed
  }
}

export default ProfilePage;
