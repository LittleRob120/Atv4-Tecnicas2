import { Home } from './pages/home';
import { ListagemClientes } from './pages/clientes/listagemClientes';
import { CadastroCliente } from './pages/clientes/cadastroCliente';
import { DetalhesCliente } from './pages/clientes/detalhesCliente';
import { ListagemAcomodacoes } from './pages/acomodacoes/listagemAcomodacoes';
import { CadastroAcomodacao } from './pages/acomodacoes/cadastroAcomodacao';
import { ListagemHospedagens } from './pages/hospedagens/listagemHospedagens';
import { CadastroHospedagem } from './pages/hospedagens/cadastroHospedagem';

const routes = {
    '/': Home,
    '/clientes': ListagemClientes,
    '/clientes/cadastro': CadastroCliente,
    '/clientes/detalhes': DetalhesCliente,
    '/acomodacoes': ListagemAcomodacoes,
    '/acomodacoes/cadastro': CadastroAcomodacao,
    '/hospedagens': ListagemHospedagens,
    '/hospedagens/cadastro': CadastroHospedagem,
};

export function router(path) {
    const page = routes[path] || Home;
    return page();
}