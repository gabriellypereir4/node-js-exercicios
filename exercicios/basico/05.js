// Faça um algoritmo  que recebe a quantidade de cavalos para calcular quantas 
//ferraduras são necessárias para equipar todos os cavalos comprados para um haras

let prompt = require('prompt-sync')()

let quantCavalos = prompt('Escreva a quantidade de cavalos: ')
let ferraduras = quantCavalos * 4

console.log('A quantidade de ferraduras necessárias são ' + ferraduras)