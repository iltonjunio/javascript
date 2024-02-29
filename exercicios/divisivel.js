const prompt =require("prompt-sync")()

const numero = Number(prompt("Informe o valor: "))

let mensagem = ""

if (numero % 2 === 0) {
    mensagem += "O número é divisível por 2. "
}

if (numero % 3 === 0) {
    mensagem += "O número é divisível por 3. "
}

if (numero % 5 === 0) {
    mensagem += "O número é divisível por 5. "
}

if (numero % 6 === 0) {
    mensagem += "O número é divisível por 6. "
}

if (mensagem === "") {
    mensagem = "O número não é divisível por 2, 3, 5 ou 6."
}

console.log(mensagem)
