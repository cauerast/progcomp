var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);

let totalReceber = (salario + (totalVendas * 0.15));

console.log(`TOTAL = R$ ${totalReceber.toFixed(2)}`);