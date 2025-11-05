let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = nums.reduce((acc, num) => acc + num, 0)
console.log(sum)

let words = ["sol", "lua", "estrela"]
let sumWords = words.reduce((acc, word) => {
    return acc + word.length
}, 0)
console.log(sumWords)