// Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um 
//algoritmo para ler o preço do litro da gasolina e o valor de pagamento do usuário, 
//depois exiba quantos litros ele conseguiu colocar no tanque (Use o parseFloat para 
//trabalhar com float)

let prompt = require('prompt-sync')()

let valorPagamento = parseFloat(prompt('Qual o valor do pagamento? '))
let precoLitro = parseFloat(prompt('Qual o preço do litro da gasolina? '))

let litros = valorPagamento / precoLitro

console.log('Você tem ' + litros + ' litros no tanque.')