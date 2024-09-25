//Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre: 
//a) a idade dessa pessoa em anos; 
//b) a idade dessa pessoa em meses; 
//c) a idade dessa pessoa em semanas. Suponha que um ano tem 52 semanas sempre 
//d) a idade dessa pessoa em dias. Suponha que um ano tem 365 dias sempre

let prompt = require('prompt-sync')()

let anoNascimento = prompt('Qual seu ano de nascimento? ')
let anoAtual = 2024
let mesesAno = 12
let semanasAno = 52
let diasAno = 365

let anos = anoAtual - anoNascimento
let meses = mesesAno * anoNascimento
let semanas = anoNascimento * semanasAno
let dias = anoNascimento * diasAno

console.log('Sua idade em anos é ' + anos)
console.log('Sua idade em meses é ' + meses)
console.log('Sua idade em semanas é ' + semanas)
console.log('Sua idade em dias é ' + dias)