var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let test_cases = Number(input[0])
let index = 1;

while (test_cases--) {
    let ans = [];
    let a = Number(input[index++])
    let b = Number(input[index++])
    let n = Number(input[index++])

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    function fibSeries(x, y) {
        let curr = x + y;
        if (curr > n) return;
        ans.push(curr);
        fibSeries(y, curr);
    }

    fibSeries(a, b);
    console.log(ans.length + 1)
}
