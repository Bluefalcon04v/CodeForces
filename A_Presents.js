let input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let t = +input[0];
let arr = Array(t).fill(0)
let ind = 1;

for (let i = 0; i < t; i++) {
    let num  = Number(input[ind++])
    arr[num - 1] = i+1
}


console.log(arr.join(' '))