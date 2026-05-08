var inp = require('fs').readFileSync(0, 'utf8').trim();

let n = Number(inp);

let height = 0;
let used = 0;

for (let i = 1; ; i++) {
    let level = (i * (i + 1)) / 2;

    if (used + level > n) break;

    used += level;
    height++;
}

console.log(height);