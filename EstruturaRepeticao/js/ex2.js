// ex 2 feito por mim
/*
function teatro(){
    let valorIngresso = 5;
    let ingressosVendidos= 120;
    let despesas = 200;
    let maxLucro = 0;
    let maxValor = 0;
    let maxQtd = 0;
    let tabela = "Valor do ingresso | Quant. Vendida | Lucro esperado \n"

    while(valorIngresso <= 5 && valorIngresso >= 1){
        let lucro = (valorIngresso * ingressosVendidos) - despesas;

        tabela += `R$${valorIngresso.toFixed(2)}                  |  ${ingressosVendidos}                   |  R$${lucro.toFixed(2)} \n`

        if(lucro > maxLucro){
            maxLucro = lucro;
            maxValor = valorIngresso;
            maxQtd = ingressosVendidos;
        }

        ingressosVendidos += 26
        valorIngresso -= 0.50;
    }
    window.alert(`Tabela ingressos \n\n` + tabela + `\n Lucro maximo: R$${maxLucro.toFixed(2)} \n com a quantidade vendida: ${maxQtd} \n e o valor do ingresso: R$${maxValor.toFixed(2)}`);
}
// Cauê Silva Rasteiro -- C.C
*/


// correção
function teatro(){
    let ingresso = 5;
    let qtde = 120;
    const despesas = 200;
    let lucro = (ingresso * qtde) - despesas;
    let maxLucro = 0, maxValor = 0, maxQtd = 0;
    let tabela = (`Preço do ingresso | Qtd. Vendida | Lucro \n`);

    while(ingresso <= 5 && ingresso >= 1){

        let lucro = (ingresso * qtde) - despesas;

        tabela += `R$${ingresso.toFixed(2)}                   |  ${qtde}               |  R$${lucro.toFixed(2)} \n`;

        if(lucro > maxLucro){
            maxLucro = lucro;
            maxValor = ingresso;
            maxQtd = qtde;
        }

        qtde += 26;
        ingresso -= 0.5;

    }

    window.alert(`Tabela ingressos \n\n` + tabela + `\n Lucro maximo: R$${maxLucro.toFixed(2)} \n com a quantidade vendida: ${maxQtd} \n e o valor do ingresso: R$${maxValor.toFixed(2)}`);
}
