var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

let i = 0;
while(i < lines.length){
    let x = parseInt(lines[i++]);
    let y = parseInt(lines[i++]);
    let p = parseInt(lines[i++]);

    for(let j = 0; j < p; j++){
        let xi = parseInt(lines[i++]);
        let yi = parseInt(lines[i++]);

        if((xi <= x && yi < y) || (yi <= x && xi <= y)){
            console.log("Sim");
        } else{
            console.log("Nao");
        }
    }
}