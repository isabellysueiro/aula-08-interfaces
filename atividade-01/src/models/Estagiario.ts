import { PessoaFisica } from "./PessoaFisica.js";
import { EstagiarioProps } from "../interface/PessoaProps.js";

export class Estagiario extends PessoaFisica<EstagiarioProps> {

    constructor(props: EstagiarioProps) {
        super(props);
    }

    public get getInstituicaoEnsino(): string { return this.props.instituicaoEnsino; }

    public set setInstituicaoEnsino(novaInstituicaoEnsino: string) {
        if (novaInstituicaoEnsino.trim().length === 0) {
        console.log("\n ERRO: A instituição de ensino deve ser informada!");
        return;
        }
this.props.instituicaoEnsino = novaInstituicaoEnsino;
    }

    public get getBolsaAuxilio(): string { return this.props.bolsaAuxilio; }

    public set setBolsaAuxilio(novaBolsaAuxilio: string) {
        if (novaBolsaAuxilio.trim().length === 0) {
            console.log("\n ERRO: O campo deve ser preenchido!");
            return;
        }
        this.props.bolsaAuxilio = novaBolsaAuxilio;
    }
}