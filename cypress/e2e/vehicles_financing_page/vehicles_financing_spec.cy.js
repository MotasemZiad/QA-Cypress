/// <reference types="cypress" />

describe("Vehicles Financing Calculator Test Suite", () => {
  it("User should be able to calculate vehicles financing with valid data I", () => {
    enterVehiclesFinancingInformation(
      "VOLVO",
      "2022",
      "100000",
      "Government",
      "SANABIL INVESTMENT",
      "10000",
      "8000",
      "4800",
      "Yes",
      "One Month",
      "SABB Bank",
      "1",
      "Safar",
      "1425",
      "1",
      "5"
    );
  });
});

function enterVehiclesFinancingInformation(
  brand,
  model,
  price,
  sector,
  entity,
  salary,
  creditObligation,
  creditCardLimit,
  haveMortgageLoan,
  serviceMonths,
  bank,
  day,
  month,
  year,
  fundingDuration,
  downPayment
) {
  cy.visit("https://waset.sa/vehicles-financing");
  cy.get("#car_brand_code").select(brand, { force: true });
  cy.get("#car_model").select(model, { force: true });
  cy.get("#car_price").type(price);
  cy.get("#sector_code").select(sector, { force: true });
  cy.get("#entity_id").select(entity, { force: true });
  cy.get("#salary").type(salary);
  cy.get("[data-id='financial-obligations-slider']").type(creditObligation);
  cy.get(".credit-card-limit-value").type(creditCardLimit);
  cy.get("#mortgage_loan").select(haveMortgageLoan, { force: true });
  cy.get("#service_months_no").select(serviceMonths, { force: true });
  cy.get("#bank_code").select(bank, { force: true });
  cy.get("#day").select(day, { force: true });
  cy.get("#month").select(month, { force: true });
  cy.get("#year2").select(year, { force: true });
  cy.get(
    `#funding-duration-slider .slider-tick-container :nth-child(${fundingDuration})`
  ).click({ force: true });
  cy.get(`#down-payment-slider > .slider-track > .slider-selection`)
    .invoke("css", "width", "40%")
    .click({
      force: true,
    });
  cy.get("button[type='submit']").click();
}
