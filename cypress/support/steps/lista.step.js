import{atualizarPage} from "../pages/listaPage.po"

Given ("acessei a tela de lista de usuário", () => {
    atualizarPage.acessarPagina();
})

When ("clico no botão novo", () => {
    atualizarPage.botaoNovo()
})

When ("clico no botão Próxima", () => {
    atualizarPage.botaoProxima()
})