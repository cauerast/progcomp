var input = "7\n8\n10\n8\n260\n4\n10\n10"
var lines = input.split('\n');

let e = parseInt(lines[0]);
let nums = [];
for(let i = 1; i <= e; i ++){
    nums.push(lines[i])
}
nums.sort((a, b) => a - b)

let atual = nums[0];
let count = 0;

for(let i = 0; i < nums.length; i++){
    if(atual === nums[i]){
        count++;
    } else{
        console.log(`${atual} aparece ${count} vez(es)`)
        atual = nums[i]
        count = 1;
    }
}

console.log(atual + " aparece " + count + " vez(es)");
