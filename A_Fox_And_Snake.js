let input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
let m = Number(input[1]);
let res = [];
let side = 0;
while(n--){
    let n_isOdd = n % 2 === 0
    if(n_isOdd){
        let row = Array.from({length: m}, ()=> '#').join('')
        res.push(row)
    }
    else {
        if(side === 0){
            let row = Array.from({length:m-1}, ()=> '.')
            row.push('#')
            res.push(row.join(''))
            side = 1
        }
        else{
            let row = Array.from({length:m-1}, ()=> '.')
            row.unshift('#')
            res.push(row.join(''))
            side = 0
        }
    }
}

console.log(res.join('\n'));