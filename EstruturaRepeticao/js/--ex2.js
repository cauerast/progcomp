// ex 2
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