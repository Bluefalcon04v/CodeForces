var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let test_cases = Number(input[0]);
let i = 1;
let nums = [];
while (test_cases--) {
    nums.push(Number(input[i++]))
}

let max_increase = 1;
let temp = 1
for (let ind = 1; ind <= nums.length; ind++) {
    if (nums[ind - 1] < nums[ind]) {
        temp++
    } else {
        max_increase = Math.max(max_increase, temp)
        temp = 1
    }
}
max_increase = Math.max(max_increase, temp)
console.log(max_increase)
