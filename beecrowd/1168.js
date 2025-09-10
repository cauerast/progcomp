var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let cases = parseInt(lines[0]);

let leds = {
    '1' : 2,
    '2' : 5,
    '3' : 5,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 3,
    '8' : 7,
    '9' : 6,
    '0' : 6,
}

for(let i = 1; i <= cases; i++){
    let numero = lines[i];
    let soma = 0;
    for(let j = 0; j < numero.length; j++){
        soma += leds[numero[j]]
    }
    console.log(`${soma} leds`)
}