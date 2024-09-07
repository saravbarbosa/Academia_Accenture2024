const BTN_AUTOMOBILE = '#nav_automobile'
const BTN_PRODUCT_DATA = '#enterproductdata'
const INPUT_START_DATE = '#startdate'
const INPUT_INSURANCE_SUM = '#insurancesum'
const INPUT_MERIT_RATING = '#meritrating'
const DAMAGE_INSURANCE = '#damageinsurance'
const INPUT_OPTIONAL_PRODUCTS = '.idealforms-field-checkbox'
const INPUT_COURTESY_CAR = '#courtesycar'
const BTN_NEXT_PRICE = '#nextselectpriceoption'
const BTN_PRICE = '#selectpriceoption'

Cypress.Commands.add('clicarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})

Cypress.Commands.add('clicarProductData', () => {
    cy.get(BTN_PRODUCT_DATA).click()
})

Cypress.Commands.add('preencherDadosProduct', () => {
    cy.get(INPUT_START_DATE).type(Cypress.env("startDate"), {log: false})
    cy.get(INPUT_INSURANCE_SUM).select(Cypress.env("insuranceSum"), {log: false})
    cy.get(INPUT_MERIT_RATING).select(Cypress.env("meritRating"), {log: false})
    cy.get(DAMAGE_INSURANCE).select(Cypress.env("damageInsurance"), {log: false})
    cy.get(INPUT_OPTIONAL_PRODUCTS).eq(1).click({log: false})
    cy.get(INPUT_COURTESY_CAR).select(Cypress.env("courtesyCar"), {log: false})
})

Cypress.Commands.add('clicarNextPriceOption', () => {
    cy.get(BTN_NEXT_PRICE).click()
})

Cypress.Commands.add('validarRedirecPrice', () => {
    const selectPriceOption = "Price Option"
    cy.get(BTN_PRICE).should('contain', selectPriceOption)
})