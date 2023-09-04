export default class RegisterPage {
  elements = {
    firstNameInput: () => cy.get('input[name="firstName"]'),
    lastNameInput: () => cy.get('input[name="lastName"]'),
    phoneInput: () => cy.get('input[name="phone"]'),
    emailInput: () => cy.get('input[name="userName"]'),
    addressInput: () => cy.get('input[name="address1"]'),
    cityInput: () => cy.get('input[name="city"]'),
    stateInput: () => cy.get('input[name="state"]'),
    postalCodeInput: () => cy.get('input[name="postalCode"]'),
    countrySelect: () => cy.get('select[name="country"]'),
    usernameInput: () => cy.get('input[name="email"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    confirmPasswordInput: () => cy.get('input[name="confirmPassword"]'),
    submitButton: () => cy.get('input[name="submit"]'),

    successText: () => cy.get("td > :nth-child(2) > font"),
    errorText: () => cy.get("td > :nth-child(2) > font"),
  };

  enterFirstName(firstName) {
    this.elements.firstNameInput().clear().type(firstName);
  }

  enterLastName(lastName) {
    this.elements.lastNameInput().clear().type(lastName);
  }

  enterPhone(phone) {
    this.elements.phoneInput().clear().type(phone);
  }

  enterEmail(email) {
    this.elements.emailInput().clear().type(email);
  }

  enterAddress(address) {
    this.elements.addressInput().clear().type(address);
  }

  enterCity(city) {
    this.elements.cityInput().clear().type(city);
  }

  enterState(state) {
    this.elements.stateInput().clear().type(state);
  }

  enterPostalCode(postalCode) {
    this.elements.postalCodeInput().clear().type(postalCode);
  }

  selectCountry(country) {
    this.elements.countrySelect().select(country);
  }

  enterUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  enterConfirmPassword(confirmPassword) {
    this.elements.confirmPasswordInput().clear().type(confirmPassword);
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }
}

// export default RegisterPage
