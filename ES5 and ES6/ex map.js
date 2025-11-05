let precosUSD = [10, 25.50, 8, 100, 35.25]

let precosREAL = precosUSD.map((price) => Number((price * 5).toFixed(2)))
console.log(precosREAL)

