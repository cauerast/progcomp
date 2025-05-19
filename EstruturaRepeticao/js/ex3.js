// ex 3 feito por mim
/*
function calcular(){
    let idade = 0;
    let count = 1;
    let pessoas = 8;
    let fe1 = 0, fe2 = 0, fe3 = 0, fe4 = 0, fe5 = 0;

    while(count <= pessoas){
        idade = Number(prompt(`Informe a idade da pessoa ${count}: `));
        if(idade <= 15 && idade > 0){
            fe1++;
        }
        else if(idade >= 16 && idade <= 30){
            fe2++;
        }
        else if(idade >= 31 && idade <= 45){
            fe3++;
        }
        else if(idade >= 46 && idade <= 60){
            fe4++;
        }
        else if(idade > 60){
            fe5++;
        }
        else{
            alert('informe uma idade válida');
        }

        count++;
    }

    let porcPrimeira = (100 * fe1) / 8;
    let porcUltima = (100 * fe5) / 8;
    
    window.alert(`Quantidade de pessoas em cada faixa etária:\n
                    1° -> ${fe1}\n
                    2° -> ${fe2}\n
                    3° -> ${fe3}\n
                    4° -> ${fe4}\n
                    5° -> ${fe5}`)
    window.alert(`Porcentagem de pessoas na primeira faixa etaria com relação ao total de pessoas: ${porcPrimeira}%`);
    window.alert(`Porcentagem de pessoas na ultima faixa etaria com relação ao total de pessoas: ${porcUltima}%`);
}
// Cauê Silva Rasteiro -- C.C

*/


// correção

// ex 3
function calcular(){
    let count = 1;
    let users = 8;
    let idade = 0;
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0;
    while(count <= users){
        idade = Number(prompt(`Informe a idade da pessoa ${count}`));
        if(idade <= 15 && idade > 0){
            f1++;
        }
        else if(idade >= 16 && idade <= 30){
            f2++;
        }
        else if(idade >= 31 && idade <= 45){
            f3++;
        }
        else if(idade >= 46 && idade <= 60){
            f4++;
        }
        else if(idade > 60){
            f5++;
        }
        else {
            alert(`Informe uma idade válida!`)
        }

        count++;
    }

    let porcPrimeira = (f1 * 100) / 8;
    let porcUltima = (f5 * 100) /8;

    window.alert(`Quantidade de pessoas em cada faixa etária: \n
        1° --> ${f1}
        2° --> ${f2}
        3° --> ${f3}
        4° --> ${f4}
        5° --> ${f5}`);

    window.alert(`Porcentagem de pessoas na primeira faixa etaria: ${porcPrimeira}%`)
    window.alert(`Porcentagem de pessoas na ultima faixa etaria: ${porcUltima}%`)
}
// Cauê Silva Rasteiro -- C.C