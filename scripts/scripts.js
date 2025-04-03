function calcular() {
    let soma = 0;
    let pontosKitSup = 0;
    let pontosDoacaoSangue = 0;
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
    soma += doacaoSangue


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
        if (doacaoSangue >= 49) {
            pontosDoacaoSangue = 2500 + ((doacaoSangue - 49) * 20);
        }
        else {
            pontosDoacaoSangue = doacaoSangue * 20;
        }
    }


    if (equipe === "Preta") {
        if (kitAlimentacao >= 103 && suplemento >= 52) {
            pontosKitSup = 5000 + ((kitAlimentacao - 103) * 30) + ((suplemento - 52) * 15);
        }
        else if (kitAlimentacao >= 82 && suplemento >= 42) {
            pontosKitSup = (0.8 * 5000) + ((kitAlimentacao - 82) * 30) + ((suplemento - 42) * 15);
        }
        else if (kitAlimentacao >= 52 && suplemento >= 26) {
            pontosKitSup = (0.5 * 5000) + ((kitAlimentacao - 52) * 30) + ((suplemento - 26) * 15);
        }
        else if (kitAlimentacao >= 21 && suplemento >= 10) {
            pontosKitSup = (0.2 * 5000) + ((kitAlimentacao - 21) * 30) + ((suplemento - 10) * 15);
        }
        else {
            pontosKitSup = 0
        }
    }
    if (equipe === "Preta") {
        if (doacaoSangue >= 52) {
            pontosDoacaoSangue = 2500 + ((doacaoSangue - 52) * 20);
        }
        else {
            pontosDoacaoSangue = doacaoSangue * 20;
        }
    }


    if (equipe === "Roxa") {
        if (kitAlimentacao >= 102 && suplemento >= 51) {
            pontosKitSup = 5000 + ((kitAlimentacao - 102) * 30) + ((suplemento - 51) * 15);
        }
        else if (kitAlimentacao >= 82 && suplemento >= 41) {
            pontosKitSup = (0.8 * 5000) + ((kitAlimentacao - 82) * 30) + ((suplemento - 41) * 15);
        }
        else if (kitAlimentacao >= 51 && suplemento >= 26) {
            pontosKitSup = (0.5 * 5000) + ((kitAlimentacao - 51) * 30) + ((suplemento - 26) * 15);
        }
        else if (kitAlimentacao >= 20 && suplemento >= 10) {
            pontosKitSup = (0.2 * 5000) + ((kitAlimentacao - 20) * 30) + ((suplemento - 10) * 15);
        }
        else {
            pontosKitSup = 0
        }
    }
    if (equipe === "Roxa") {
        if (doacaoSangue >= 51) {
            pontosDoacaoSangue = 2500 + ((doacaoSangue - 51) * 20);
        }
        else {
            pontosDoacaoSangue = doacaoSangue * 20;
        }
    }


    if (equipe === "Verde") {
        if (kitAlimentacao >= 88 && suplemento >= 44) {
            pontosKitSup = 5000 + ((kitAlimentacao - 88) * 30) + ((suplemento - 44) * 15);
        }
        else if (kitAlimentacao >= 70 && suplemento >= 35) {
            pontosKitSup = (0.8 * 5000) + ((kitAlimentacao - 70) * 30) + ((suplemento - 35) * 15);
        }
        else if (kitAlimentacao >= 44 && suplemento >= 22) {
            pontosKitSup = (0.5 * 5000) + ((kitAlimentacao - 44) * 30) + ((suplemento - 22) * 15);
        }
        else if (kitAlimentacao >= 18 && suplemento >= 9) {
            pontosKitSup = (0.2 * 5000) + ((kitAlimentacao - 18) * 30) + ((suplemento - 9) * 15);
        }
        else {
            pontosKitSup = 0
        }
    }
    if (equipe === "Verde") {
        if (doacaoSangue >= 44) {
            pontosDoacaoSangue = 2500 + ((doacaoSangue - 44) * 20);
        }
        else {
            pontosDoacaoSangue = doacaoSangue * 20;
        }
    }


    if (equipe === "Vermelha") {
        if (kitAlimentacao >= 93 && suplemento >= 47) {
            pontosKitSup = 5000 + ((kitAlimentacao - 93) * 30) + ((suplemento - 47) * 15);
        }
        else if (kitAlimentacao >= 74 && suplemento >= 38) {
            pontosKitSup = (0.8 * 5000) + ((kitAlimentacao - 74) * 30) + ((suplemento - 38) * 15);
        }
        else if (kitAlimentacao >= 47 && suplemento >= 24) {
            pontosKitSup = (0.5 * 5000) + ((kitAlimentacao - 47) * 30) + ((suplemento - 24) * 15);
        }
        else if (kitAlimentacao >= 19 && suplemento >= 9) {
            pontosKitSup = (0.2 * 5000) + ((kitAlimentacao - 19) * 30) + ((suplemento - 9) * 15);
        }
        else {
            pontosKitSup = 0
        }
    }
    if (equipe === "Vermelha") {
        if (doacaoSangue >= 47) {
            pontosDoacaoSangue = 2500 + ((doacaoSangue - 47) * 20);
        }
        else {
            pontosDoacaoSangue = doacaoSangue * 20;
        }
    }

    soma = soma + pontosKitSup + pontosDoacaoSangue;
    document.getElementById("soma").innerHTML = `${soma.toFixed(2)} pts`;
}

// fazer o if e else da doação de sangue para todos os times e os if else padrao tambem e testar o code