function main(){
    let x = 10
    console.log(`dobro do numero: ${mostrarDobro(x)}`);

    let quadrado = calcularQuadrado(x)
    console.log(`quadrado do numero: ${quadrado}`);
}

function mostrarDobro(x){
    return x * 2;
}

function calcularQuadrado(x){
    return x ** 2;
}

main();