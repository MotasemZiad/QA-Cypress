class PersonalFinancingPage {
  elements = {
    typeInput: () => cy.get("#type"),
    sectorInput: () => cy.get("#sector_code"),
    entityInput: () => cy.get("#entity_id"),
    amountInput: () => cy.get("#amount_financed"),
    salaryInput: () => cy.get("#salary"),
    creditObligationInput: () => cy.get(".credit-obligations-value"),
    livingExpensesInput: () => cy.get(".living-expenses-value"),
    serviceMonthsInput: () => cy.get("#service_months_no"),
    bankInput: () => cy.get("#bank_code"),
    haveMortgageLoanInput: () => cy.get("#mortgage_loan"),
    haveTroubleInput: () => cy.get("#trouble"),
    nationalityInput: () => cy.get("#nationality"),
    dayInput: () => cy.get("#day"),
    monthInput: () => cy.get("#month"),
    yearInput: () => cy.get("#year2"),
    fundingDurationInput: (fundingDuration) =>
      cy.get(
        `#funding-duration-slider .slider-tick-container :nth-child(${fundingDuration})`
      ),
    showResultButton: () => cy.get("button[type='submit']"),
  };

  selectType(type) {
    this.elements.typeInput().select(type, { force: true });
  }

  selectSector(sector) {
    this.elements.sectorInput().select(sector, { force: true });
  }

  selectEntity(entity) {
    this.elements.entityInput().select(entity, { force: true });
  }

  typeAmount(amount) {
    this.elements.amountInput().clear().type(amount);
  }

  typeSalary(salary) {
    this.elements.salaryInput().clear().type(salary);
  }

  typeCreditObligation(creditObligation) {
    this.elements.creditObligationInput().clear().type(creditObligation);
  }

  typeLivingExpenses(livingExpenses) {
    this.elements.livingExpensesInput().clear().type(livingExpenses);
  }

  selectServiceMonths(serviceMonths) {
    this.elements.serviceMonthsInput().select(serviceMonths, { force: true });
  }

  selectBank(bank) {
    this.elements.bankInput().select(bank, { force: true });
  }

  selectHaveMortgageLoan(haveMortgageLoan) {
    this.elements
      .haveMortgageLoanInput()
      .select(haveMortgageLoan, { force: true });
  }

  selectHaveTrouble(haveTrouble) {
    this.elements.haveTroubleInput().select(haveTrouble, { force: true });
  }

  selectNationality(nationality) {
    this.elements.nationalityInput().select(nationality, { force: true });
  }

  selectDay(day) {
    this.elements.dayInput().select(day, { force: true });
  }

  selectMonth(month) {
    this.elements.monthInput().select(month, { force: true });
  }

  selectYear(year) {
    this.elements.yearInput().select(year, { force: true });
  }

  selectFundingDuration(fundingDuration) {
    this.elements.fundingDurationInput(fundingDuration).click({ force: true });
  }

  clickShowResultButton() {
    this.elements.showResultButton().click();
  }
}

export default PersonalFinancingPage;
