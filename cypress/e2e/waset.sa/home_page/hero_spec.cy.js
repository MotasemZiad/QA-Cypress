describe("Hero Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://waset.sa");
  });

  it("Hero should have the correct title", () => {
    cy.get(".description > h2").should(
      "have.text",
      "Financing Solutions Made Easy"
    );
  });

  it("Hero should have the correct description", () => {
    cy.get(".description > p").should(
      "have.text",
      "A platform designed especially for your welfare to get your finance quickly and easily."
    );
  });

  it("Main Buttons should be redirected to the correct routes", () => {
    cy.get(".btns > :first-child")
      .should("have.text", "Personal Financing")
      .should("have.attr", "href", "https://waset.sa/personal-financing")
      .click();

    cy.go("back");

    cy.get(".btns > :nth-child(2)")
      .should("have.text", "Vehicles Financing")
      .should("have.attr", "href", "https://waset.sa/vehicles-financing")
      .click();

    cy.go("back");

    cy.get(".btns > :nth-child(3)")
      .should("have.text", "Real Estate Finance")
      .should("have.attr", "href", "https://waset.sa/real-estate-financing")
      .click();

    cy.go("back");
  });
});
