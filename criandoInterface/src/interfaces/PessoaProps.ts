export interface PessoaFisicaProps {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    dataNasc: string;
}

export interface ClienteProps extends PessoaFisicaProps {
    clienteDesde: string;
}


export interface FuncionarioProps extends PessoaFisicaProps {
    registro: string;
    carteiraTrabalho: string;
    pis: string;
}