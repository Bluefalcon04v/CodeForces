var input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let n = Number(input[0]);
let t = input[1];

let res = ''
let i = 0
let jump = 1

while(i < n){
    res += t[i]
    i += jump
    jump++
}

console.log(res)