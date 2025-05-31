// ex 9 by cauerast
function ipa(){
    let idade = 0;
    let peso = 0;
    let altura = 0;
    let i = 0;

    let somaIdades = 0;
    let peso90alt150 = 0;
    let idade10a30 = 0
    let alt190 = 0;


    for(i = 1; i <= 10; i++){
        do {
            idade = Number(prompt(`Idade da pessoa [ ${i} ]: `))
        } while (idade < 0 || isNaN(idade));

        do {
            peso = Number(prompt(`Peso da pessoa [ ${i} ]: `))
        } while (peso < 0 || isNaN(peso));

        do {
            altura = Number(prompt(`Altura da pessoa [ ${i} ]: `))
        } while (altura < 0 || isNaN(altura));

        somaIdades += idade

        if(peso > 90 && altura < 1.50){
            peso90alt150++;
        }

        if(altura > 1.90){
            alt190++;

            if(idade >= 10 && idade <= 30){
            idade10a30++;
            }
        }
    }

    window.alert(`Média das idades: ${(somaIdades/10).toFixed(2)}`)
    window.alert(`Quantidade de pessoas com peso maior que 90kg e altura inferior a 1.50m: ${peso90alt150}`)
    window.alert(`Porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90m : ${((idade10a30 * 100)/ alt190).toFixed(2) || 0}%`)

}