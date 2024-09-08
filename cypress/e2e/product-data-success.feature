#utf-8
#language: pt

Funcionalidade: Preenchimento do formulário das abas da página Tricents
    Cenário: Validação de preenchimento do formulário da aba Enter Product Data e redirecionamento com sucesso
        Dado que o usuário está na página 'Tricents'
        E o usuário clica em Automobile
        E o usuário clica em Product Data
        Quando o usuário preenche os dados de Product Data
        E o usuário clica em Next Price Option
        Então o usuário é redirecionado para página Select Price Option