// ex 1
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
// Cauê Silva Rasteiro -- C.C