var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

var testCases = input[0];
var inp = 1;

for (let i = 0; i < testCases; i++) {
  let val = input[inp++];
  console.log(Math.ceil(val / 2));
}
