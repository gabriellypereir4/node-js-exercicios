//Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

let prompt = require('prompt-sync')()

let numero = parseInt(prompt('Digite um número: '))

if(numero % 2 == 0) {
    console.log('Par')
} else {
    console.log('Impar')
}