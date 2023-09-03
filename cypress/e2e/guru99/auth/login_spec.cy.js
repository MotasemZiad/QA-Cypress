/// <reference types="cypress" />
import LoginPage from "../../../pages/login_page";

describe("Guru99 Login", () => {
    const loginPage = new LoginPage();


    beforeEach(() => {
        cy.visit("https://demo.guru99.com/test/newtours/login.php")
    })
    it("should be able to login with valid credentials", () => {
        loginPage.enterUsername("motasemabunima");
        loginPage.enterPassword("123123");
        loginPage.clickSubmit();
        loginPage.elements.successText().contains("Login Successfully");
    });

    it("should not be able to login with invalid credentials", () => {
        loginPage.enterUsername("motasemabunima");
        loginPage.enterPassword("123456");
        loginPage.clickSubmit();
        loginPage.elements.errorText().contains("Enter your userName and password correct");
    });
})