//Elabore um algoritmo que solicite que o usuário entre com 100 números inteiros 
//quaisquer. Imprima a soma dos números digitados.

let prompt = require('prompt-sync')()

let numero = 0
let resultado = 0

for (let contador = 0; contador < 10; contador++) {
    numero = parseInt(prompt('Digite um número: '))
    resultado = numero + resultado
}

console.log(resultado)