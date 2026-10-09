import { PessoaProps } from "../interface/PessoaProps.js"

export class PessoaFisica<T extends PessoaProps = PessoaProps> {

    constructor(protected props: T) { }

    public get getNome(): string { return this.props.nome; }
    public get getCpf(): string { return this.props.cpf; }
    public get getTelefone(): string { return this.props.telefone; }
    public get getEmail(): string { return this.props.email; }
    public get getDataNasc(): string { return this.props.dataNasc; }

    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n ERRO: O campo não deve estar vazio!");
            return;
        }
        this.props.nome = novoNome;
    }

    public set setCpf(novoCpf: string) {
        if (novoCpf.trim().length === 0) {
            console.log("\n ERRO: O campo não deve estar vazio!");
            return;
        }
        this.props.cpf = novoCpf;
    }

    public set setTelefone(novoTelefone: string) {
        if (novoTelefone.trim().length === 0) {
            console.log("\n ERRO: O campo não deve estar vazio!");
            return;
        }
        this.props.telefone = novoTelefone;
    }

    public set setEmail(novoEmail: string) {
        if (novoEmail.trim().length === 0) {
            console.log("\n ERRO: O campo não deve estar vazio!");
            return;
        }
        this.props.email = novoEmail;
    }

    public set setDataNasc(novoDataNasc: string) {
        if (novoDataNasc.trim().length === 0) {
            console.log("\n ERRO: O campo não deve estar vazio!");
            return;
        }
        this.props.dataNasc = novoDataNasc;
    }
}