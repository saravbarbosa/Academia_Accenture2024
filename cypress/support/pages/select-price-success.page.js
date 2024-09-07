const INPUT_PRICE_OPTION = '.ideal-radio'
const BTN_INSURANCE_SUM = '.big-quote-cell'

Cypress.Commands.add('preencherPriceOption', () => {
    cy.get(INPUT_PRICE_OPTION).eq(2).click({ log: false })
})

Cypress.Commands.add('validarPriceOption', () => {
    const PriceOption = "Quote"
    cy.get(BTN_INSURANCE_SUM).should('contain', PriceOption)
})