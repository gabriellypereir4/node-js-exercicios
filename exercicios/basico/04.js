//Em uma partida de LOL um jogador ganha 2 de ouro por segundo, pergunte ao 
//usuário quantos minutos de partida tem e informe a ele quanto de ouro foi acumulado

let prompt = require('prompt-sync')()

let minutos = prompt('Quantos minutos tem sua partida de lolzin? ')
let ouro =  (minutos * 60 * 2)

console.log('Na sua partida de lolzinho vc obteve ' + ouro)