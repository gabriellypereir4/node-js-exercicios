// Faça um algoritmo que receba o tamanho do lado de um quadrado e mostre sua área(A = L²)

let prompt = require('prompt-sync')()

let lado = prompt('Qual o tamanho do lado do seu quadrado? ')
let area = lado * lado 

console.log(area)