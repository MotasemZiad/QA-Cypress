/// <reference types="cypress" />
import RegisterPage from "../../../pages/guru99/register_page";

describe("Guru99 Register", () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    cy.visit("https://demo.guru99.com/test/newtours/register.php");
  });

  it("should be able to register with valid credentials", () => {
    cy.fixture("guru99/register_data").then((user) => {
      registerPage.enterFirstName(user["validCredentials"].firstName);
      registerPage.enterLastName(user["validCredentials"].lastName);
      registerPage.enterPhone(user["validCredentials"].phone);
      registerPage.enterEmail(user["validCredentials"].email);
      registerPage.enterAddress(user["validCredentials"].address);
      registerPage.enterCity(user["validCredentials"].city);
      registerPage.enterState(user["validCredentials"].state);
      registerPage.enterPostalCode(user["validCredentials"].postalCode);
      registerPage.selectCountry(user["validCredentials"].country);
      registerPage.enterUsername(user["validCredentials"].username);
      registerPage.enterPassword(user["validCredentials"].password);
      registerPage.enterConfirmPassword(
        user["validCredentials"].confirmPassword
      );
      registerPage.clickSubmit();
    });

    registerPage.elements
      .successText()
      .contains(
        "Thank you for registering. You may now sign-in using the user name and password you've just entered."
      );
  });
});
