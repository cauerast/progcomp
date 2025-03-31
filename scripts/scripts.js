function calcular(){
    let soma = 0;


    let acaoSocial = Number(document.getElementById("acaoSocial").value);
    soma += (1 * acaoSocial);

    let homenagem = Number(document.getElementById("homenagem").value);
    soma += (1 * homenagem);

    let leite = Number(document.getElementById("leite").value);
    soma += (2 * leite);

    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value);
    let pontosKitSup = 0;
    let equipe = document.getElementById("equipe").value;

    if(equipe == Laranja && suplemento >= 49){
        if((kitAlimentacao >= 97)){
            pontosKitSup = 5000 + ((kit - 97) * 30);
        }
        else if(kitAlimentacao >= 78){
            pontosKitSup = (0.8 * 5000) + ((kit - 78) * 30);
        }
        else if(kitAlimentacao >= 49){
            pontosKitSup = (0.5 * 5000) + ((kit - 49) * 30);
        }
        else if(kitAlimentacao >= 19){
            pontosKitSup = (0.2 * 5000) + ((kit - 19) * 30);
        }
        else{
            pontosKitSup = 30 * kitAlimentacao
        }
    }
    alert(pontosKitSup)

    soma += (30 * kitAlimentacao);
    let suplemento = Number(document.getElementById("suplemento").value);
    soma += (15 * suplemento);
    let arroz = Number(document.getElementById("arroz").value);
    soma += (1 * arroz)
    let feijao = Number(document.getElementById("feijao").value);
    soma += (1 * feijao)
    let macarrao = Number(document.getElementById("macarrao").value);
    soma += (0.5 * macarrao)
    let oleo = Number(document.getElementById("oleo").value);
    soma += (1 * oleo)
    
    document.getElementById("soma").innerHTML = `${soma.toFixed(2)}pts`;
}
