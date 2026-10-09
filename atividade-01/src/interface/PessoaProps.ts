export interface PessoaProps {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    dataNasc: string;
}

export interface EstagiarioProps extends PessoaProps {
    instituicaoEnsino: string;
    bolsaAuxilio: string;
} 


