import { PessoaFisicaProps } from "./src/interfaces/PessoaProps.js";

export interface ClienteProps extends PessoaFisicaProps {
    clienteDesde: string;
}