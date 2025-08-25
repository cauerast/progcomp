// ex 2 by Cauê Silva Rasteiro - 26033 - C.C

function ex2(){
    let matriz = [];
    let nomeVendedor = [];

    // input
    for(let i = 0; i < 4; i++){
        matriz[i] = [];
        nomeVendedor[i] = prompt(`Insira o nome do vendedor ${i}: `);
        for(let j = 0; j < 7; j++){
            matriz[i][j] = parseInt(Math.random() * 100);
        }
    }

    // output da matriz
    console.log(matriz)

    // total vendido por vendedor
    let vendasVendedor = [];
    for(let i = 0; i < matriz.length; i++){
        vendasVendedor[i] = 0;
    }
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            vendasVendedor[i] += matriz[i][j];
        }
    }
    // output vendasVendedor
    for(let i = 0; i < 4; i++){
        console.log(`Total vendido pelo vendedor ${i} (${nomeVendedor[i]}): R$${vendasVendedor[i]}`);
    }


    // total vendido por dia da semana
    let vendasDiaSemana = [];
    for(let i = 0; i < matriz.length; i++){
        vendasDiaSemana[i] = 0;
    }
    for(let j = 0; j < matriz[0].length; j++){
        for(let i = 0; i < matriz.length; i++){
            vendasDiaSemana[j] += matriz[i][j];
        }
    }
    // output vendasDiaSemana
    for(let i = 0; i < matriz.length; i++){
        console.log(`Total vendido no dia ${i} da semana: R$${vendasDiaSemana[i]}`);
    }


    //maior valor da matriz e sua posicao | soma geral de todos os valores da matriz
    let maiorValor = matriz[0][0];
    let posicao = ``;
    let somaTotal = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maiorValor){
                maiorValor = matriz[i][j];
                posicao = `vendedor: ${i} (${nomeVendedor[i]}), no dia ${j} \n[linha: ${i}, coluna: ${j}]`;
            }
            somaTotal += matriz[i][j];
        }
    }

    console.log(`Maior valor individual de venda: R$`, maiorValor, "\n" , posicao);
    console.log("Media geral: ", somaTotal);
    


}