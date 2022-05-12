Feature: Remover usuário
Como uma pessoa qualquer
Desejo remover um usuário
Para que suas informações não estejam mais registradas

    Scenario: Remover usuário com sucesso
        Given acesso a página de lista de usuários
        When clico no botão de remover
        And clico em confirmar
        Then visualizo uma mensagem
        | mensagemSucesso | Usuário removido! |

    Scenario: Cancelar remover usuário
        Given acesso a página de lista de usuários
        When clico no botão de remover
        And clico em Cancelar
        Then sou direcionado a tela de lista de usuários

    

    

    
        