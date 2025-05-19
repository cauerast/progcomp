function pesquisaSatisfacao(){
    let users = 10;
    let count = 1;
    let nota = 0;
    let soma = 0;
    let satisfeito = 0, insatisfeito = 0;

    while(count <= users){
        nota = Number(prompt(`Nota de satisfacao participante ${count}`));

        if(nota >= 8 && nota <= 10){
            satisfeito++;
        }
        else if(nota < 5 && nota >= 0){
            insatisfeito++;
        }
        else if(nota < 0 || nota > 10){
            window.alert(`Insira uma nota de 0 a 10`);
            continue;
        }
        soma += nota;
        count++;
    }

    let media = soma / users;
    window.alert(`Media das notas: ${media.toFixed(2)}`);
    window.alert(`Total de pessoas satisfeitas: ${satisfeito}`);
    window.alert(`Total de pessoas insatisfeitas: ${insatisfeito}`);
}