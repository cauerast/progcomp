var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let set = new Set();
let qtdSpaces = parseInt(lines[0]);

for(let i = 2; i <= lines.length - 2; i++){
    set.add(lines[i])
}   

console.log(qtdSpaces - set.size)