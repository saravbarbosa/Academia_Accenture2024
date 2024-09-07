import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('o usuário clica em Product Data', () => {
    cy.clicarProductData()
})

When('o usuário preenche os dados de Product Data', () => {
    cy.preencherDadosProduct()
})

And('o usuário clica em Next Price Option', () => {
    cy.clicarNextPriceOption()
})

Then('o usuário é redirecionado para página Select Price Option', () => {
    cy.validarRedirecPrice()
})