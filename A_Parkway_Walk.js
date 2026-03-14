var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var testCases = input[0];

var inp = 1;
for (let i = 0; i < testCases; i++) {
  var n = Number(input[inp++]);
  var m = Number(input[inp++]);
  var nums = [];
  for (let j = 0; j < n; j++) {
    nums.push(Number(input[inp++]));
  }

  let totalEnergy = 0;
  for (let j = 0; j < n; j++) {
    totalEnergy += nums[j];
  }

  console.log(Math.max(0, totalEnergy - m));
}
