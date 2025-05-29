// ex 7 by cauerast
function iap(){
    let idade = 0;
    let altura = 0;
    let peso = 0;
    
    let maiorCinquenta = 0;
    let pessoasDV = 0;
    let alturaDV = 0;
    let pesoInferiorQuarenta = 0

    let pessoas = 0;
    for (let i = 1; i <= 5; i++){

        do{
            idade = Number(prompt(`Informe sua idade: `));
        } while(idade < 0);
    
        do{
            altura = Number(prompt(`Informe sua altura (m): `));
        } while(altura < 0);
    
        do{
            peso = Number(prompt(`Informe seu peso (kg): `));
        } while(peso < 0);
    
    
        if(idade > 0 && idade < 100){
            pessoas++
            if(idade > 50){
                maiorCinquenta++;
            }
    
            if(idade >= 10 && idade <= 20){
                pessoasDV++;
                alturaDV += altura;
            }
    
            if(peso < 40 && peso > 0){
                pesoInferiorQuarenta++;
            }
        }
    }

    window.alert(`\n\n Pessoas com idade superior a 50: ${maiorCinquenta}\n\n Media das alturas das pessoas com idades entre 10 e 20: ${alturaDV/pessoasDV || 0}\n\n Porcentagem de pessoas com peso inferior a 40kg entre todas as pessoas: ${(pesoInferiorQuarenta/5) * 100}%`)
}