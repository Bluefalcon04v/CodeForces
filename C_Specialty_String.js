var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

var testCases = input[0];
var inp = 1;

for (let i = 0; i < testCases; i++) {
  let n = Number(input[inp++]);
  let s = input[inp++];
  console.log(SpecialStr(n, s));
}

function SpecialStr(n, s) {
  let stack = [];

  for (let i of s) {
    if (stack.length && stack[stack.length - 1] == i) {
      stack.pop();
    } else {
      stack.push(i);
    }
  }

  return stack.length ? "NO" : "YES";
}
