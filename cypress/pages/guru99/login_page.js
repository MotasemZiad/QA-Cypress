export default class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="userName"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    submitButton: () => cy.get('input[name="submit"]'),
    successText: () => cy.get("h3"),
    errorText: () => cy.get("span"),
  };

  enterUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }
}

// export default LoginPage;
