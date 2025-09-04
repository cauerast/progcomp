var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines[0]);
let horas = parseInt(lines[1]);
let valor = parseFloat(lines[2]);

let salario = horas * valor;

console.log(`NUMBER = ${num}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);