import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";

// Criando um carro
const carro = new Carro("Toyota", "Corolla", 2024, 4);

console.log("=== CARRO ===");
console.log("Marca:", carro.getMarca());
console.log("Modelo:", carro.getModelo());
console.log("Ano:", carro.getAno());
console.log("Quantidade de portas:", carro.getQuantidadePortas());

// Criando uma moto
const moto = new Moto("Honda", "CB 500", 2023, 500);

console.log("\n=== MOTO ===");
console.log("Marca:", moto.getMarca());
console.log("Modelo:", moto.getModelo());
console.log("Ano:", moto.getAno());
console.log("Cilindradas:", moto.getCilindradas());

// Alterando informações
carro.setMarca("Volkswagen");
moto.setCilindradas(750);

console.log("\n=== APÓS ALTERAÇÕES ===");
console.log("Marca do carro:", carro.getMarca());
console.log("Cilindradas da moto:", moto.getCilindradas());