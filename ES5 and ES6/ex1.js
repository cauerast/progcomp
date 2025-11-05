let qtd = Number(prompt("informe a quantidade de estudantes: "))
let notas = []
let soma = 0
let notasPares = []

for(let i = 0; i < qtd; i++){
    notas[i] = Number(prompt(`nota aluno ${i + 1}`))
}

notas.forEach((nota, index) => {
    console.log(`nota aluno ${index + 1} -> ${nota}`)

    soma += nota

    if(nota > 7){
        aprovados += 1 
    }
    
    if(index % 2 == 0){
        notasPares.push(nota);
    }
})

console.log(somaNotas)
console.log(`soma das notas ${soma}`)
console.log(`media das notas ${soma/notas.length}`)
console.log(`qtd de alunos aprovados: ${aprovados}`)
console.log(`notas nas posicoes pares: ${notasPares.join(" ")}`)

