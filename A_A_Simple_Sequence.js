const input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

const test_cases = input[0];
let i = 1;

for (let t = 0; t < test_cases; t++) {
  let n = input[i++];
  let res = [2];

  for (let j = n; j >= 3; j--) {
    res.push(j);
  }

  res.push(1);

  console.log(res.join(" "));
}
