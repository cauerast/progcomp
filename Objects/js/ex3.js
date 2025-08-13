// ex 3 by Cauê Silva Rasteiro - 26033 - C.C

function ex3(){
    let projects = [];
    let soma = 0;

    for(let i = 0; i < 7; i++){

        let nomeProjeto;
        let empresa;
        let duracaoMeses;
        let orcamento;

        do {
            nomeProjeto = prompt(`Informe o nome do projeto #${i + 1}: `).toLowerCase();
        } while (!isNaN(nomeProjeto));

        do {
            empresa = prompt(`Informe o nome da empresa #${i + 1}: `).toLowerCase();
        } while (!isNaN(empresa));

        do {
            duracaoMeses = Number(prompt(`Informe a duração em meses do projeto #${i + 1}: `));
        } while (isNaN(duracaoMeses));

        do {
            orcamento = Number(prompt(`Informe o orçamento do projeto #${i + 1}: `));
        } while (isNaN(orcamento));

        let project = {
            nomeProjeto: nomeProjeto,
            empresa: empresa, 
            duracaoMeses: duracaoMeses,
            orcamento: orcamento
        }

        projects.push(project);

        soma += duracaoMeses;
    }


    let duracaoM12Eorc1M = projects.filter(project => project.duracaoMeses > 12 && project.orcamento > 1000000);
    let maiorOrcamento = projects[0];
    let projInovatech = 0;
    let somaOrcamentoMenor6Meses = 0;


    for(let i = 0; i < projects.length; i++){
        if(projects[i].orcamento > maiorOrcamento.orcamento){
            maiorOrcamento = projects[i];
        }
        if(projects[i].empresa == "inovatech"){
            projInovatech++;
        }
        if(projects[i].duracaoMeses < 6){
            somaOrcamentoMenor6Meses += projects[i].orcamento;
        }
    }

    if(duracaoM12Eorc1M.length > 0){
        let nomes = duracaoM12Eorc1M.map(n => n.nomeProjeto).join(", ");
        window.alert(`Projetos com duração superior a 12 meses e orçamento acima de R$ 1.000.000,00: ${nomes}`);
    } else{
        window.alert(`Projetos com duração superior a 12 meses e orçamento acima de R$ 1.000.000,00: Nenhum projeto.`)
    }

    window.alert(`Nome do projeto com o maior orçamento: ${maiorOrcamento.nomeProjeto}`);
    window.alert(`Média de duração dos projetos: ${(soma/projects.length).toFixed(2)} meses`);
    window.alert(`Qtd de projetos que foram realizados pela empresa InovaTech: ${projInovatech}`);
    window.alert(`Total gasto apenas com os projetos mais novos do que 6 meses: R$${(somaOrcamentoMenor6Meses).toFixed(2)}`);
}
