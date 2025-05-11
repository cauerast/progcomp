// ex 3
function list(){
    let grupo = 1, valores;
    while(grupo <= 5){
        let valores = prompt(`Digite 4 valores do grupo ${grupo} [A, B, C, D]: `);

        let crescente = [...valor in valores].sort((a, b) => a - b).join(" ");
        alert(crescente);
        grupo++;
    }
}
// Cauê Silva Rasteiro -- C.C