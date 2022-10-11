const prompt = require("prompt-sync")()

const password = prompt("Senha: ")

let upperCaseLetter = 0;
let lowerCaseLetter = 0;

for (const letter of password) {
    if ((/[a-z]/).test(letter)) {
        lowerCaseLetter++
    } else if ((/[A-Z]/).test(letter)) {
        upperCaseLetter++
    }
}

if (password < 8 || upperCaseLetter == 0 || lowerCaseLetter == 0) {
    console.log('Erro: Senha deve conter no mínimo 8 caracteres, letras minúsculas e maiúsculas.')
} else {
    console.log('Senha definida com sucesso!')
}


// Ler uma senha e informar se ela é válida ou não. Para ser válida a senha deve conter letras maiúsculas e minúsculas e,
// no mínimo, 8 caracteres.
