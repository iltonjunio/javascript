const prompt = require("prompt-sync")() // habilitar o prompt para o usuario

let raio = Number(prompt(""))
const pi = 3.14

console.log("A area do circulo é: ",  (pi * (raio ** 2)))