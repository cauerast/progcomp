// ex 6 by cauerast
/*
function calculate(){
    let valorProduto = 0;
    let codigoProduto;
    let aVista = 0;
    let aPrazo = 0;

    for(let i = 1; i <= 15; i++){
        
        while(true){
            valorProduto = Number(prompt(`Insira o valor do produto ${i}: `));

            if(!isNaN(valorProduto) && valorProduto > 0){
                break;
            }
            else{
                window.alert('Insira um valor válido!');
            }
        }

        while(true){
            codigoProduto = String(prompt(`Pagamento -> A vista [V] ou a prazo [P]: `).toUpperCase());

            if(codigoProduto === 'V' || codigoProduto === 'P'){
                if(codigoProduto === `V`){
                    aVista += valorProduto;
                }
                else if(codigoProduto === `P`){
                    aPrazo += valorProduto;
                }
                break;
            }
            else{
                window.alert('Insira um valor válido: A vista [V] ou a prazo [P]  ');
            }
        }
    }

window.alert(`Valor total das compras a vista: R$${aVista.toFixed(2)}\n
Valor total das compras a prazo: R$${aPrazo.toFixed(2)}\n
Valor total das compras efetuadas: R$${(aVista + aPrazo).toFixed(2)}\n
Valor da primeira prestação das compras a prazo juntas em 3x: R$${(aPrazo/3).toFixed(2)}`);
}

*/

// 

function calculate(){
    let valor, codigo, totalVista = 0, totalPrazo = 0;
    for(let conta = 1; conta <= 5; conta ++){
        do{
            codigo = prompt(`informe o codigo v (a vista) ou p (a prazo): `).toUpperCase()
        } while(codigo != `V` && codigo != `P`)

        do{
            valor = Number(prompt(`informe o valor: `))
        } while(valor < 0)

        if (codigo == `V`){
            totalVista += valor
        }
        else{
            totalPrazo += valor
        }
    }
    
     window.alert(`Total a vista: R$${totalVista}\n 
        Total a prazo: R$${totalPrazo}\n
        Total geral R$${totalPrazo + totalVista}\n
        Total de cada parcela do total em 3x R$${totalPrazo/3}`)
}