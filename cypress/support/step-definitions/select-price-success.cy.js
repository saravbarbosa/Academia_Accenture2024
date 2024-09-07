import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('o usuário preenche o Price Option', () => {
    cy.preencherPriceOption()
})

Then('é apresentada a mensagem de Quote para o usuário', () => {
    cy.validarPriceOption()
})