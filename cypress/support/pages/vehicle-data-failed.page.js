const INPUT_LIST_ERROR = '#listprice'
const SPAN_ERROR = '.error'
const BTN_AUTOMOBILE = '#nav_automobile'
const INPUT_MAKE = '#make'
const INPUT_ENGINE = '#engineperformance'
const INPUT_DATE = '#dateofmanufacture'
const INPUT_NUMBER = '#numberofseats'
const INPUT_FUEL = '#fuel'

Cypress.Commands.add('preencherListError', () => {
    cy.get(BTN_AUTOMOBILE).click()
    cy.get(INPUT_MAKE).select(Cypress.env("make"), {log: false})
    cy.get(INPUT_ENGINE).type(Cypress.env("engine"), {log: false})
    cy.get(INPUT_DATE).type(Cypress.env("date"), {log: false})
    cy.get(INPUT_NUMBER).select(Cypress.env("number"), {log: false})
    cy.get(INPUT_FUEL).select(Cypress.env("fuelType"), {log: false})
    cy.get(INPUT_LIST_ERROR).type(Cypress.env("listError"),{log: false})
})

Cypress.Commands.add('mensagemErro', () => {
    cy.get(SPAN_ERROR).contains('span','This field is mandatory')
})