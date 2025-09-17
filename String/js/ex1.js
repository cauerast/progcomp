let word = prompt("Insira uma palavra para verificar se é um palíndromo: ").trim();

// inverte a palavra
let wordReversed = word.split("").reverse().join("");

// compara e mostra o resultado
if (word === wordReversed) {
    console.log(`A palavra "${word}" é palíndroma!`);
} else {
    console.log(`A palavra "${word}" NÃO é palíndroma.`);
}