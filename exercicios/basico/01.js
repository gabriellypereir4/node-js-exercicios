//Faça um algoritmo que receba o nome e idade do usuário depois mostre ele na tela
let prompt = require('prompt-sync')()

let nome = prompt('Qual é o seu nome? ')
let idade = prompt('Qual é o sua idade? ')

console.log('Seu nome é ' + nome, 'e você tem ' + idade + ' anos.')