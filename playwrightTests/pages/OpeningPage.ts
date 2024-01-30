// openingPage.ts
import { Page } from 'playwright';
import AgreementPage from './agreementPage';
import BuzzCrewPage from './BuzzCrewPage';

class OpeningPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPage(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
    await this.page.getByTitle("Bosnian/Croatian/Serbian").click();
  }

  async clickOnRegisterLink() {
    await this.page.getByRole('link', { name: 'Registrujte se' }).click();
  }

  async performAgreementSteps() {
   
    const agreementPage = new AgreementPage(this.page);
    await agreementPage.acceptTerms();
  }
  async login(email: string, password: string) {
    await this.page.getByRole('link', { name: 'Prijavi se' }).click();
    await this.page.getByRole('textbox', { name: 'Email:' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Lozinka:' }).fill(password);
    await this.page.getByRole('button', { name: 'Prijava', exact: true }).click();
  }
  async logout() {
    
    await this.page.getByRole('link', { name: 'Odjava' }).click();}
  
    buzzCrewPage(): BuzzCrewPage {
      return new BuzzCrewPage(this.page);
    }
  }

export default OpeningPage;
