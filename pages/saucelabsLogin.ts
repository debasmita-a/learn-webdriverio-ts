import { $ } from "@wdio/globals";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SauceLabsLogin {
  /**
   * Define selectors using getter methods.
   */

  public get inputUsername() {
    return $('input[data-test="username"]');
  }
  public get inputPassword() {
    return $('input[data-test="password"]');
  }
  public get btnLogin() {
    return $('input[data-test="login-button"]');
  }

  /**
   * Private methods - defining browser actions - Encapsulation
   */
  private async enterUsername(usernametext: string) {
    await this.inputUsername.setValue(usernametext);
  }

  private async enterPassword(passwordtext: string) {
    await this.inputPassword.setValue(passwordtext);
  }

  private async clickLoginBtn() {
    await this.btnLogin.click();
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  public async doLogin(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginBtn();
  }
}
export default new SauceLabsLogin();
