import { Veiculo } from "./Veiculo.js";

export class Carro extends Veiculo<"Carro"> {
    constructor(
        marca: string,
        modelo: string,
        ano: number,
        public quantidadePortas: number
    ) {
        super(marca, modelo, ano);
    }

    getQuantidadePortas(): number {
        return this.quantidadePortas;
    }

    setQuantidadePortas(qtd: number): void {
        this.quantidadePortas = qtd;
    }
}