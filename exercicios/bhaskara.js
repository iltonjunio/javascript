const prompt =require("prompt-sync")()

      // ENTRADA:
      let a = Number(prompt("Informe o valor do termo A: "))
      let b = Number(prompt("Informe o valor do termo B: "))
      let c = Number(prompt("Informe o valor do termo C: "))
      
      // PROCESSAMENTO
      let delta = (b * b) - (4 * a * c);
      let x1 = (-b - Math.sqrt(delta)) / (2 * a)
      let x2 = (-b + Math.sqrt(delta)) / (2 * a)
      
      // SAIDA
      console.log("X1: " + x1.toFixed(1) + ", X2: " + x2.toFixed(1))