/// <reference types="cypress" />
import RegisterPage from "../../../pages/register_page";

describe("Guru99 Register", () => {
    const registerPage = new RegisterPage();

    beforeEach(() => {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
    })


    it("should be able to register with valid credentials", () => {
        registerPage.enterFirstName("Ahmed");
        registerPage.enterLastName("Zaki");
        registerPage.enterPhone("0598766351");
        registerPage.enterEmail("ahmedzak@gmail.com");
        registerPage.enterAddress("Abasan");
        registerPage.enterCity("Khan Younis");
        registerPage.enterState("Gaza");
        registerPage.enterPostalCode("00970");
        registerPage.selectCountry("GAZA STRIP");
        registerPage.enterUsername("ahmedzak");
        registerPage.enterPassword("123123");
        registerPage.enterConfirmPassword("123123");
        registerPage.clickSubmit();

        registerPage.elements.successText().contains("Thank you for registering. You may now sign-in using the user name and password you've just entered.");
    })
});