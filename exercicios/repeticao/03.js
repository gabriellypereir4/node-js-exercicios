//Elabore um algoritmo que solicite que o usuário entre com dois números (inicial e 
//final). Ao final o algoritmo deverá apresentar o valor total da soma de todos os 
//números do intervalo digitado pelo usuário

let prompt = require('prompt-sync')()

let numero1 = parseInt(prompt('Digite um número: '))
let numero2 = parseInt(prompt('Digite um número: '))
let resultado = 0

for (let contador = numero1 + 1; contador < numero2; contador++) {
    resultado = contador + resultado
}

console.log(resultado)