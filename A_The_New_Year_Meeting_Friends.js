var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let x1 = input[0], x2 = input[1], x3 = input[2];

let minVal = Math.min(x1, x2, x3);
let maxVal = Math.max(x1, x2, x3);

console.log((maxVal - minVal));