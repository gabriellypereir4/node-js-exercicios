//Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso 
//sexo seja ‘F’ e estado civil seja ‘CASADA’, solicitar o tempo de casada (anos)

let prompt = require('prompt-sync')()

let nome = prompt('Qual o seu nome? ')
let sexo = prompt('Qual é o seu sexo? ')
let estadoCivil = prompt('Qual o seu estado civil? ')

if(sexo == 'F' && estadoCivil == 'CASADA') {
    let tempoCasada = prompt('Quanto tempo vc tem de casada? ')
    console.log('Qual o seu tempo de casada em anos?')
    console.log('Você é casada a ' + tempoCasada)
} else {
    console.log('Falso')
}