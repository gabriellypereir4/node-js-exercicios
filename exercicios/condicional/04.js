//Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais 
//deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos 
//cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

let prompt = require('prompt-sync')()

let valorA = parseInt(prompt('Digite um valor: '))
let valorB = parseInt(prompt('Digite um valor: '))
let soma = 0

if(valorA == valorB) {
    soma = valorA + valorB
} else {
    soma = valorA * valorB
}

console.log('Seu valor: ' + soma)