var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(n > lines[0]){

    for(let i = 1; i < lines.length; i++){
        let word = lines[i].split("")
        if(word[i] !== word[i + 1] && word[i + 2] == "_"){
            
        }
    }
    n++
    break
}