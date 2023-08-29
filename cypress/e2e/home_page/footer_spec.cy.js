describe("Footer Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://waset.sa");
  });

  it("Facebook should be redirected to the correct facebook page", () => {
    cy.get(".follow-us > div > :nth-child(1)")
      .should("have.attr", "href", "https://www.facebook.com/waset.sa")
      .click();
  });

  it("Facebook should be redirected to the correct twitter page", () => {
    cy.get(".follow-us > div > :nth-child(2)")
      .should("have.attr", "href", "https://twitter.com/waset_sa")
      .click();
  });

  it("Facebook should be redirected to the correct instagram page", () => {
    cy.get(".follow-us > div > :nth-child(3)")
      .should("have.attr", "href", "https://www.instagram.com/waset.sa/")
      .click();
  });
});
