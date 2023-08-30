describe("Personal Financing Calculator Test Suite", () => {
  it.only("User should be able to calculate personal financing with valid data", () => {
    enterPersonalFinancingInformation(
      "New",
      "Government",
      "SANABIL INVESTMENT",
      "1",
      "1",
      "3200",
      "2300",
      "One Month",
      "Samba",
      "No",
      "No",
      "Saudi",
      "1",
      "Muharram",
      "1424"
    );
  });

  it("Enter user data without entering finance data", () => {
    cy.visit("https://waset.sa/personal-financing/basic");
    cy.get("input[name='name']").type("hany srour");
    cy.get("input[name='mobile']").type("966500000000");
    cy.get("input[name='email']").type("motasemabunima@gmail.com");
    cy.get("input[name='id_no']").type("1234567890");
    cy.get("#city").select("Riyadh", { force: true });
    cy.get("input[type='checkbox']").check({ force: true });
    cy.get("button[type='submit']").click();
  });

  it("User should be able to enter his all data", () => {
    enterPersonalFinancingInformation(
      "New",
      "Government",
      "SANABIL INVESTMENT",
      "1",
      "1",
      "3200",
      "2300",
      "One Month",
      "Samba",
      "No",
      "No",
      "Saudi",
      "1",
      "Muharram",
      "1424",
      "12"
    );
    // Go to the next step
    cy.get("input[name='name']").type("hany srour");
    cy.get("input[name='mobile']").type("966500000000");
    cy.get("input[name='email']").type("motasemabunima@gmail.com");
    cy.get("input[name='id_no']").type("1234567890");
    cy.get("#city").select("Riyadh", { force: true });
    cy.get("input[type='checkbox']").check({ force: true });
    cy.get("button[type='submit']").click();
  });
});

function enterPersonalFinancingInformation(
  type,
  sector,
  entity,
  amount,
  salary,
  creditObligation,
  livingExpenses,
  serviceMonths,
  bank,
  haveMortgageLoan,
  haveTrouble,
  nationality,
  day,
  month,
  year,
  fundingDuration = 1
) {
  cy.visit("https://waset.sa/personal-financing");
  cy.get("#type").select(type, { force: true });
  cy.get("#sector_code").select(sector, { force: true });
  cy.get("#entity_id").select(entity, { force: true });
  cy.get("#amount_financed").type(amount);
  cy.get("#salary").type(salary);
  cy.get(".credit-obligations-value").type(creditObligation);
  cy.get(".living-expenses-value").type(livingExpenses);
  cy.get("#service_months_no").select(serviceMonths, { force: true });
  cy.get("#bank_code").select(bank, { force: true });
  cy.get("#mortgage_loan").select(haveMortgageLoan, { force: true });
  cy.get("#trouble").select(haveTrouble, { force: true });
  cy.get("#nationality").select(nationality, { force: true });
  cy.get("#day").select(day, { force: true });
  cy.get("#month").select(month, { force: true });
  cy.get("#year2").select(year, { force: true });
  cy.get(
    `#funding-duration-slider .slider-tick-container :nth-child(${fundingDuration})`
  ).click({ force: true });
  cy.get("button[type='submit']").click();
}
