let matriz = [];
let vendedor = [];

for(let i = 0; i < 4; i++){
    matriz[i] = [];
    vendedor[i] = prompt(`Insira o nome do vendedor #${i + 1}: `)
    for(let j = 0; j < 7; j++){
        matriz[i][j] = parseInt(Math.random() * 10);
    }
}

console.table(matriz)

let totalVendidoVendedor = [];
let maiorValor = matriz[0][0];
let posicao = "";
let media = [];
for(let i = 0; i < 4; i++){
    
    totalVendidoVendedor[i] = 0;
    media[i] = 0
    for(let j = 0; j < 7; j++){
        totalVendidoVendedor[i] += matriz[i][j];
        media[i] += (matriz[i][j] / 7)

        if(matriz[i][j] > maiorValor){
            maiorValor = matriz[i][j];
            posicao = `matriz[${i}][${j}]`;
        }
    }
}

let totalVendidoDia = [];
for(let j = 0; j < 7; j++){
    totalVendidoDia[j] = 0
    for(let i = 0; i < 4; i++){
        totalVendidoDia[j] += matriz[i][j];
    }
}




console.log("total vendido por cada vendedor: ")
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 7; j++){
        console.log(`${vendedor[i]}: R$${totalVendidoVendedor[i]}`)
    }
}

console.log("\n\ntotal vendido por cada dia da semana: ")
for(let j = 0; j < 7; j++){
    for(let i = 0; i < 4; i++){
        console.log(`dia ${j + 1}: R$${totalVendidoDia[j]}`)
    }
}

console.log(`\nmaior valor de venda individual: R$${maiorValor}, sua posicao: ${posicao}`)

console.log("\nmedia geral das vendas por semana: ")
for(let i = 0; i < 4; i++){
    console.log(`media semana ${i + 1}: R$${(media[i]).toFixed(2)}`)
}