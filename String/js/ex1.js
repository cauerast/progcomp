
let word = prompt(`Insira uma palavra para verificar se e um palindromo: `).trim()

let wordReversed = word.split("").reverse().join("");
/*
let wordArray = word.split(""); // transforma a palavra em string
let wordArrayReverse = wordArray.reverse(); // inverte a string
let wordReverse = wordArrayReverse.join("") // transforma a array invertida em string 
*/

verificaPalindromo(word, wordReversed)

function verificaPalindromo(word, wordReversed){

    if(word != wordReversed){
        console.log(`A palavra ${word} NÃO É PALINDROMA`);
    } else {
        console.log(`A palavra ${word} é palindroma!`);
    }
}

