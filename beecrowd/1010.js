var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let peca1 = lines[0].split(" ");
let peca2 = lines[1].split(" ");

let cod1 = peca1[0];
let num1 = peca1[1];
let valor1 = peca1[2];

let cod2 = peca2[0];
let num2 = peca2[1];
let valor2 = peca2[2];

let total = (num1 * valor1) + (num2 * valor2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)

