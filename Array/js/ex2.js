function ex2(){
    let a = []
    let i = 0
    for(let i = 0; i < 10; i++){
        a.push(Number(prompt(`Informe o ${i + 1}° numero: `)))
    }
    
    for(let i = 0; i < 10; i++){
        if(i % 2 == 0){
            a[i] = a[i] + 10;
        }
        else{
            a[i] = a[i] * 5;

        }
    }

    console.log(a);
    
}

