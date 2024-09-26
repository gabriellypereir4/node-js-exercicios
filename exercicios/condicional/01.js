//Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + 
//B é menor que C.

let prompt = require('prompt-sync')()

let valorA = parseInt(prompt('Escreva um número: '))
let valorB = parseInt(prompt('Escreva um número: '))
let valorC = parseInt(prompt('Escreva um número: '))

if((valorA + valorB) < valorC) {
    console.log('Seu valor é menor que C')
} else {
    console.log('Seu valor é maior que C')
}