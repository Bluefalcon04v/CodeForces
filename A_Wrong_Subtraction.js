var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

var n = input[0];
var k = input[1];

while (k > 0) {
  let lastDigit = n % 10;
  if (lastDigit > 0) {
    n -= 1;
  } else {
    n = n / 10;
  }
  k--;
}

console.log(n)