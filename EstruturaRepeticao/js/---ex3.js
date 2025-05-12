function calcular(){
    let count = 1;
    let users = 8;
    let idade;
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0
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
    window.alert(`Porcentagem de pessoas na primeira faixa etaria: ${porcUltima}%`)
}