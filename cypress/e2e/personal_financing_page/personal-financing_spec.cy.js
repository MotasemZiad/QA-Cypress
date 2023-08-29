describe("Personal Financing Calculator Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://waset.sa/personal-financing");
  });

  it("User should be able to calculate personal financing with valid data", () => {
    cy.get("#type").select("New", { force: true });
    cy.get("#sector_code").select("Government", { force: true });
    cy.get("#entity_id").select("SANABIL INVESTMENT", { force: true });
    cy.get("#amount_financed").type("1");
    cy.get("#salary").type("1");
    cy.get(".credit-obligations-value").type("3200");
    cy.get(".living-expenses-value").type("2300");
    cy.get("#service_months_no").select("One Month", { force: true });
    cy.get("#bank_code").select("Samba", { force: true });
    cy.get("#mortgage_loan").select("No", { force: true });
    cy.get("#trouble").select("No", { force: true });
    cy.get("#nationality").select("Saudi", { force: true });
    cy.get("#day").select("1", { force: true });
    cy.get("#month").select("Muharram", { force: true });
    cy.get("#year2").select("1424", { force: true });
    cy.get("button[type='submit']").click();

    // Go to the next step
    cy.get("input[name='name']").type("Motasem Abunima");
    cy.get("input[name='mobile']").type("966500000000");
    cy.get("input[name='email']").type("motasemabunima@gmail.com");
    cy.get("input[name='id_no']").type("1234567890");
    cy.get("#city").select("Riyadh", { force: true });
    cy.get("input[type='checkbox']").check({ force: true });
    cy.get("button[type='submit']").click();
  });
});
