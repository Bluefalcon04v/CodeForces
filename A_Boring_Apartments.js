var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);

let t = Number(input[0]);
let idx = 1;

while (t--) {
    let x = input[idx++];

    let digit = Number(x[0]);
    let len = x.length;

    let ans = (digit - 1) * 10 + (len * (len + 1)) / 2;

    console.log(ans);
}