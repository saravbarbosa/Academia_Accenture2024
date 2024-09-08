#utf-8
#language: pt

Funcionalidade: Preenchimento do formulário das abas da página Tricents
    Cenário: Validação de preenchimento do formulário da aba Enter Vehicle Data e redirecionamento com sucesso
        Dado que o usuário está na página 'Tricents'
        E o usuário clica em Automobile
        Quando o usuário preenche os dados de Vehicle Data
        E o usuário clica em Next Insurant
        Então o usuário é redirecionado para página Enter Insurant Data