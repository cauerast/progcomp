let biblioteca = [];

for(let i = 0; i < 5; i++){
    let titulo = prompt(`insira o titulo do livro #${i + 1}: `);
    let autor = prompt(`insira o autor do livro #${i + 1}: `);
    let ano = Number(prompt(`insira o ano de publicação do livro #${i + 1}: `));
    let paginas = Number(prompt(`insira a qtd de paginas do livro #${i + 1}: `));
    
    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas
    }
    
    biblioteca.push(livro);
}

let livroMaisde300 = [];
let maiorNumeroPag = biblioteca[0].paginas;
let somaPag = 0;
for(let i = 0; i < biblioteca.length; i++){
    if(biblioteca[i].paginas > 300){
        livroMaisde300.push(biblioteca[i].titulo);
    }

    if(biblioteca[i].paginas > maiorNumeroPag){
        maiorNumeroPag = biblioteca[i].titulo;
    }

    somaPag += biblioteca[i].paginas;
}

console.log(`Livros com mais de 300 pag: ${livroMaisde300.join(", ")}`);
console.log(`Titulo do livro com maior numero de pagiinas: ${maiorNumeroPag}`);
console.log(`Media de pag dos livros: ${(somaPag / 5).toFixed(2)}`);
