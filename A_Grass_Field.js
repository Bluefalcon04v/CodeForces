var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var testCases = input[0];
var inp = 1;

for (let i = 0; i < testCases; i++) {
  let matrix = [];
  for (let m = 0; m < 2; m++) {
    let row = [];
    for (let n = 0; n < 2; n++) {
      row.push(Number(input[inp++]));
    }
    matrix.push(row);
  }

  console.log(grassField(matrix));
}

function grassField(nums) {
  let count = nums[0][0] + nums[0][1] + nums[1][0] + nums[1][1];

  if (count === 0) return 0;
  if (count === 4) return 2;
  return 1;
}
