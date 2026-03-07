var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var testCases = input[0];
var s = input[1];
let stack = [s[0]];

for (let i = 1; i < testCases; i++) {
  let last = stack[stack.length - 1];
  if (last !== s[i]) {
    stack.push(s[i]);
  }
}

console.log(testCases - stack.length);
