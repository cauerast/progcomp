let numbers = [];
let par = 0;
let arrayPar = [];
let impar = 0;
let arrayImpar = [];
let soma = 0

for(let i = 0; i < 6; i++){
    do{
        numbers[i] = Number(prompt(`Insira o ${i + 1}° numero: `))
    } while(isNaN(numbers[i]));

    if(numbers[i] % 2 == 0){
        par++;
        soma += numbers[i];
        arrayPar.push(numbers[i])

    } else {
        impar++;
        arrayImpar.push(numbers[i])
    }
}

console.log(`quantidade de valores pares ${par}, que foram -> ${arrayPar.join(" ")}`)
console.log(`quantidade de valores impares: ${impar}, que  foram -> ${arrayImpar.join(" ")}`)
console.log(`media dos valores pares ${(soma / 6).toFixed(2)}`)