var prompt = require("prompt-sync")()

var senha = prompt("Senha: ")

var tam = senha.length
var maiusculas = 0
var minusculas = 0



for (var i = 0; i < tam; i++) {
    if (senha.charAt(i) >= "a" && senha.charAt(i) <= "z") {
        minusculas++
    } else if (senha.charAt(i) >= "A" && senha.charAt(i) <= "Z") {
        maiusculas++
    }
}



if (tam >= 8 && maiusculas > 0 && minusculas > 0) {
    console.log("Ok! Senha válida")
} else {
    console.log("Senha inválida (tamanho >= 8 e deve conter maiúsculas e minúsculas)")
}

