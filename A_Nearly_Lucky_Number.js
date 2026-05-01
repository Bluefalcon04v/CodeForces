let input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);

let count = 0
for (let i of input[0]) {
    if (i == 7 || i == 4) {
        count++
    }
}

console.log(count == 4 || count == 7 ? 'YES' : 'NO')