// ex 5 by cauerast

function tabuadaX(){
    let number = Number(prompt(`Digite um numero e veja seus multiplos: `));
    let table = `Tabuada do numero ${number}!\n\n`;
    for(let count = 0; count <= 10; count++){
        table += `${number} x ${count} = ${number * count}\n`;

    }
    window.alert(table);

}