// ex 6 by Cauê Silva Rasteiro - 26033 - C.C
function ex6(){
    let number = [];
    let search = 0;
    let appears = 0;
    let positions = [];


    for(let i = 0; i < 12; i++){
        do {
            number[i] = Number(prompt(`Insira o ${i + 1}° número: `));
        } while(isNaN(number[i]));
    }

    do {
        search = Number(prompt(`Insira um numero a ser buscado no array: `));
    } while (isNaN(search));

    for(let i = 0; i < 12; i++){
        if(search == number[i]){
            appears++;
            positions.push(i);
        }

    }

    console.log(`O numero ${search} aparece ${appears}x na(s) posição(s): ${positions.join(`, `)}.`)

}