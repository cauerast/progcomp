function calcular() {
    let soma = 0;
    let pontosKitSup = 0;
    let equipe = document.getElementById("equipe").value;

    let acaoSocial = parseFloat(document.getElementById("acaoSocial").value) || 0;
    soma += acaoSocial;

    let homenagem = parseFloat(document.getElementById("homenagem").value) || 0;
    soma += homenagem;

    let leite = parseFloat(document.getElementById("leite").value) || 0;
    soma += (2 * leite);

    let kitAlimentacao = parseFloat(document.getElementById("kitAlimentacao").value) || 0;
    soma += (30 * kitAlimentacao);

    let suplemento = parseFloat(document.getElementById("suplemento").value) || 0;
    soma += (15 * suplemento);

    let arroz = parseFloat(document.getElementById("arroz").value) || 0;
    soma += arroz;

    let feijao = parseFloat(document.getElementById("feijao").value) || 0;
    soma += feijao;

    let macarrao = parseFloat(document.getElementById("macarrao").value) || 0;
    soma += (0.5 * macarrao);

    let oleo = parseFloat(document.getElementById("oleo").value) || 0;
    soma += oleo;

    // Verificação da equipe "Laranja" e cálculo do bônus de pontos
    if (equipe === "Laranja") {
        if (kitAlimentacao >= 97 && suplemento >= 49) {
            pontosKitSup = 5000 + ((kitAlimentacao - 97) * 30) + (suplemento * 15);
        }
        else if (kitAlimentacao >= 78 && suplemento >= 39) {
            pontosKitSup = (0.8 * 5000) + ((kitAlimentacao - 78) * 30) + (suplemento * 15);
        }
        else if (kitAlimentacao >= 49 && suplemento >= 25) {
            pontosKitSup = (0.5 * 5000) + ((kitAlimentacao - 49) * 30) + (suplemento * 15);
        }
        else if (kitAlimentacao >= 19 && suplemento >= 10) {
            pontosKitSup = (0.2 * 5000) + ((kitAlimentacao - 19) * 30) + (suplemento * 15);
        }
        else {
            pontosKitSup = (30 * kitAlimentacao) + (suplemento * 15);
        }
        alert(`Pontos extras: ${pontosKitSup}`);
    }

    document.getElementById("soma").innerHTML = `${soma.toFixed(2)} pts`;
}