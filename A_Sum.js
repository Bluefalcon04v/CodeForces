var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);
var tesCases = input[0];
var inp = 1;
for (let i = 0; i < tesCases; i++) {
  let a = input[inp++];
  let b = input[inp++];
  let c = input[inp++];
  console.log(a + b === c || a + c === b || b + c === a ? "YES" : "NO");
}
