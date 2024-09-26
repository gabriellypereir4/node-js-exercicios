//Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso 
//seja ímpar, imprimir o resultado desta operação.

let prompt = require('prompt-sync')()

let numero = parseInt(prompt('Digite um número: '))
let resultado = 0

if(numero % 2 == 0) {
    resultado = numero + 5
} else {
    resultado = numero + 8
}

console.log(resultado)