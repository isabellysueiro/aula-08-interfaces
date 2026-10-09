import readline from "readline-sync";
import { Estagiario } from "./src/models/Estagiario.js";

console.log("=== CADASTRO DE FUNCIONÁRIO ===");

const novoEstagiario = new Estagiario({
    nome: "Isabelly Sueiro",
    cpf: "484.476.038-65",
    telefone: "15996455575",
    email: "sueiroisabelly@gmail.com",
    dataNasc: "2010-04-30",
    instituicaoEnsino: "SESI",
    bolsaAuxilio: "69"
});

console.log(`\n Estagiário cadastrado: ${novoEstagiario.getNome}`);
console.log(`Registro: ${novoEstagiario.getInstituicaoEnsino}`);

novoEstagiario.setNome = readline.question("\n Digite o nome do novo estagiário: ");
novoEstagiario.setCpf = readline.question("\n Digite o cpf: ");
novoEstagiario.setTelefone = readline.question("\n Digite o telefone do novo estagiário: ");
novoEstagiario.setEmail = readline.question("\n Digite o email do novo estagiário: ");
novoEstagiario.setDataNasc = readline.question("\n Digite a data de nascimento do novo estagiário: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS DO ESTAGIÁRIO            ");
console.log("================================================");

console.log(`Nome:                          ${novoEstagiario.getNome}`);
console.log(`CPF:                           ${novoEstagiario.getCpf}`);
console.log(`Telefone:                      ${novoEstagiario.getTelefone}`);
console.log(`Email:                         ${novoEstagiario.getEmail}`);
console.log(`Data de Nascimento:            ${novoEstagiario.getDataNasc}`);

console.log(`Instituição de ensino:         ${novoEstagiario.getInstituicaoEnsino}`);
console.log(`Bolsa Auxilio:                 ${novoEstagiario.getBolsaAuxilio}`);
