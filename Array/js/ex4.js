// ex 4 by Cauê Silva Rasteiro - 26033 - C.C
function ex4(){
    let number = [];
    let soma = 0;
    let media = 0;
    let maiorMedia = [];
    let qtdMaiorMedia = 0;

    for(let i = 0; i < 8; i++){
        do {
            number[i] = Number(prompt(`Insira o ${i + 1}° número: `));
        } while (isNaN(number[i]));
        soma += number[i];
    }



    media = soma / 8;

    for(let i = 0; i < 8; i++){
        if(number[i] > media){
            maiorMedia.push(number[i]);
            qtdMaiorMedia++;
        }
    }

    console.log(`Media: ${media}`);
    console.log(`Quantidade de valores a cima da media: ${qtdMaiorMedia}`);
    console.log(`Valores a cima da media: ${maiorMedia.join(`, `)}`);
}