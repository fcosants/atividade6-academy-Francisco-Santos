class AtualizarPage {
    inputNome = ".inputName"
    inputEmail = "#userEmail"
    botaoEditar = "button"
    botaoSalvar = "submit"
    botaoVerDetalhes = ".sc-fLlhyt"

    acessarPagina() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users")
    }

    clicarVerDetalhes() {
        cy.contains("a", "Ver detalhes").click();
    }

    clicarEditar() {
        cy.contains(this.botaoEditar, "Editar").click();
    }

    preencherNome (nome) {
        cy.get(this.inputNome).clear().type(nome);
    }

    clicarSalvar() {
        cy.contains(".sc-iqcoie", "Salvar").click();
    }

    mensagemDeSucesso(mensagemSucesso) {
        cy.contains(mensagemSucesso).should("be.visible");

    }

    redirecionadoPagina() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users")
    }

    preencherEmail(email) {
        cy.get(this.inputEmail).clear().type(email);
    }

    emailInvalido(email) {
        cy.get(this.inputEmail).clear().type(email);
    }

    preencherNome100Caracteres(nome) {
        cy.get(this.inputNome).clear().type(nome);
    }

    mensagemDeErro(mensagemErro) {
        cy.contains(mensagemErro).should("be.visible");
    }

    preencherEmail60Caracteres(email) {
        cy.get(this.inputEmail).clear().type(email)
    }

    emailUtilizado(email) {
        cy.get(this.inputEmail).clear().type(email);
    }
}

export var atualizarPage = new AtualizarPage