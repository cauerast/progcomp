function cadastroInicial(funcionarios){
    funcionarios.push({nome: "Caue", cargo: "desenvolvedor",salario: 179000})
    funcionarios.push({nome: "Igor", cargo: "desenvolvedor",salario: 3000})
    funcionarios.push({nome: "Miguel", cargo: "desenvolvedor",salario: 800})
}
function cadastrarNovo(funcionarios){
    let qtd = Number(prompt("Quantos funcionarios deseja cadastrar?"))
    for(let i = 0; i < qtd; i++){
        let nome = prompt("Nome do funcionario: ")
        let cargo = prompt("Cargo do funcionario: ")
        let salario = Number(prompt("Salario do funcionario: "))

        let funcionario_add = {
            nome: nome,
            cargo: cargo, 
            salario: salario
        }

        funcionarios.push(funcionario_add)
    }
}
function listarNomes(funcionarios){
    console.log("funcionarios: \n")
    for (let i = 0; i < funcionarios.length; i++){
        console.log(funcionarios[i].nome)
    }
}
function aumentarSalario(funcionarios){
    for (let i = 0; i < funcionarios.length; i++){
        funcionarios[i].salario *= 1.10
    }
    console.log("salario aumentado com sucesso!")
}
function buscarSalario(funcionarios){
    let nome = prompt("Insira o nome do funcionario: ")
    for(let i = 0; i < funcionarios.length; i++){
        if(nome == funcionarios[i].nome){
            console.log(`O salario do funcionario ${nome} e de R$${(funcionarios[i].salario).toFixed(2)}`)
            return;
        }
    }
    return "Funcionario nao encontrado!";
}
function atualizarCargo(funcionarios){
    let nome = prompt("Insira o nome do funcionario: ")
    let novoCargo = prompt("Insira o novo cargo do funcionario: ")
    for(let i = 0; i < funcionarios.length; i++){
        if(nome == funcionarios[i].nome){
            funcionarios[i].cargo = novoCargo
            return "Cargo atualizado!"
        }
    }
    return "Funcionario nao encontrado!"
}
function removerFuncionario(funcionarios){
    let nome = prompt("Insira o nome do funcionario que deseja remover: ")
    for(let i = 0; i < funcionarios.length; i++){
        if(nome == funcionarios[i].nome){
            funcionarios.slice(i, 1)
            return "Funcionario Removido\n"
        }
    }
    return "Funcionario nao encontrado!"
}
function exibirMedia(funcionarios){
    let soma = 0
    for(let i = 0; i < funcionarios.length; i++){
        soma += funcionarios[i].salario
    }
    console.log(`Media salarial da empresa: R$: R$${soma / funcionarios.length}`);
}
function promoverFuncionario(funcionarios){
    let soma = 0
    for(let i = 0; i < funcionarios.length; i++){
        soma += funcionarios[i].salario
    }
    let media = soma / funcionarios.length

    let cargo = "Analista junior";

    for(let i = 0; i < funcionarios.length; i++){
        if(funcionario[i].salario < media){
            let sugerir = prompt("Sujerir Cargos: [sim] ou [nao]: ").toLowerCase()
            if(sugerir === "sim"){
                let cargo_sugerido = prompt(`Insira o cargo para o funcionario [${funcionarios[i].nome}]: `)
                funcionarios[i].cargo = cargo_sugerido;
                funcionarios[i].salario *= 1.15
            } else{
                funcionarios[i].cargo = "Analista Junior"
                funcionarios[i].salario *= 1.15
            }
        }
    }
    return "Funcionario nao encontrado!"
}
function maiorSalario(funcionarios){
    let maiorSalario = funcionarios[0].salario;
    let nome = ""
    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario > maiorSalario){
            maiorSalario = funcionarios[i].salario
            nome = funcionarios[i].nome;
        }
    }
    console.log(`O funcionario ${nome} obteve o melhor salario (R$${maiorSalario})`)
}
function main(){
    let array = [];
    cadastroInicial(array);
    let opcao;

    do{
        opcao = Number(prompt("1. Cadastrar novo funcionario.\n2. listar nome dos funcionarios.\n3. aumentar o salario de todos em 10%\n4. buscar salario pelo nome\n5. atualizar cargo\n6. remover funcionario pelo nome\n7. exibir media salarial da empresa.\n8. promoverFuncionario\n9. Funcionario com maior salario\n10. Sair"))
        switch(opcao){
            case 1: cadastrarNovo(array); break;
            case 2: listarNomes(array); break;
            case 3: aumentarSalario(array); break;
            case 4: buscarSalario(array); break;
            case 5: atualizarCargo(array); break;
            case 6: removerFuncionario(array); break;
            case 7: exibirMedia(array); break;
            case 8: promoverFuncionario(array); break;
            case 9: maiorSalario(array); break;
            case 10: console.log("O programa foi encerrado!"); break;
            default: console.log("Valor invalido");

        }
    } while(opcao != 8)
    console.table(array)
}
main();