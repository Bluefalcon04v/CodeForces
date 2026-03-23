var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
var test_cases = input[0]
var t = 1

for (let test_ind = 0; test_ind < test_cases; test_ind++) {
    var n = input[t++]
    var arr = []
    for (let i = 0; i < n; i++) {
        arr.push(input[t++])
    }
    arr.sort((a, b) => a - b)
    let ans = Infinity;

    for (let i = 0; i <= n - 3; i++) {
        let cost = arr[i + 2] - arr[i];
        ans = Math.min(ans, cost);
    }
    console.log(ans)
}