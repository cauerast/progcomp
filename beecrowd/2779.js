var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let total = parseInt(lines[0]);
let fig = parseInt(lines[1]);
let figsCompradas = new Set();

for(let i = 2; i <= fig + 1; i++){
    figsCompradas.add(lines[i]);
}

let faltam = total - figsCompradas.size 

console.log(faltam);