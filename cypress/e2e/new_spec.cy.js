describe("template spec I", () => {
  it("Individual Test I", () => {
    cy.visit("https://waset.sa");
    cy.get("ul > li:last-child > .goto-link").click();
    cy.get("ul > li:nth-child(4) > a").click(); // Switch to Arabic
    cy.get("ul > li:nth-child(4) > a").click(); // Return back to English
    cy.get("ul > li:nth-child(3) > a").contains("Features").click();
    cy.get("ul > li:nth-child(2) > a").contains("About us").click();
    cy.get("ul > li:first-child > a").contains("Home").click();
    cy.get("h1.logo-div > a").click();

    cy.get("ul.links")
      .contains("About us")
      .should("have.attr", "href", "https://waset.sa/about-us")
      .click();

    cy.get("ul > li:first-child > a").contains("Home").click();

    cy.get(".btns > :first-child")
      .contains("Personal Financing")
      .should("have.attr", "href", "https://waset.sa/personal-financing")
      .click();

    cy.go("back");

    cy.get(".btns > :nth-child(2)")
      .contains("Vehicles Financing")
      .should("have.attr", "href", "https://waset.sa/vehicles-financing")
      .click();

    cy.go("back");

    cy.get(".btns > :nth-child(3)")
      .contains("Real Estate Finance")
      .should("have.attr", "href", "https://waset.sa/real-estate-financing")
      .click();

    cy.go("back");
  });
});
