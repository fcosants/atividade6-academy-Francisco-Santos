import{removerPage} from "../pages/removerPage.po"

Given ("acesso a página de lista de usuários", () => {
    removerPage.acessarPagina();
})

When ("clico no botão de remover", () => {
    removerPage.clicarRemover();
})

And ("clico em confirmar", () => {
    removerPage.clicarConfirmar();
})

Then ("visualizo uma mensagem", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    removerPage.mensagemDeSucesso(dadosTabela.mensagemSucesso);
})

And ("clico em Cancelar", () => {
    removerPage.clicarCancelar();
})

Then ("sou direcionado a tela de lista de usuários", () => {
    removerPage.redirecionadoAPagina();
})