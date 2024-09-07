import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário está na página {string}', () => {
    cy.visit('/app.php')
})

And('o usuário clica em Automobile', () => {
    cy.clicarAutomobile()
})

When('o usuário preenche os dados de Vehicle Data', () => {
    cy.preencherDadosVehicle()
})

And('o usuário clica em Next Insurant', () => {
    cy.clicarNextInsurant()
})

Then('o usuário é redirecionado para página Enter Insurant Data', () => {
    cy.validarRedirecInsurant()
})