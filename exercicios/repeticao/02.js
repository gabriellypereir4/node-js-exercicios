//Elabore um algoritmo em que o usuário entre com um número inteiro qualquer, e o 
//software imprima os 20 números subsequentes ao que foi digitado pelo usuário

let prompt = require('prompt-sync')()

let numero = parseInt(prompt('Digite um número: '))

for (let contador = 0; contador < 20; contador++) {
    console.log(numero + contador)
}