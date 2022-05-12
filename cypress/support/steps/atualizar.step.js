import{atualizarPage} from "../pages/atualizarPage.po"

Given ("acessei a tela de lista de usuário", () => {
    atualizarPage.acessarPagina();
})

And ("clico no botão ver detalhes", () => {
    atualizarPage.clicarVerDetalhes();
})

And ("clico no botão editar", () => {
    atualizarPage.clicarEditar();
})

When ("preencho o campo nome", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.preencherNome(dadosTabela.nome);
})

When ("preencho o campo email", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.preencherEmail(dadosTabela.email);
})

And ("clico no botão de salvar", () => {
    atualizarPage.clicarSalvar();
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/102a8ed9-3b19-40b7-b6b6-9010c9474c6e", {
        statusCode: 200,
            body:{
            id:"102a8ed9-3b19-40b7-b6b6-9010c9474c6e",
            name:"Cansado",
            email:"paocomsalame@pao.com",
            createdAt:"2022-05-11T01:30:51.353Z",
            updatedAt:"2022-05-11T20:16:19.552Z"
        }
    })
})

Then ("visualizo uma mensagem de sucesso", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.mensagemDeSucesso(dadosTabela.mensagemSucesso)
})

And ("sou redirecionado para a página de lista de usuários", () => {
    atualizarPage.redirecionadoPagina();
})

When ("preencho o campo e-mail invalido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.emailInvalido(dadosTabela.email);
})

When ("preencho o campo e-mail já utilizado", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.emailUtilizado(dadosTabela.email);
})

When ("preencho o campo nome com mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.preencherNome100Caracteres(dadosTabela.nome);
})

Then ("visualiso uma mensagem de erro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.mensagemDeErro(dadosTabela.mensagemErro);
})

When ("preencho o campo email com mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.preencherEmail60Caracteres(dadosTabela.email);
})