// ex 5 by Cauê Silva Rasteiro - 26033 - C.C
function ex5(){
    let number = [];
    let qtdMaior = 0;
    let qtdMenor = 0;
    let qtdIgual = 0;

    for(let i = 0; i < 10; i++){
        do {
            number[i] = Number(prompt(`Insira o ${i + 1}° numero: `));
        } while (isNaN(number[i]));
    }

    for( let i = 0; i < 10; i++){
        if(number[i] > number[0]){
            qtdMaior++;
        }
        else if(number[i] < number[0]){
            qtdMenor++;
        }
        else if(number[i] == number[0]){
            qtdIgual++;
        } 
    }

    console.log(`Quantidade de numeros maiores que o primeiro inserido: ${qtdMaior}`);
    console.log(`Quantidade de numeros menores que o primeiro inserido: ${qtdMenor}`);
    console.log(`Quantidade de numeros iguais ao primeiro inserido: ${qtdIgual - 1}`);
}