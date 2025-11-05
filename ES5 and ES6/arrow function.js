const multiplicar = ((a, b) => {
    return a * b;
})
console.log(multiplicar())

const hello = (() => {
    return "Hello World!";
})
console.log(hello())

const helloWorld = (() => "hello world!!!!!!!!!!!!!")
console.log(helloWorld())

const mostrarNome = ((nome) => `nome da pessoa: ${nome}`)
console.log(mostrarNome("caue"))

