const BTN_AUTOMOBILE = '#nav_automobile'
const INPUT_MAKE = '#make'
const INPUT_MODEL = '#model'
const INPUT_CYLINDER = '#cylindercapacity'
const INPUT_ENGINE = '#engineperformance'
const INPUT_DATE = '#dateofmanufacture'
const INPUT_NUMBER = '#numberofseats'
const INPUT_RIGHT = '.ideal-radio'
const INPUT_NUMBER_MOTO = '#numberofseatsmotorcycle'
const INPUT_FUEL = '#fuel'
const INPUT_PAYLOAD = '#payload'
const INPUT_WEIGHT = '#totalweight'
const INPUT_LIST = '#listprice'
const INPUT_LICENSE = '#licenseplatenumber'
const INPUT_ANNUAL = '#annualmileage'
const BTN_NEXT_INSURANT = '#nextenterinsurantdata'
const BTN_INSURANT_DATA = '#enterinsurantdata'

Cypress.Commands.add('preencherDadosVehicle', () => {
    cy.get(BTN_AUTOMOBILE).click()
    cy.get(INPUT_MAKE).select(Cypress.env("make"), {log: false})
    cy.get(INPUT_ENGINE).type(Cypress.env("engine"), {log: false})
    cy.get(INPUT_DATE).type(Cypress.env("date"), {log: false})
    cy.get(INPUT_NUMBER).select(Cypress.env("number"), {log: false})
    cy.get(INPUT_FUEL).select(Cypress.env("fuelType"), {log: false})
    cy.get(INPUT_LIST).type(Cypress.env("list"), {log: false})
    cy.get(INPUT_LICENSE).type(Cypress.env("license"), {log: false})
    cy.get(INPUT_ANNUAL).type(Cypress.env("annual"), {log: false})
})

Cypress.Commands.add('clicarNextInsurant', () => {
    cy.get(BTN_NEXT_INSURANT).click()
})

Cypress.Commands.add('validarRedirecInsurant', () => {
    const InsurantData = "Insurant Data"
    cy.get(BTN_INSURANT_DATA).should('contain', InsurantData)
})