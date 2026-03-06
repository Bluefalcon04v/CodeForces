var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);
var testCases = input[0];
var inp = 1;

for (let i = 0; i < testCases; i++) {
  let n = input[inp++];
  if (n < 10) {
    console.log(n - 1);
    continue;
  }

  let copy = n / 10;
  let tens = 1;

  while (copy >= 1) {
    tens = tens * 10;
    copy = copy / 10;
  }

  console.log(n - tens);
}
