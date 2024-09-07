#utf-8
#language: pt

Funcionalidade: Preenchimento do formulário das abas da página Tricents
    Cenário: Validação de preenchimento do formulário da aba Enter Insurant Data com sucesso
        Dado que o usuário está na página 'Tricents'
        E o usuário clica em Automobile
        E o usuário clica em Insurant
        Quando o usuário preenche os dados de Insurant Data
        E o usuário clica em Next Product
        Então o usuário é redirecionado para página Enter Product Data