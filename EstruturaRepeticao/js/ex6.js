// ex 6 by cauerast
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