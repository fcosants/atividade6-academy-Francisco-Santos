Feature: Atualizar um usuário
Como uma pessoa qualquer
Desejo atualizar as informações de determinado usuário
Para ter o registro de suas informações atualizadas

    Scenario: Atualizar Usuario pelo nome
       Given acessei a tela de lista de usuário
       And clico no botão ver detalhes
       And clico no botão editar
       When preencho o campo nome
       | nome  | Luffy  |
       And clico no botão de salvar
       Then visualizo uma mensagem de sucesso
       | mensagemSucesso | Informações atualizadas com sucesso |
       And sou redirecionado para a página de lista de usuários

    Scenario: Atualizar Usuario pelo e-mail
       Given acessei a tela de lista de usuário
       And clico no botão ver detalhes
       And clico no botão editar
       When preencho o campo email
       | email  | luffy@google.com  |
       And clico no botão de salvar
       Then visualizo uma mensagem de sucesso
       | mensagemSucesso | Informações atualizadas com sucesso |
       And sou redirecionado a página de lista de usuário

    Scenario: Atualizar Usuario com e-mail inválido
       Given acessei a tela de lista de usuário
       And clico no botão ver detalhes
       And clico no botão editar
       When preencho o campo e-mail invalido
       | email  | luffyg.com  |
       And clico no botão de salvar
       Then visualiso uma mensagem de erro
       | mensagemErro | Formato de e-mail inválido |
    
    Scenario: Atualizar usuário com e-mail já utlizado por outro usuário
        Given acessei a tela de lista de usuário
        And clico no botão ver detalhes
        And clico no botão editar
        When preencho o campo e-mail já utilizado
        | email  | luffy@g.com |
        And clico no botão de salvar
        Then visualiso uma mensagem de erro
        | mensagemErro | Este e-mail já é utilizado por outro usuário |

    Scenario: Atualizar o nome de usuário com mais de 100 caracteres.
        Given acessei a tela de lista de usuário
        And clico no botão ver detalhes
        And clico no botão editar
        When preencho o campo nome com mais de 100 caracteres
        | nome | LuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffyLuffy |
        And clico no botão de salvar
        Then visualiso uma mensagem de erro
        | mensagemErro | Informe no máximo 100 caracteres para o nome |
    
    Scenario: Atualizar um e-mail com mais de 60 caracteres
        Given acessei a tela de lista de usuário
        And clico no botão ver detalhes
        And clico no botão editar
        When preencho o campo email com mais de 60 caracteres
        | email | luffyluffyluffyluffyluffyluffyluffyluffyluffyluffyluffyluffy@g.com |
        And clico no botão de salvar
        Then visualiso uma mensagem de erro
        | mensagemErro | Informe no máximo 60 caracteres para o e-mail |
    