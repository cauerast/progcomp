// ex 1 by Cauê Silva Rasteiro - 26033 - C.C

function ex1(){
    let libraly = [];
    let qtdLivros = 5;
    let livros300pag = [];
    let soma = 0;
    

    for(let i = 0; i < qtdLivros; i++){

        let titulo;
        let autor;
        let data;
        let pages;

        do {
            titulo = String(prompt(`Insira o titulo do ${i + 1}° livro: `));
        } while(!isNaN(titulo));

        do {
            autor = String(prompt(`Insira o nome do ${i + 1}° autor: `));
        } while(!isNaN(autor));

        do {
            data = Number(prompt(`Insira a data de publicação do ${i + 1}° livro: `));
        } while(isNaN(data));

        do {
            pages = Number(prompt(`Insira a quantidade de pag do ${i + 1}° livro: `));
        } while(isNaN(pages));

        let livro = {
            titulo: titulo,
            autor: autor,
            data: data,
            pages: pages
        }

        libraly.push(livro);
        
    }

    let maiorQtdPag = libraly[0].pages;
    let maiorQtdPagTitulo = libraly[0].titulo;
    
    
    for(let i = 0; i < libraly.length; i++){
        
        soma += libraly[i].pages;
        
        if(libraly[i].pages > 300){
            livros300pag.push(libraly[i].titulo);
        }
        
        if(libraly[i].pages > maiorQtdPag){
            maiorQtdPag = libraly[i].pages;
            maiorQtdPagTitulo = libraly[i].titulo;
        }
    }

    window.alert(`Livros com mais de 300 pag: ${livros300pag.join(", ")}`);
    window.alert(`Titulo do livro com maior numero de pags: ${maiorQtdPagTitulo}, com ${maiorQtdPag} paginas`);
    window.alert(`Media de pagias dos livros cadastrados: ${(soma/qtdLivros).toFixed(2)}`);
}