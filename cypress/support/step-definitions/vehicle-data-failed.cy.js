import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('o usuário preenche os dados de Vehicle Data de forma incorreta', () => {
    cy.preencherListError()
})

Then('é exibida uma mensagem de erro', () => {
    cy.mensagemErro()
})