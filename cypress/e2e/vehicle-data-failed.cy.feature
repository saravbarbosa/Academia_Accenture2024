#utf-8
#language: pt

Funcionalidade: Preenchimento do formulário das abas da página Tricents
    Cenário: Preenchimento mal sucedido do formulário da aba Enter Vehicle Data 
        Dado que o usuário está na página 'Tricents'
        E o usuário clica em Automobile
        Quando o usuário preenche os dados de Vehicle Data de forma incorreta
        Então é exibida uma mensagem de erro