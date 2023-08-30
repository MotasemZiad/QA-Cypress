/// <reference types="cypress" />

describe("Personal Financing Calculator Test Suite", () => {
  it("User should be able to calculate personal financing with valid data I", () => {
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

it("User should be able to calculate personal financing with valid data II", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Private",
    "SANABIL INVESTMENT",
    "1000000",
    "10000",
    "3200",
    "2300",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data III", () => {
  enterPersonalFinancingInformation(
    "New",
    "Military sector",
    "Border Guard MIL",
    "1000",
    "10000",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data IV", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "0",
    "10000",
    "0",
    "2300",
    "One Month",
    "The Saudi Investment Bank",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data V", () => {
  enterPersonalFinancingInformation(
    "New",
    "Government",
    "SANABIL INVESTMENT",
    "0",
    "10000",
    "0",
    "2300",
    "One Month",
    "Samba",
    "No",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data VI", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "0",
    "10000",
    "0",
    "2300",
    "One Month",
    "Samba",
    "No",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data VII", () => {
  enterPersonalFinancingInformation(
    "New",
    "Government",
    "SANABIL INVESTMENT",
    "0",
    "10000",
    "0",
    "2300",
    "One Month",
    "Samba",
    "No",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data VIII", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "Ministry of Education",
    "1",
    "10000",
    "0",
    "2300",
    "One Month",
    "Samba",
    "No",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data IX", () => {
  enterPersonalFinancingInformation(
    "New",
    "Government",
    "SANABIL INVESTMENT",
    "100000",
    "1000",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data X", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "Social Development Bank",
    "-1",
    "-100",
    "0",
    "0",
    "One Month",
    "Samba",
    "No",
    "No",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data XI", () => {
  enterPersonalFinancingInformation(
    "New",
    "Government",
    "SANABIL INVESTMENT",
    "100000",
    "100000",
    "2",
    "0",
    "One Month",
    "Samba",
    "No",
    "No",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data XII", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "100000",
    "1000",
    "0",
    "2",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data XIII", () => {
  enterPersonalFinancingInformation(
    "New",
    "Government",
    "SANABIL INVESTMENT",
    "100000",
    "-555.4",
    "ower",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data XIV", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Private",
    "Emirates NBD- NST",
    "100000",
    "-1",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1426"
  );
});

it("User should be able to calculate personal financing with valid data XV", () => {
  cy.visit("https://waset.sa/personal-financing");
  cy.get("button[type='submit']").click();
});

it.only("User should be able to calculate personal financing with valid data XVI", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "0",
    "0",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1425",
    "1"
  );
});

it.only("User should be able to calculate personal financing with valid data XVII", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "1000",
    "1000",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1425",
    "2"
  );
});

it.only("User should be able to calculate personal financing with valid data XVII", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "1000",
    "1000",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1425",
    "3"
  );
});

it.only("User should be able to calculate personal financing with valid data XIX", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "1000",
    "1000",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1425",
    "4"
  );
});

it.only("User should be able to calculate personal financing with valid data XX", () => {
  enterPersonalFinancingInformation(
    "Buyout",
    "Government",
    "SANABIL INVESTMENT",
    "1000",
    "1000",
    "0",
    "0",
    "One Month",
    "Samba",
    "Yes",
    "Yes",
    "Saudi",
    "1",
    "Muharram",
    "1425",
    "5"
  );
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
