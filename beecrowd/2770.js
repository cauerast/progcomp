var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let index = 0;

while(index < lines.length){ // EOF
    let [pciX, pciY, qtdPci] = lines[index].split(' ').map(Number);
    index++;

    for(let i = 0; i < qtdPci; i++, index++){
        let [pciClienteX, pciClienteY] = lines[index].split(' ').map(Number);

        if((pciClienteX <= pciX && pciClienteY <= pciY) || (pciClienteY <= pciX && pciClienteX <= pciY)){
            console.log(`Sim`)
        }
        else{
            console.log(`Nao`)
        }
    }
}