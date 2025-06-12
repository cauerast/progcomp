// ex 5 by Cauê Silva Rasteiro - 26033 - C.C
function ex5(){
    let numbers = [];
    let qtdMaior = 0;
    let qtdMenor = 0;
    let qtdIgual = 0;

    for(let i = 0; i < 10; i++){
        do {
            numbers[i] = Number(prompt(`Informe o ${i + 1}° valor: `));
        } while (isNaN(numbers[i]));

        if(numbers[i] > numbers[0]){
            qtdMaior++;
        }
        else if(numbers[i] < numbers[0]){
            qtdMenor++;
        }
        else{
            qtdIgual++;
        }
    }

    console.log(`Quantidade de numeros maiores que o primeiro digitado: ${qtdMaior}`);
    console.log(`Quantidade de numeros menores que o primeiro digitado: ${qtdMenor}`);
    console.log(`Quantidade de numeros iguais ao primeiro digitado: ${qtdIgual}`);
}