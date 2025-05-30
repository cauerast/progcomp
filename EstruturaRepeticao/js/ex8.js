// ex 8 by cauerast
function ipao(){
    let idade = 0;
    let peso = 0;
    let altura = 0;

    let corOlhos = "";
    let olhoAzul = 0;
    let olhoPreto = 0;
    let olhoVerde = 0;
    let olhoCastanho = 0;

    let corCabelos = "";
    let cabeloPreto = 0;
    let cabeloCastanho = 0;
    let cabeloLouro = 0;
    let cabeloRuivo = 0;

    let idadeMaiorCinquentaEPesoInferiorSessenta = 0;
    let idadeAltBaixa = 0;
    let qtdeAlturaBaixa = 0;
    let ruivoSemOlhosAzuis = 0;



    for(let i = 1; i <= 6; i++){
        do {
            idade = Number(prompt(`Idade da pessoa ${i}: `));
        } while(idade < 0 || isNaN(idade));

        do {
            peso = Number(prompt(`Peso da pessoa ${i}: `));
        } while (peso < 0 || isNaN(peso));

        do {
            altura = Number(prompt(`Altura da pessoa ${i}: `));
        } while (altura < 0 || isNaN(altura));

        do {
        corOlhos = String(prompt(`Cor dos olhos da pessoa ${i} [A-azul; P-preto; V-verde; C-castanho]: `).toUpperCase());
        } while (corOlhos != `A` && corOlhos != `P` && corOlhos != `V` && corOlhos != `C`);

            if(corOlhos === `A`){
                olhoAzul++;
            }
            else if(corOlhos === `P`){
                olhoPreto++;
            }
            else if(corOlhos === `V`){
                olhoVerde++;
            }
            else if(corOlhos === `C`){
                olhoCastanho++;
            }
            else{
                window.alert(`Informe uma cor válida!`);
            }

        do {
        corCabelos = String(prompt(`Cor dos cabelos da pessoa ${i} [P-preto; C-castanhos L-louro; R-ruivo]: `).toUpperCase());
        } while (corCabelos != `P` && corCabelos != `C` && corCabelos != `L` && corCabelos != `R`);

            if(corCabelos === `P`){
                cabeloPreto++;
            }
            else if(corCabelos === `C`){
                cabeloCastanho++;
            }
            else if(corCabelos === `L`){
                cabeloLouro++;
            }
            else if(corCabelos == `R`){
                cabeloRuivo++;
            }
            else{
                window.alert(`Informe uma cor válida!`);
            }
        
        if(idade > 50 && peso < 60){
            idadeMaiorCinquentaEPesoInferiorSessenta++;
        }

        if(altura < 1.5){
            idadeAltBaixa += idade;
            qtdeAlturaBaixa++;
        }
        
        if(corCabelos === `R` && corOlhos != `A`){
            ruivoSemOlhosAzuis++
        }

        
    }

    window.alert(
        `Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg: ${idadeMaiorCinquentaEPesoInferiorSessenta}\n` +
        `Média das idades das pessoas com altura inferior a 1,50 m: ${(idadeAltBaixa / qtdeAlturaBaixa).toFixed(2) || 0}\n` +
        `Porcentagem de pessoas com olhos azuis: ${(olhoAzul / 6 * 100).toFixed(2)}%\n` +
        `Quantidade de pessoas ruivas que não possuem olhos azuis: ${ruivoSemOlhosAzuis}`);
}
