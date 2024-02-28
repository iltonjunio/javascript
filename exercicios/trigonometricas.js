const prompt =require("prompt-sync")()
//Entrada
let co = Number(prompt("Qual o valor do cateto adjacente? "))
let ca = Number(prompt("Qual o valor do cateto oposto? "))

// PROCESSAMENTO:
let h = Math.sqrt(Math.pow(co, 2) + Math.pow(ca, 2))
let s = ca / h
let c = co / h
let t = ca / co

// SAIDA:
// console.log("O valor da hipotenusa é: " + h);

console.log("valor da trigonométrica é: " + s, c, t )