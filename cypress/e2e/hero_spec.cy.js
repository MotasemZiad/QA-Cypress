describe("Hero Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://waset.sa");
  });

  it("Individual Test II", () => {
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
