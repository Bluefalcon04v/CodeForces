var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var tc = input[0];
var inp = 1;
for (let t = 0; t < tc; t++) {
  let n = Number(input[inp++]);
  let s = input[inp++];

  let stack = [];
  stack.push(s[0]);

  for (let i = 1; i < n; i++) {
    if (stack.length > 0 && s[i] === "A") {
      stack.pop();
    } else {
      if (s[i] === "Q") {
        stack.push(s[i]);
      }
    }
  }

  console.log(stack.length > 0 ? "No" : "Yes");
}
