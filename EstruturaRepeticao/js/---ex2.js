// ex 2
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
// Cauê Silva Rasteiro -- C.C