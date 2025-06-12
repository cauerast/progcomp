// ex 6 by Cauê Silva Rasteiro - 26033 - C.C
function ex6(){
    let numbers = [];
    let qtdAparicoes = 0;
    let posicoes = [];
    let search = 0

    for(let i = 0; i < 12; i++){
        do {
            numbers[i] = Number(prompt(`Insira o ${i + 1}° valor: `));
        } while (isNaN(numbers[i]));
    }

    do {
        search = Number(prompt(`Insira um valor a ser buscado na lista: `));
    } while (isNaN(search));

    for(let i = 0; i < 12; i++){
        if(search == numbers[i]){
            qtdAparicoes++;
            posicoes.push(i)
        }
    }


    console.log(`O numero ${search} aparece ${qtdAparicoes}x, nas posições: ${posicoes.join(`, `)}`)
}