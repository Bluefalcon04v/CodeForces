var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let limak_weight = Number(input[0]);
let bob_weight = Number(input[1]);
let year = 0;
while (limak_weight <= bob_weight) {
    limak_weight *= 3
    bob_weight *= 2
    year++
}

console.log(year)