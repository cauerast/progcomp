// ex 10 by cauerast

function SomaParEPrimos(){
    let i = 0;
    let k = 0;
    let numero = 0;
    let somaPar = 0;
    let somaPrimos = 0;
    
    for(i = 1; i <= 10; i++){
        do {
            numero = Number(prompt(`[${i}] - Insira um número -> `));
        } while (numero < 0 || isNaN(numero)); 
        
        
        if(numero % 2 == 0){
            somaPar += numero;
        }
        

        let divisores = 0;

        for(k = 1; k <= numero; k++){
            if(numero % k == 0){
                divisores++;
            }
        }

        if(divisores == 2){
            somaPrimos += numero;
        }


    }

    window.alert(`Soma dos numeros pares: ${somaPar}`);
    window.alert(`Soma dos numeros primos: ${somaPrimos}`);
}
