var input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let t = Number(input[0]);

for (let k = 1; k <= t; k++) {
    let s = input[k];

    let stack = [];
    let started = false;
    let ans = 0;

    for (let ch of s) {

        if (ch === '1') {
            started = true;

            ans += stack.length;

            stack = [];
        }
        else if (started) {
            stack.push('0');
        }
    }

    console.log(ans);
}