var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let t = input[0];
let i = 1;
let maxCapacity = 0;
let currCapacity = 0;
while (t--) {
    let deLoading = Number(input[i++]);
    currCapacity -= deLoading;
    currCapacity += Number(input[i++])
    maxCapacity = Math.max(currCapacity, maxCapacity);
}

console.log(maxCapacity)