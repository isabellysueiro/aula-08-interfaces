import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo<"Moto"> {
    constructor(
        marca: string,
        modelo: string,
        ano: number,
        public cilindradas: number
    ) {
        super(marca, modelo, ano);
    }

    getCilindradas(): number {
        return this.cilindradas;
    }

    setCilindradas(cc: number): void {
        this.cilindradas = cc;
    }
}