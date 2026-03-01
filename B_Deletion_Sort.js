var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var testCases = input[0];
let ind = 1;

for (let i = 0; i < testCases; i++) {
  let n = Number(input[ind++]);
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Number(input[ind++]));
  }
  console.log(DeletionSort(n, arr));
}

function DeletionSort(n, nums) {
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      return 1;
    }
  }
  return n;
}
