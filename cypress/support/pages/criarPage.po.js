class CriarPage{
    dadosCriar = ".sc-himrzO fhGhLZ";
    inputNome = "input.sc-hAZoDl#name";
    inputEmail = "#email";
    botaoVoltarLista = ".sc-gsnTZi beUAqQ";
    botaoSalvar = ".sc-iqcoie"
    

    acessarPagina (){
        cy.visit("https://academy-crud-frontend.herokuapp.com/users/novo");
    }

    clicarSalvar (){
        cy.get(this.botaoSalvar).click();
    }

    preencherFormulario (nome, email) {
       cy.get(this.inputNome).type(nome);
       cy.get(this.inputEmail).type(email);
    }
    
    preencherEmailUtilizado (nome1, email1) {
        cy.get(this.inputNome).type(nome1);
        cy.get(this.inputEmail).type(email1);
     }

    mensagemDeSucesso (mensagemSucesso) {
        cy.contains(mensagemSucesso).should("be.visible");
        
    }

    mensagemDeErro (mensagemErro) {
        cy.contains(mensagemErro).should("be.visible");
    }

    preencherFormularioInvalido () {
        cy.get(this.inputNome).type(Goku);
        cy.get(this.inputEmail).type(gokug.com);
    }

    preencherNome100Caracteres (nome){
        cy.get(this.inputNome).type(nome);
    }

    preencherEmail (email) {
        cy.get(this.inputEmail).type(email);
    }

    preencherNome (nome) {
        cy.get(this.inputNome).type(nome);
    }

    preencherEmail60Caracteres (email) {
        cy.get(this.inputEmail).type(email);
    }

    clicarVoltar () {
        cy.contains("a", "Voltar").click();
    }

    redirecionadoAPagina () {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users")
    }
    
}   

export var criarPage = new CriarPage