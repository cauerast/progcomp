// ex 5 by cauerast
function mostrarTabuadas(){
    let table = 'Tabuadas dos números de 1 a 10\n';

    for(let i = 1; i <= 10; i++){
        table += `\nTabuada do ${i}: \n`;

        for(let j = 0; j <=10; j++){
            table += `${i} x ${j} = ${i * j}\n`;

        }

    }

console.log(table); // seria melhor nesse caso, ja que o window.alert() nao consegue mostrar tantos caracteres em lista.
}