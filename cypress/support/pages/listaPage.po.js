class ListaPage {


    acessarPagina() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users")
    }

}

export var listaPage = new ListaPage

