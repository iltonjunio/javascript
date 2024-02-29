const prompt =require("prompt-sync")()

const numero = Number(prompt("Informe o valor: "))

if (numero % 2 === 0) {
  console.log("O número", numero, "é par")
} 
else {
  console.log("O número", numero, "é ímpar")
}