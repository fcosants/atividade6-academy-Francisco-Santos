Feature: Listar usuários
 Como uma pessoa qualquer
 Desejo consultar todos os usuários cadastrados
 Para ter as informações de todos os usuários
    
    Scenario: Botão Novo
       Given acessei a tela de lista de usuário
       When clico no botão Novo
       Then sou redirecionado para a página de cadastrado

   Scenario: Botão Próxima
      Given acessei a tela de lista de usuário
      When clico no botão Próxima
      Then sou redirecionado para a página seguinte

   Scenario: Botão Anterior
      Given acessei a tela de lista de usuário
      When clico no botão Próxima
      And clico no botão Anterior
      Then sou redirecionado para a página anterior da lista de usuários
