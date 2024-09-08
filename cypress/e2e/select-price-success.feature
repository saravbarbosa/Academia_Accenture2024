#utf-8
#language: pt

Funcionalidade: Preenchimento do formulário das abas da página Tricents
    Cenário: Validação de preenchimento do formulário da aba Select Price Option e redirecionamento com sucesso
        Dado que o usuário está na página 'Tricents'
        E o usuário clica em Automobile
        E o usuário preenche os dados de Vehicle Data
        E o usuário clica em Next Insurant
        E o usuário é redirecionado para página Enter Insurant Data
        E o usuário preenche os dados de Insurant Data
        E o usuário clica em Next Product
        E o usuário é redirecionado para página Enter Product Data
        E o usuário preenche os dados de Product Data
        E o usuário clica em Next Price Option
        E o usuário é redirecionado para página Select Price Option
        Quando o usuário preenche o Price Option
        Então é apresentada a mensagem de Quote para o usuário
