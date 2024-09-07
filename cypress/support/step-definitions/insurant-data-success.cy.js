import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('o usuário clica em Insurant', () => {
    cy.clicarInsurant()
})  

When('o usuário preenche os dados de Insurant Data', () => {
    cy.preencherDadosInsurant()
})

And('o usuário clica em Next Product', () => {
    cy.clicarNextProduct()
})

Then('o usuário é redirecionado para página Enter Product Data', () => {
    cy.validarRedirecProduct()
})