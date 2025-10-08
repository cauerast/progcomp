function cadastrarNovo(alunos){
    let qtd = Number(prompt("Insira quantos alunos quer cadastrar: "))

    for(let i = 0; i < qtd; i++){
        let nome = prompt("nome do aluno: ");
        let idade = Number(prompt("idade do aluno: "));
        let curso = prompt("curso do aluno: ");
        
        alunos_cadastro = {
            nome: nome,
            idade: idade,
            curso: curso
        }

        alunos.push(alunos_cadastro);
    }
}
function removerAluno(alunos){
    let nomeRemove = prompt("Informe o nome do aluno para remover: ").trim();

    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].nome == nomeRemove){
            alunos.splice(i, 1);
            alert("aluno removido!")
            return
        }
    }
    console.log("Aluno nao encontrado!")
}
function listarNomes(alunos){
    for(let i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome);
    }
}
function aumentarIdade(alunos){
    for(let aluno in alunos){
        aluno.idade += 1
    }
}
function cadastroInicial(alunos){
    alunos.push({nome: "Ana", idade: 20, curso: "Engenharia de software"});
    alunos.push({nome: "Carlos", idade: 22, curso: "Ciencias da computacao"});
    alunos.push({nome: "Beatriz", idade: 19, curso: "Engenharia de software"});
}
function main(){
    let vetor = [];
    cadastroInicial(vetor);
    let opcao
    
    do{
        opcao = Number(prompt("1. Cadastrar aluno.\n2. Listar nomes.\n3. Atualizar idades\n4. Remover aluno\n5. Sair\n"))
        switch(opcao){
        case 1: cadastrarNovo(vetor);
            break;
        case 2: listarNomes(vetor);
            break;
        case 3: aumentarIdade(vetor);
            break;
        case 4: removerAluno(vetor);
            break;
        case 5: console.log("programa encerrado!");
            break;
        default: console.log("OPCAO INVALIDA! ")
        }
    } while(opcao != 5);
    console.log(vetor)
}
main()