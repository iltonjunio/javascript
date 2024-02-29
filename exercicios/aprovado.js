const prompt =require("prompt-sync")()

const nota1= Number (prompt("informe a nota 1 do aluno: "))
const nota2 = Number (prompt("informe a nota 2 do aluno: "))

const media =  (nota1 + nota2) / 2

if  (media >= 6.0 ) {
  console.log ("Aprovado")
}
