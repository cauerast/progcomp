let matriz = [];
let pares = 0;

for(let i = 0; i < 3; i++){
    matriz[i] = [];
    for(let j = 0; j < 3; j++){
        matriz[i][j] = parseInt(Math.random() * 10)
    }
}

//mostra matriz
console.log(matriz)

// soma e pares
let soma = 0
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        soma += matriz[i][j];

        if(matriz[i][j] % 2 === 0){
            pares++
        }
    }
}

let diagPrincipal = []
for(let i = 0; i < matriz.length; i++){
    diagPrincipal.push(matriz[i][i])
}

console.log(diagPrincipal.join(" "))


let diagSec = []
for(let i = 0; i < matriz.length; i++){
    diagSec.push(matriz[i][matriz.length - 1 - i])
}

console.log(diagSec.join(" "));

console.log(matriz);