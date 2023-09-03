/// <reference types="cypress" />
import RegisterPage from "../../../pages/register_page";

describe("Guru99 Register", () => {
    const registerPage = new RegisterPage();

    beforeEach(() => {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
    })


    it("should be able to register with valid credentials", () => {

        cy.fixture("register_data").then((user) => {
            registerPage.enterFirstName(user.firstName);
            registerPage.enterLastName(user.lastName);
            registerPage.enterPhone(user.phone);
            registerPage.enterEmail(user.email);
            registerPage.enterAddress(user.address);
            registerPage.enterCity(user.city);
            registerPage.enterState(user.state);
            registerPage.enterPostalCode(user.postalCode);
            registerPage.selectCountry(user.country);
            registerPage.enterUsername(user.username);
            registerPage.enterPassword(user.password);
            registerPage.enterConfirmPassword(user.confirmPassword);
            registerPage.clickSubmit();
        })

        registerPage.elements.successText().contains("Thank you for registering. You may now sign-in using the user name and password you've just entered.");
    })
});