const prompt = require("prompt-sync")() // habilitar o prompt para o usuario

let diagonal1 = Number(prompt("Digite o valor da diagonal: "))
let diagonal2 = Number(prompt("Digite o valor da diagonal2: "))

console.log("O valor do losango é: ", diagonal1 * diagonal2 / 2)