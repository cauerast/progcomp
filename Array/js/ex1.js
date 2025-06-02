function ex1(){
    let array = [];
    let pares = ""
    let qtdPares = 0
    let impares = ""
    let qtdImpares = 0

    for(let i = 0; i < 6; i++){
        array.push(Number(prompt(`Informe o ${i + 1}° nùmero: `)))
    }

    for(let i = 0; i < 6; i++){
        if(array[i] % 2 == 0){
            pares += i + " " 
            qtdPares++
        }
        else{
            impares += i
            qtdImpares++
        }
    }

    console.log(`numeros pares: ${pares}
        Quantidade de numeros pares: ${qtdPares}
        numeros impares: ${impares}
        Quantidade de numeros impares: ${qtdImpares}`)
}