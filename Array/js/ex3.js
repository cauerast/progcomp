/*

function ex3(){
    let nota = [];
    let gostoumuito = 0;
    let gostou = 0;
    let naogostou = 0;


    for(let i = 0; i < 10; i++){
        do{
            nota.push(Number(prompt(`nota ${i + 1}: `)));
            nota += nota[i]
        } while (nota >= 1 && nota <= 3 );
    }

    if(nota[i] == 1){
        gostoumuito++;
    }
    else if(nota[i] == 2){
        gostou++;
    } 
    else{
        naogostou++;
    }


    console.log(`Notas ->
                        Gostou muito: ${gostoumuito}
                        Gostou: ${gostou}
                        Não gostou: ${naogostou}`);

    console.log(`Porcentagem de pessoas que nao gostaram ->
                        ${(naogostou/10) * 100}%`);
}


*/
function ex3(){

    let nota = [];
    let gostoumuito = 0;
    let gostou = 0;
    let naogostou = 0;

    for(let i = 0; i < 10; i++){
        do {
            nota[i] = (Number(prompt(`informe a ${i + 1}° nota`)));
        } while(nota[i] != 1 && nota[i] != 2 && nota[i] != 3);
    }

    for(let i = 0; i < 10; i++){
        if(nota[i] == 1){
            gostoumuito++;
        }
        else if(nota[i] == 2){
            gostou++;
        } 
        else{
         naogostou++;
        }
    }
    


    console.log(`Notas ->
                        Gostou muito: ${gostoumuito}
                        Gostou: ${gostou}
                        Não gostou: ${naogostou}`);

    console.log(`Porcentagem de pessoas que nao gostaram ->
                        ${(naogostou/nota.length) * 100}%`);
}