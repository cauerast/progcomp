var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n').map(Number);

let par = [];
let impar = [];

for(let i = 0; i < lines.length; i++) {

    if(lines[i] % 2 === 0) {
        par.push(lines[i]);
        if(par.length === 5) {
            for(let j = 0; j < par.length; j++) {
                console.log(`par[${j}] = ${par[j]}`);
            }
            par = []; 
        }
    }
    else{
        impar.push(lines[i]);
        if(impar.length === 5) {
            for(let j = 0; j < impar.length; j++) {
                console.log(`impar[${j}] = ${impar[j]}`);
            }
            impar = []; 
        }
    }
}

for(let i = 0; i < impar.length; i++) {
    console.log(`impar[${i}] = ${impar[i]}`);
}
for(let i = 0; i < par.length; i++) {
    console.log(`par[${i}] = ${par[i]}`);
}