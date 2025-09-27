var input = "3\nab bd\nabc abc\nabcdefghiz aaaaaaaaaa"
var lines = input.split('\n');

let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let T = parseInt(lines[0]);

for(let i = 1; i <= T; i++){
    let [A, B] = lines[i].trim().split(" ");
    let total = 0

    for(let i = 0; i < A.length; i++){
        let iA = alfabeto.indexOf(A[i])
        let iB = alfabeto.indexOf(B[i])
        total += (iB - iA + 26) % 26;
    }
    console.log(total)
}