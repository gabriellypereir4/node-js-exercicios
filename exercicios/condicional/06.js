//O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde 
//para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é  
//IMC = peso / ( altura )2
//IMC em adultos Condição 
//Abaixo de 18,5 Abaixo do peso 
//Entre 18,5 e 25 Peso normal 
//Entre 25 e 30 Acima do peso 
//Acima de 30 obeso

let prompt = require('prompt-sync')()

let peso = parseFloat(prompt('Qual é o seu peso: '))
let altura = parseFloat(prompt('Qual é a sua altura: '))
let imc = peso / (altura * altura)

if(imc <= 18.5) {
    console.log('Abaixo do peso')
} else if(imc >= 18.5 && imc <= 25) {
    console.log('Peso normal')
} else if(imc >= 25 && imc <= 30) {
    console.log('Acima do peso')
} else if(imc >= 30) {
    console.log('Obeso')
}



