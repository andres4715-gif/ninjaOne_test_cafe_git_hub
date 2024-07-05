import { Selector, t } from "testcafe";

class LoginPage {
  usernameInput: Selector;
  passwordInput: Selector;
  submitButton: Selector;

  constructor() {
    this.usernameInput = Selector("#username");
    this.passwordInput = Selector("#password");
    this.submitButton = Selector('button[type="submit"]');
  }

  async login(username: string, password: string) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.submitButton);
  }
}

export default new LoginPage();
