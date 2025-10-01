function main(){
    let nomes = ["Caue", "Pedro", "Lucas", "Vini", "Ana"]
    exibir(nomes)
    anonimo(nomes)

    console.log("\nvetor originial: \n\n", nomes)
}

function exibir(vet){
    console.log("\nexibir vetor toUpperCase: ")
    let newVet = []
    for(let i = 0; i < vet.length; i++){
        newVet.push(vet[i].toUpperCase())
    }
    console.log("\n", newVet)

}
function anonimo(vet){
    console.log("\nsubstituir nomes que comecam com A por ANONIMO: ")
    let newVet = [];

    for(let i = 0; i < vet.length; i++){
        newVet[i] = vet[i]
    }
    for(let i = 0; i < newVet.length; i++){
        if(newVet[i][0] == "A"){
            newVet[i] = "ANONIMO";
        }
    }
    console.log("\n", newVet)
}

main()