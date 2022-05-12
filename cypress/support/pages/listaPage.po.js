class ListaPage {
    dadosCriar = ".sc-himrzO fhGhLZ";

    acessarPagina() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users")
    }

    botaoNovo() {
        cy.contains([href="/novo"], "Novo").click();
    }

    botaoProxima() {
        cy.contains("button", "Próxima").click();
    }
}

export var listaPage = new ListaPage

