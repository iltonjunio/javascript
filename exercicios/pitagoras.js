const prompt =require("prompt-sync")()

let co = Number(prompt("Qual o valor do cateto adjacente? "))
let ca = Number(prompt("Qual o valor do cateto oposto? "))

// PROCESSAMENTO:
let h = Math.sqrt(Math.pow(co, 2) + Math.pow(ca, 2))

// SAIDA:
console.log("O valor da hipotenusa é: " + h)