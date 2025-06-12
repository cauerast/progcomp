// ex 4 by Cauê Silva Rasteiro - 26033 - C.C
function ex4(){
    let numbers = [];
    let soma = 0;
    let maiorMedia = [];
    let qtdMaiorMedia = 0;

    for(let i = 0; i < 8; i++){
        do{
            numbers[i] = Number(prompt(`Insira o ${i + 1}° valor: `));
        } while(isNaN(numbers[i]));

        soma += numbers[i];

    }

    let media = soma / 8;

    for(let i = 0; i < 8; i++){
        if(numbers[i] > media){
            maiorMedia.push(numbers[i]);
            qtdMaiorMedia++;
        }
    }

    console.log(`Valores inseridos: ${numbers.join(`, `)}`);
    console.log(`Media: ${media.toFixed(2)}`);
    console.log(`Quantidade de valores a cima da media: ${qtdMaiorMedia}`);
    console.log(`Valores a cima da media: ${maiorMedia.join(`, `)}`);
}