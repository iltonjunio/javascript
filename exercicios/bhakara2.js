const prompt =require("prompt-sync")()

      // ENTRADA:
      const a = Number(prompt("Informe o valor do termo A: "))
      const b = Number(prompt("Informe o valor do termo B: "))
      const c = Number(prompt("Informe o valor do termo C: "))
      
      // PROCESSAMENTO
      let delta = (b * b) - (4 * a * c);
      

      if (a == 0){
        console.log("Esta não é uma ecuação do segundo grau ")
        return false
      }

      else if (delta < 0){ 
        console.log("Esta equação não possui raizes, ou seja, suas raizes são numeros complexos")
        return false
      }
      else {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log("X1: " + x1.toFixed(1) + ", X2: " + x2.toFixed(1))
      }
