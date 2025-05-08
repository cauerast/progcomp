function pesquisaSatisfacao(){
    let count = 1
    let soma = 0;
    let nota;
    let users = 10;
    let satisfeito = 0, insatisfeito = 0;
    while(count <= users){
        nota = Number(prompt(`Informe a nota do participante ${count}: `));
        if(nota >= 8 && nota <= 10){
            satisfeito++;
        }
        else if(nota >= 0 && nota < 5 ){
            insatisfeito++;
        }
        else if(nota < 0 || nota > 10){
            window.alert(`Informe uma nota válida!`);
            continue;
        }
        count++;
        soma = soma + nota;
    }
    let media = soma / users;
    window.alert(`A media das notas: ${(media).toFixed(2)}`);
    window.alert(`Quantidade de pessoas satisfeitas: ${satisfeito}`);
    window.alert(`Quantidade de pessoas insatisfeitas: ${insatisfeito}`);
}
// Cauê Silva Rasteiro - C.C - 2° bimestre; :) 

