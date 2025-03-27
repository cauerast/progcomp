function calcular(){
    let soma = 0;

    let acaoSocial = Number(document.getElementById("acaoSocial").value);
    soma += (1 * acaoSocial);
    let homenagem = Number(document.getElementById("homenagem").value);
    soma += (1 * homenagem);
    let leite = Number(document.getElementById("leite").value);
    soma += (2 * leite);
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value);
    soma += (30 * kitAlimentacao);
    let suplementoAvulso = Number(document.getElementById("suplementoAvulso").value);
    soma += (15 * suplementoAvulso);
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