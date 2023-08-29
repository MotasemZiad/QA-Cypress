describe("Navigation Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://waset.sa");
  });

  it("Logo should be visible", () => {
    cy.get(".logo-div > a img").should("be.visible");
  });

  it("Logo should be clickable", () => {
    cy.get(".logo-div > a img").click();
  });

  it("Logo should be redirected to the home page", () => {
    cy.get(".logo-div > a")
      .should("have.attr", "href", "https://waset.sa")
      .click();
  });

  it("Navigation Links be 5 list items", () => {
    cy.get(".content-links > .links").children().should("have.length", 5);
  });

  it("Navigation Links should be visible", () => {
    cy.get(".content-links > .links").children().should("be.visible");
  });

  it("Home navigation list item should be clickable", () => {
    cy.get(".content-links > :nth-child(1)")
      .contains("Home")
      .should("have.attr", "href", "https://waset.sa")
      .click();
  });

  it("About us navigation list item should be clickable", () => {
    cy.get(".content-links > .links :nth-child(2)")
      .contains("About us")
      .should("have.attr", "href", "https://waset.sa/about-us")
      .click();
  });

  it("Features navigation list item should be clickable", () => {
    cy.get(".content-links > .links :nth-child(3)")
      .contains("Features")
      .should("have.attr", "href", "https://waset.sa#why-waset")
      .click();
  });

  it("Localization navigation list item should be clickable", () => {
    cy.get(".content-links > .links :nth-child(4)")
      .contains("العربية")
      .should("have.attr", "href", "https://waset.sa/ar")
      .click();
  });

  it("View Finance Solutions navigation list item should be clickable", () => {
    cy.get(".content-links > .links :nth-child(5)")
      .contains("View Finance Solutions")
      .should("have.attr", "href", "https://waset.sa#our-financing")
      .click();
  });
});
