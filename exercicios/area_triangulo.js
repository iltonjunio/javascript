const prompt = require("prompt-sync")() // habilitar o prompt para o usuario

let base = Number(prompt("Digite o valor da base:"))
let altura = Number(prompt("Digite o valor da altura:"))

console.log("O valor do triangulo é: ", base * altura / 2)