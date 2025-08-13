
let product = {
    name: "ps5",
    price: 10.00,
    desc: "a video-game",
    label: "PlayStation"
}

let arrayProducts = [{
    name: "ps5",
    price: 664.30,
    desc: "a video-game",
    label: "PlayStation"
},
{
    name: "xbox",
    price: 500.00,
    desc: "a video-game",
    label: "Microsoft"
},
{
    name: "nintendoSwitch",
    price: 430.00,
    desc: "a video-game",
    label: "Nintendo"
}];

console.log(arrayProducts[0].name);
console.log(arrayProducts[1].name);
console.log(arrayProducts[2].name);
console.log(arrayProducts[1].label);


// showing all the product names
for(let i = 0; i < arrayProducts.length; i++){
    console.log(`livro ${i + 1}: ${arrayProducts[i].name}`);
};

// showing all the products w/ price is grather than 400$
let priceGt = [];

for(let i = 0; i < arrayProducts.length; i++){
    if(arrayProducts[i].price > 400){
        priceGt.push(arrayProducts[i].name);
    }
}

console.log(priceGt.join(", "));


// prompting the interphrases from objects
function libraly(){
    let libraly = [];

    for(let i = 0; i < 1; i++){
        let titulo = String(prompt(`Insira o titulo: `));
        let ano = Number(prompt(`Insira o ano de lançamento: `));
        let autor = String(prompt(`Insira o autor: `));
        let paginas = Number(prompt(`Insira a quantidade de pagians: `));

        let livro = {
            titulo: titulo,
            ano: ano,
            autor: autor,
            paginas: paginas
        };

        libraly.push(livro);
    }

    console.log(libraly);
}









let carro = {
    rodas: 4,
    marca: "fiat",
    cor: laranja,
    nome: fastback
}
