const BTN_AUTOMOBILE = '#nav_automobile'
const BTN_INSURANT = '#enterinsurantdata'
const BTN_PRODUCT = '#enterproductdata'
const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_BIRTH_DATE = '#birthdate'
const INPUT_GENDER = '.ideal-radio'
const INPUT_STREET_ADDRESS = '#streetaddress'
const INPUT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const INPUT_OCCUPATION = '#occupation'
const INPUT_HOBBIES = '.idealforms-field-checkbox'
const INPUT_WEBSITE = '#website'
const BTN_NEXT_PRODUCT = '#nextenterproductdata'

Cypress.Commands.add('clicarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})

Cypress.Commands.add('clicarInsurant', () => {
    cy.get(BTN_INSURANT).click()
})

Cypress.Commands.add('preencherDadosInsurant', () => {
    cy.get(INPUT_FIRST_NAME).type(Cypress.env("firstName"), {log: false})
    cy.get(INPUT_LAST_NAME).type(Cypress.env("lastName"), {log: false})
    cy.get(INPUT_BIRTH_DATE).type(Cypress.env("dateBirth"), {log: false})
    cy.get(INPUT_GENDER).eq(1).click({ log: false })
    cy.get(INPUT_STREET_ADDRESS).type(Cypress.env("streetAddress"), {log: false})
    cy.get(INPUT_COUNTRY).select(Cypress.env("country"), {log: false})
    cy.get(INPUT_ZIP_CODE).type(Cypress.env("zipCode"), {log: false})
    cy.get(INPUT_CITY).type(Cypress.env("city"), {log: false})
    cy.get(INPUT_OCCUPATION).select(Cypress.env("occupation"), {log: false})
    cy.get(INPUT_HOBBIES).eq(0).click({ log: false })
    cy.get(INPUT_WEBSITE).type(Cypress.env("website"), {log: false})
})

Cypress.Commands.add('clicarNextProduct', () => {
    cy.get(BTN_NEXT_PRODUCT).click()
})

Cypress.Commands.add('validarRedirecProduct', () => {
    const productData = "Product Data"
    cy.get(BTN_PRODUCT).should('contain', productData)
})