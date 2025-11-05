let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNums = nums.filter((num) => num % 2 == 0)
console.log(evenNums)

let names = ["caue", "igor", "miguel", "laura"]
let namesGTFour = names.filter((name) => {
    return name.length > 4
})
console.log(namesGTFour)