//Faça um algoritmo que receba dois números e mostre a soma deles na tela (use 
//parseInt() para converter o dado recebido para inteiro)
let prompt = require('prompt-sync')()

let numero1 = parseInt (prompt('Digite um número: '))
let numero2 = parseInt (prompt('Digite um número: '))
let soma = numero1 + numero2

console.log('O resultado da sua soma é ' + soma)