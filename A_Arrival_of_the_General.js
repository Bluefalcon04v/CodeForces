var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let test_cases = input[0];

let nums = [];
let i = 1;
for (let t = 0; t < test_cases; t++) {
    nums.push(Number(input[i++]));
}

let maxIndex = 0;
let minIndex = 0;

for (let cadet = 0; cadet < test_cases; cadet++) {
    if (nums[maxIndex] < nums[cadet]) {
        maxIndex = cadet;
    }
    if (nums[minIndex] >= nums[cadet]) {
        minIndex = cadet;
    }
}

let res = maxIndex  + (test_cases - 1 - minIndex);
if (maxIndex > minIndex) {
    res -= 1;
}

console.log(res);

