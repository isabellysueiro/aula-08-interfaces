export class Veiculo<T> {
    constructor(
        public marca: string,
        public modelo: string,
        public ano: number
    ) {}

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAno(): number {
        return this.ano;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
}