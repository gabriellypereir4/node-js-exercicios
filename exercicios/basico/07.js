//Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça 
//um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, 
//calcule e mostre a comissão e o salário final do funcionário.

let prompt = require('prompt-sync')()

let salarioFixo = parseInt(prompt('Digite seu salário fixo: '))
let valorVendas = parseInt(prompt('Digite o valor das suas vendas: '))

let comissao = (valorVendas * 4) / 100
let salarioFinal = comissao + salarioFixo

console.log('Seu salario final é ' + salarioFinal)