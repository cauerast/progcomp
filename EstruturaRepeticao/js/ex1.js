// ex 1 by cauerast
/*
function list(){
    let grupo = 1;
    while(grupo <= 5){

        let valores = prompt(`Digite 4 valores do grupo ${grupo} divididos por espaços -> [A, B, C, D]: `).split(" ").map(Number); // usei o .map pra passar pra array e poder usar o sort

        if(valores.length === 4 && valores.every(x => !isNaN(x))){
            let crescente = [...valores].sort((a, b) => a - b).join(" ");
            let decrescente = [...valores].sort((a, b) => b - a).join(" ");
            alert(`Grupo ${grupo} -->\n
                - Valores obtidos: ${valores.join(" ")}\n
                - Valores em ordem crescente: ${crescente}\n
                - Valores em ordem decrescente: ${decrescente}`);
            grupo++;
        }
        else{
            alert("Insira exatamente 4 números válidos, separados por espaço.");
        }
    }
}
*/
// Cauê Silva Rasteiro -- C.C

// correção

function list(){
    let group = 1;
    let aux;
    let sort = 1;

    while(group <= 5){
        let a = Number(prompt(`Informe o valor de A: `));
        let b = Number(prompt(`Informe o valor de B: `));
        let c = Number(prompt(`Informe o valor de C: `));
        let d = Number(prompt(`Informe o valor de D: `));
        let digUser = (`${a}, ${b}, ${c}, ${d}`);
        
        while(sort <= 3){
            if(a > b){
                aux = a;
                a = b;
                b = aux;
            }
            else if(b > c){
                aux = b;
                b = c;
                c = aux;
            }
            else if(c > d){
                aux = c;
                c = d;
                d = aux;
            }

            sort++;
        }

        window.alert(`Grupo ${group} --> \n
                        Numeros inseridos pelo usuário: ${digUser}\n 
                        Numeros em ordem crescente: ${a}, ${b}, ${c}, ${d}\n
                        Numeros em ordem decrescente: ${d}, ${c}, ${b}, ${a}`);
        group++;
    }
}
// Cauê Silva Rasteiro -- C.C
