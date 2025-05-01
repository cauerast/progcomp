function exe0(){
    let nota;
    let count = 1;
    let soma = 0;
    while(count <= 6){
        nota = Number(prompt(`informe a nota ${count}: `));
        soma = soma + nota
        count++;
    }
    let media = soma / 6;
    alert(`A media das notas: ${media.toFixed(2)}`)
}