class RemoverPage {
    botaoRemover = ".jtUTSS"
    botaoCancelar = "button"
    botaoConfirmar = "button"

    acessarPagina () {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    clicarRemover () {
        cy.get(this.botaoRemover).click()
    }

    clicarConfirmar () {
        cy.contains(this.botaoConfirmar, "Confirmar").click()
    }

    mensagemDeSucesso (mensagemSucesso) {
        cy.contains(mensagemSucesso).should("be.visible");
    }

    clicarCancelar () {
        cy.contains(this.botaoCancelar, "Cancelar").click()
    }

    redirecionadoAPagina () {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users")
    }
}

export var removerPage = new RemoverPage