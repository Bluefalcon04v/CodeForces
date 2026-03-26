var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

let test_cases = input[0];
let index = 1;
for (let i = 0; i < test_cases; i++) {
  let n = input[index++];
  let m = input[index++];

  if (n === 1 && m == 1) {
    console.log("Tonya");
    continue;
  }
  if (n % 2 === 0 && m % 2 === 0) {
    console.log("Tonya");
    continue;
  } else {
    console.log("Burenka");
  }
}
