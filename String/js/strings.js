
let frase = "estou estudando js";
let frase1 = " js ";
let frase2 = "a,b,c,d,e";
let frase3 = "oi tudo bem?";
let aprovados = "joao,lucas,monica,luan,jose,pedro,caue";

console.log(frase.charAt(0));

console.log(frase[4]);
console.log(frase.length);

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

console.log(frase.toUpperCase().includes("JS"));
console.log(frase.toLowerCase().includes("js"));

console.log(frase.slice(0, 5)); // pega o char 0, 1, 2, 3 e 4;
console.log(frase.slice(-5)); // pega os ultimos 5 char

console.log(frase.substring(0, 5));

console.log(frase1.trim()); // retorna js

console.log(frase2.split(",")) // separa em todos os lugares que haviam ","
console.log(frase3.split(" ")) // separa em todos os lugares que haviam " " // usando o length podemos verificar quantas palavras há no array
console.log(frase3.split("")) // separa em todos os lugares que haviam "" // usando o length podemos verificar quantas letras há no array


let arrayAprovados = aprovados.split(",") // cria o array

console.log(arrayAprovados);
console.log(arrayAprovados.length);

/*

4
9
13

let beecrowd = "4\n9\n13";

let arrayBeecrowd = beecrowd.split("\n"); 


*/
