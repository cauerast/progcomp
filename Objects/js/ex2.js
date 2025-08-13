// ex 2 by Cauê Silva Rasteiro - 26033 - C.C

function ex2(){
    let funcionarios = [];
    let salarioMaiorQue5k = [];
    let soma = 0;
    let gerentes = 0;


    for(let i = 0;  i < 6; i++){

        let nome;
        let cargo;
        let salario;
        let tempoServico;

        do {
            nome = String(prompt(`Insira o nome do usuario #${i + 1}: `));
        } while (!isNaN(nome));
        do {
            cargo = String(prompt(`Insira o cargo do usuario #${i + 1}: `).toLowerCase());
        } while (!isNaN(cargo));
        do {
            salario = Number(prompt(`Insira o salario do usuario #${i + 1}: `));
        } while (isNaN(salario));
        do {
            tempoServico = Number(prompt(`Insira o tempo de serviço do usuario #${i + 1}: `));
        } while (isNaN(tempoServico));

        let funcionario = {
            nome: nome,
            cargo: cargo, 
            salario: salario,
            tempoServico: tempoServico
        }

        funcionarios.push(funcionario);
    }
    
    let maiorSalario = funcionarios[0];
    
    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5){
            salarioMaiorQue5k.push(funcionarios[i]);
        }
        if(funcionarios[i].salario > maiorSalario){
            maiorSalario = funcionarios[i];
        }
        if(funcionarios[i].cargo == "gerente"){
            gerentes++
        }
        soma += funcionarios[i].salario;
    }
    for(let i = 0; i < salarioMaiorQue5k.length; i++){
        window.alert(`Funcionários com salário acima de R$ 5.000 e mais de 5 anos de serviço: ${salarioMaiorQue5k[i].nome}`);
    }
    window.alert(`Nome do funcionário com o maior salário: ${maiorSalario.nome}`);
    window.alert(`Média salarial da empresa: ${(soma / 6).toFixed(2)}`);
    window.alert(`Quantidade de gerentes: ${gerentes}`);
}
