// função que recebe parâmetro
// função não retorna valor
function mensagem(saudacao){
    console.log(saudacao)
}

// função que recebe parâmetro
// função que retorna valor
function soma(a, b){
    return a + b
}
function multiplicacao(a, b){
    return a * b
}
function main(){
    mensagem("bom dia")
    mensagem("boa tarde")
    mensagem("boa noite")
    console.log(soma(4, 9))   
    console.log(multiplicacao(3, 5)) 
}

main()

    