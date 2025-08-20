// ex 2 by Cauê Silva Rasteiro - 26033 - C.C

function ex2(){
    let matriz = [];
    let nomeVendedor = [];
    
    for(let i = 0; i < 4; i++){
        matriz[i] = [];
        nomeVendedor[i] = String(prompt(`Insira o nome do vendedor ${i}: `));
        for(let j = 0; j < 7; j++){
            matriz[i][j] = parseInt(Math.random(0) * 1000);
        }
    }
    console.log(matriz);
    
    // soma as linhas (vendas do vendedor)
    let somaLinha = 0;
    let somaTotal = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            somaLinha = matriz[i][j]
            somaTotal += matriz[i][j]
        }
        console.log(`Total vendido pelo vendedor ${nomeVendedor[i]}: `, somaLinha);
        somaLinha = 0;
    }

    //soma as colunas (vendas por dia da semana)
    let somaColuna = 0;
    for(let j = 0; j < 7; j++){
        for(let i = 0; i < 4; i++){
            somaColuna = matriz[i][j]
        }
        console.log(`Total vendido pelo dia ${j} da semana: `, somaColuna);
        somaColuna = 0;
    }

    //verifica o maior valor da matriz
    let maiorValor = matriz[0][0];
    let posicaoMaiorValor = ""
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maiorValor){
                maiorValor = matriz[i][j];
                posicaoMaiorValor = `matriz[${i}][${j}]`;
            }
        }
    }
    
    console.log("Maior valor de venda: ", maiorValor, " posicao: ", posicaoMaiorValor);
    console.log("Media geral das vendas: ", (somaTotal / matriz.length * matriz[0].length).toFixed(2));
}