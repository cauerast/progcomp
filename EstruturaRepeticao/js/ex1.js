function pesquisaSatisfacao(){
    let nota;
    let count = 1;
    let soma = 0;
    let users = 10; 
    let neutro = 0, insatisfeito = 0, satisfeito = 0; 
    while(count <= users){
        nota = Number(prompt(`Nota de satisfaçãodo participante ${count}: `));
        count++;
        soma = soma + nota;
        if(nota >= 8){
            satisfeito++;
        }
        else if(nota < 8 && nota > 5){
            neutro++;
        }
        else{
            insatisfeito++;
        }
        

    }
    let media = soma / users;
    window.alert(`A media das notas: ${media}`);
    window.alert(`Quantidade de pessoas satisfeitas: ${satisfeito}`);
    window.alert(`Quantidade de pessoas neutras: ${neutro}`);
    window.alert(`Quantidade de pessoas insatisfeitas: ${insatisfeito}`);
}

// Cauê Silva Rasteiro - C.C - 2° bimestre; :) 