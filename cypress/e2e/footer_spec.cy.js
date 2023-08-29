describe("Footer Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://waset.sa");
  });

  it("Individual Test III", () => {
    cy.get(".follow-us > div > :nth-child(1)")
      .should("have.attr", "href", "https://www.facebook.com/waset.sa")
      .click();

    cy.get(".follow-us > div > :nth-child(2)")
      .should("have.attr", "href", "https://twitter.com/waset_sa")
      .click();

    cy.get(".follow-us > div > :nth-child(3)")
      .should("have.attr", "href", "https://www.instagram.com/waset.sa/")
      .click();
  });
});
