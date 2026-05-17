var input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let t = Number(input[0]);
let idx = 1;

while (t--) {
    let [n, m] = input[idx++].split(' ').map(Number);

    let grid = [];
    for (let i = 0; i < n; i++) {
        grid.push(input[idx++]);
    }

    let ans = 0;

    // Check last row (except last cell)
    for (let j = 0; j < m - 1; j++) {
        if (grid[n - 1][j] !== 'R') {
            ans++;
        }
    }

    // Check last column (except last cell)
    for (let i = 0; i < n - 1; i++) {
        if (grid[i][m - 1] !== 'D') {
            ans++;
        }
    }

    console.log(ans);
}