function main(){
    let cidades = []
    carregarCidades(cidades)
    padronizarNomes(cidades)
    marcarInterior(cidades)
    exibirCidades(cidades)
}
function carregarCidades(vet){
    vet.push("Sao Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba")
}
function padronizarNomes(vet){
    for(let i = 0; i < vet.length; i++){
        vet[i].toUpperCase()
    }
}
function marcarInterior(vet){
    for(let i = 0; i < vet.length; i++){
        if(vet[i][0] == "C"){
            vet[i] = `INTERIOR-${vet[i]}`
        }
    }
}
function exibirCidades(vet){
    console.log(vet)
}

main();