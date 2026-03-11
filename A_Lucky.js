var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

var testCases = input[0];
var inp = 1;
for (let i = 0; i < testCases; i++) {
  let num = Number(input[inp++]);
  console.log(isLucky(num));
}

function isLucky(num) {
  let firstHalf = 0;
  let secondHalf = 0;
  let count = 6;
  while (num > 0) {
    let last = num % 10;
    if (count > 3) {
      firstHalf += last;
    } else {
      secondHalf += last;
    }
    num = Math.floor(num / 10);
    count--;
  }
  return firstHalf === secondHalf ? "YES" : "NO";
}
