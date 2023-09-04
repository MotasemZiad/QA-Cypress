/// <reference types="cypress" />
import LoginPage from "../../../pages/guru99/login_page";

describe("Guru99 Login", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit("https://demo.guru99.com/test/newtours/login.php");
  });
  it("should be able to login with valid credentials", () => {
    cy.fixture("guru99/login_data").then((user) => {
      loginPage.enterUsername(user.validCredentials.username);
      loginPage.enterPassword(user["validCredentials"].password);
      loginPage.clickSubmit();
    });

    loginPage.elements.successText().contains("Login Successfully");
  });

  it("should not be able to login with invalid credentials", () => {
    cy.fixture("guru99/login_data").then((user) => {
      loginPage.enterUsername(user.invalidCredentials.username);
      loginPage.enterPassword(user["invalidCredentials"].password);
      loginPage.clickSubmit();
    });
    loginPage.elements
      .errorText()
      .contains("Enter your userName and password correct");
  });
});
