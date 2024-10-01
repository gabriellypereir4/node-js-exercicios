//Elabore um algoritmo que leia um número qualquer digitado pelo usuário e calcule 
//seu Fatorial. (Exemplo: 5! = 5 x 4 x 3 x 2 x 1)

let prompt = require('prompt-sync')()

let numero = parseInt(prompt('Digite um número: '))
let resultado = 1

for (let contador = 1; contador < numero + 1; contador++) {
    resultado = contador * resultado
}

console.log(resultado)