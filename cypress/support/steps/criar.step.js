import{criarPage} from "../pages/criarPage.po"

Given ("acessei a tela de cadastro", () => {
    criarPage.acessarPagina();
})

When ("preencho os dados do usuário válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulario(dadosTabela.nome, dadosTabela.email);
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        body: {
        id:"639d54ce-2468-4570-97d5-5f9fb52dc43a",
        name:dadosTabela.nome,
        email:dadosTabela.email,
        updatedAt:"2022-05-10T19:51:55.940Z",
        createdAt:"2022-05-10T19:51:55.940Z"}
    })
})

Then ("visualizo uma mensagem de sucesso", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.mensagemDeSucesso(dadosTabela.mensagemSucesso)
})

And ("clico em Salvar", () => {
    criarPage.clicarSalvar();
})

Then ("visualizo uma mensagem de erro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.mensagemDeErro(dadosTabela.mensagemErro)
})

When ("preencho o e-mail invalido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulario(dadosTabela.nome, dadosTabela.email);
})


When ("preencho o e-mail já utilizado", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherEmailUtilizado(dadosTabela.nome1, dadosTabela.email1);
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users",{
        statusCode: 422,
    })
})

When ("preencho o campo com mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulario(dadosTabela.nome, dadosTabela.email);
})

And ("preencho o campo email", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherEmail(dadosTabela.email);
})

When ("preencho o campo nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherNome(dadosTabela.nome);
})

And ("preencho o campo com mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();  
    criarPage.preencherFormulario(dadosTabela.email)
})

When ("clico no botão voltar", () => {
    criarPage.clicarVoltar();
    
})

Then("sou redirecionado a página de lista de usuário", () => {
    criarPage.redirecionadoAPagina();
})
