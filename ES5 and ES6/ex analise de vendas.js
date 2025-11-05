let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];

let vendasInformatica = 0
let vendasModa = 0
let vendasEducacao = 0
let maiorCatVendas = "";
let maiorValorVendas = 0

vendas.forEach((venda) => {
    if(venda.categoria == "Informática"){
        vendasInformatica += (venda.valor * venda.quantidade)
    }

    if(venda.categoria == "Moda"){
        vendasModa += (venda.valor * venda.quantidade)
    }

    if(venda.categoria == "Educação"){
        vendasEducacao += (venda.valor * venda.quantidade)
    }
})

if(vendasInformatica > vendasEducacao && vendasInformatica > vendasModa){
    maiorCatVendas += "Informatica"
    maiorValorVendas += vendasInformatica

}
if(vendasModa > vendasEducacao && vendasModa > vendasInformatica){
    maiorCatVendas += "Moda"
    maiorValorVendas += vendasModa

}
if(vendasEducacao > vendasInformatica && vendasEducacao > vendasModa){
    maiorCatVendas += "Educacao"
    maiorValorVendas += vendasEducacao

}

console.log(`total de vendas por categoria: -> \n 
    vendas Informatica: R$${vendasInformatica.toFixed(2)}\n
    vendas Moda: R$${vendasModa.toFixed(2)}\n
    vendas Educacao: R$${vendasEducacao.toFixed(2)}\n`)

console.log(`categoria com maior valor de vendas: ${maiorCatVendas} (R$${maiorValorVendas})`)