function list(){
    let group = 1;
    let aux;
    let sort = 1;

    while(group <= 5){
        let a = Number(prompt(`Informe o valor de A: `));
        let b = Number(prompt(`Informe o valor de B: `));
        let c = Number(prompt(`Informe o valor de C: `));
        let d = Number(prompt(`Informe o valor de D: `));
        let digUser = (`${a}, ${b}, ${c}, ${d}`);
        
        while(sort <= 3){
            if(a > b){
                aux = a;
                a = b;
                b = aux;
            }
            else if(b > c){
                aux = b;
                b = c;
                c = aux;
            }
            else if(c > d){
                aux = c;
                c = d;
                d = aux;
            }

            sort++;
        }

        window.alert(`Grupo ${group} --> \n
                        Numeros inseridos pelo usuário: ${digUser}\n 
                        Numeros em ordem crescente: ${a}, ${b}, ${c}, ${d}\n
                        Numeros em ordem decrescente: ${d}, ${c}, ${b}, ${a}`);
        group++;
    }
}