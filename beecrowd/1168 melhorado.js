var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// input e variaveis
let cases = parseInt(lines[0]);
let valor = [];
let valorUni = [];

// formatação de dados
for(let i = 1; i <= cases; i++){
    valor.push(lines[i]);
    valorUni.push(valor[i - 1].split("")); // array de arrays = matriz
}


// verifica n de leds
let leds = [];

for(let i = 0; i < cases; i++){ 
    leds[i] = 0;
    for(let j = 0; j < valor[i].length; j++){
        
        switch(valorUni[i][j]){
            case '0':
                leds[i] += 6;
                break;
            case '1':
                leds[i] += 2;
                break;
            case '2':
                leds[i] += 5;
                break;
            case '3':
                leds[i] += 5;
                break;
            case '4':
                leds[i] += 4;
                break;
            case '5':
                leds[i] += 5;
                break;
            case '6':
                leds[i] += 6;
                break;
            case '7':
                leds[i] += 3;
                break;
            case '8':
                leds[i] += 7;
                break;
            case '9':
                leds[i] += 6;
                break;
            default: leds[i] += 0;
        }
    }
}

// output
for(let i = 0; i < cases; i++){
    console.log(`${leds[i]} leds`)
}



