var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let i = 0;
let n = input[i++];
let k = input[i++];
let l = input[i++];
let c = input[i++];
let d = input[i++];
let p = input[i++];
let nl = input[i++];
let np = input[i++];

let total_drinks = Math.floor((k * l) / nl);
let total_limes = c * d;
let total_salt   = Math.floor(p / np);

let res = Math.floor(Math.min(total_drinks, total_limes, total_salt) / n);
console.log(res);
