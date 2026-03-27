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

  if ((n + m) % 2 === 0) {
    console.log("Tonya");
  } else {
    console.log("Burenka");
  }
}
