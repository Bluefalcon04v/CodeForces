var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var testCases = input[0];
var inp = 1;
for (let i = 0; i < testCases; i++) {
  let n = Number(input[inp++]);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(input[inp++]));
  }
  console.log(advantage(arr, n));
}

function advantage(nums, n) {
  let largest = 0;
  let second = -1;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[largest]) {
      second = largest;
      largest = i;
    } else if (second === -1 || nums[i] > nums[second]) {
      second = i;
    }
  }
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i === largest) {
      res[i] = nums[largest] - nums[second];
    } else {
      res[i] = nums[i] - nums[largest];
    }
  }
  return res.join(" ");
}
