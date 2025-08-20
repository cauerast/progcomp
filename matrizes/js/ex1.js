// ex 1 by Cauê Silva Rasteiro - 26033 - C.C

function ex1(){

    let matriz = [];
    let pares = [];
    let soma = 0;
    
    // input
    for(let i = 0; i < 3; i++){
        matriz[i] = [];
        for(let j = 0; j < 3; j++){
            matriz[i][j] = parseInt(Math.random() * 10)
        }
    }
    
    let qtdPares = 0;

    // sum 
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            soma += matriz[i][j]
            
            if(matriz[i][j] % 2 === 0){
                pares.push(matriz[i][j]);
                qtdPares++;
            }
        }
    }

    let diagSec = [];

    for(let i = 0; i < matriz.length; i++){
        diagSec.push(matriz[i][(matriz[i].length - 1) - i]);
    }

    console.log("soma de todos os elementos: " + soma);
    console.log("quantidade de numeros pares: " + qtdPares + " | numeros pares: " + pares.join(", "));
    console.log("valores da diagonal secundaria: " + diagSec.join(", "));

}