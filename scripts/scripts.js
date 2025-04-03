function calcular() {
    let soma = 0;
    let pontosKitSup = 0;
    let equipe = document.getElementById("equipe").value;

    let acaoSocial = Number(document.getElementById("acaoSocial").value) || 0;
    soma += acaoSocial;

    let homenagem = Number(document.getElementById("homenagem").value) || 0;
    soma += homenagem;

    let leite = Number(document.getElementById("leite").value) || 0;
    soma += (2 * leite);

    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value) || 0;
    soma += (30 * kitAlimentacao);

    let suplemento = Number(document.getElementById("suplemento").value) || 0;
    soma += (15 * suplemento);

    let arroz = Number(document.getElementById("arroz").value) || 0;
    soma += arroz;

    let feijao = Number(document.getElementById("feijao").value) || 0;
    soma += feijao;

    let macarrao = Number(document.getElementById("macarrao").value) || 0;
    soma += (0.5 * macarrao);

    let oleo = Number(document.getElementById("oleo").value) || 0;
    soma += oleo;

    let doacaoSangue = Number(document.getElementById("doacaoSangue").value) || 0;
    soma
    // Verificação das equipes
    if (equipe === "Laranja") {
        if (kitAlimentacao >= 97 && suplemento >= 49) {
            pontosKitSup = 5000 + ((kitAlimentacao - 97) * 30) + ((suplemento - 49) * 15);
        }
        else if (kitAlimentacao >= 78 && suplemento >= 39) {
            pontosKitSup = (0.8 * 5000) + ((kitAlimentacao - 78) * 30) + ((suplemento - 39) * 15);
        }
        else if (kitAlimentacao >= 49 && suplemento >= 25) {
            pontosKitSup = (0.5 * 5000) + ((kitAlimentacao - 49) * 30) + ((suplemento - 25) * 15);
        }
        else if (kitAlimentacao >= 19 && suplemento >= 10) {
            pontosKitSup = (0.2 * 5000) + ((kitAlimentacao - 19) * 30) + ((suplemento - 10) * 15);
        }
        else {
            pontosKitSup = 0
        }
    }
    if (equipe === "Laranja") {
        if (doacaoSangue >= 49){

        }
    }



    soma = soma + pontosKitSup;
    document.getElementById("soma").innerHTML = `${soma.toFixed(2)} pts`;
}

// fazer o if e else da doação de sangue para todos os times e os if else padrao tambem e testar o code