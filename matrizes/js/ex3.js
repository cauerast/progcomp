// ex 3 by Cauê Silva Rasteiro - 26033 - C.C

function ex3(){
    // coluna = dia
    // linha = regiao
    // itens inseridos = índice de poluição

    //input
    let matriz = [];
    for(let i = 0; i < 5; i++){
        matriz[i] = [];
        for(let j = 0; j < 5; j++){
            do {
               matriz[i][j] = Number(prompt(`Insira o indice de poluicao registrado na regiao: ${i} e no dia: ${j}`));
            } while (isNaN(matriz[i][j]) || matriz[i][j] > 500 || matriz[i][j] < 0);
        }
    }
    
    //mostra a matriz
    console.table(matriz)
    
    //diag principal
    let diagPrincipal = [];
    let somaDiagPrincipal = 0;
    for(let i = 0; i < matriz.length; i++){
        diagPrincipal.push(matriz[i][i]);
        somaDiagPrincipal += diagPrincipal[i];
    }

    //diag secundaria
    let diagSec = [];
    let somaDiagSec = 0;
    for(let i = 0; i < matriz.length; i++){
        diagSec.push(matriz[i][(matriz[i].length - i - 1)])
        somaDiagSec += diagSec[i];
    }


    //maior indice e qtd indice > 300
    let qtdIndiceSuperior300 = 0;
    let maiorIndice = matriz[0][0];
    let nomeMaiorIndice = `A regiao 0 teve o maior indice de poluicao registrado no dia 0. Indice: ${maiorIndice}`;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maiorIndice){
                maiorIndice = matriz[i][j];
                nomeMaiorIndice = `A regiao ${i} teve o maior indice de poluicao registrado no dia ${j}. Indice: ${maiorIndice}`
            }
            if(matriz[i][j] > 300){
                qtdIndiceSuperior300++
            }
        }
    }
    
    //menor indice (5 dias)
    let mediaIndiceRegioes = [];
    for(let i = 0; i < matriz.length; i++){
        mediaIndiceRegioes[i] = 0;
        for(let j = 0; j < matriz[i].length; j++){
            mediaIndiceRegioes[i] += matriz[i][j] / matriz[i].length;
        }
    }
    let menorMediaIndice = mediaIndiceRegioes[0];
    let nomeMenorMediaIndice = `Regiao 0 teve em media o menor indice de poluicao em seus 5 dias. Indice medio: ${menorMediaIndice}.`;
    for(let i = 0; i < matriz.length; i++){
        if(mediaIndiceRegioes[i] < menorMediaIndice){
            menorMediaIndice = mediaIndiceRegioes[i];
            nomeMenorMediaIndice = `Regiao ${i} teve em media o menor indice de poluicao em seus 5 dias. Indice medio: ${menorMediaIndice}.`
        }
        
    }
    
    console.log(`Valores da diagonal principal: ${diagPrincipal.join(", ")}, sua media: ${somaDiagPrincipal / matriz.length}`);
    console.log(`Valores da diagonal secundaria: ${diagSec.join(", ")}, sua media: ${somaDiagSec / matriz.length}`);
    console.log(nomeMaiorIndice);
    console.log(`O nivel critico ( > 300 ) foi atingido ${qtdIndiceSuperior300}x de acordo com a analise`);
    console.log(nomeMenorMediaIndice);
}