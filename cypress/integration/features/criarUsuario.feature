Feature: Criar usuários
Como uma pessoa qualquer
Desejo registrar informações de usuário
Para poder manipular estas informações livremente

      Scenario: Criar usuário com informações válidas
          Given acessei a tela de cadastro
          When preencho os dados do usuário válido
          | nome  | Goku       |
          | email | goku@g.com |
          And clico em Salvar
          Then visualizo uma mensagem de sucesso
          | mensagemSucesso | Usuário salvo com sucesso! |

     Scenario: Criar usuário com e-mail inválido
         Given acessei a tela de cadastro
         When preencho o e-mail invalido
         | nome  | Goku       |
         | email | gokug.com  |
         And clico em Salvar
         Then visualizo uma mensagem de erro
         | mensagemErro | Formato de e-mail inválido |

      Scenario: Registrar um usuário com e-mail já utilizado
          Given acessei a tela de cadastro
          When preencho o e-mail já utilizado
          | nome1  | sabo       |
          | email1 | sabo@g.com |
          And clico em Salvar
          Then visualizo uma mensagem de erro
          | mensagemErro | Este e-mail já é utilizado por outro usuário |

     Scenario: Cadastrar um nome com mais de 100 caracteres
         Given acessei a tela de cadastro
         When preencho o campo nome com mais de 100 caracteres
         | nome  | ChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChicoChico |
         And preencho o campo email
         | email | gohan@g.com                                                                                                    |
         Then visualizo uma mensagem de erro
         | mensagemErro | Informe no máximo 100 caracteres para o nome |
    
    Scenario: Cadastrar um e-mail com mais de 60 caracteres
        Given acessei a tela de cadastro
        When preencho o campo nome válido
        | nome  | Goku |
        And preencho o campo email com mais de 60 caracteres
        | email |chicochicochicochicochicochicochicochicochicochicochicochico@g.com |
        Then visualizo uma mensagem de erro
        | mensagemErro | Informe no máximo 60 caracteres para o e-mail |

    Scenario: Voltar a página inicial
         Given acessei a tela de cadastro
         When clico no botão voltar
         Then sou redirecionado a página de lista de usuário

    