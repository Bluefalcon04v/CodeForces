var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

const test_cases = input[0];
let i = 1;

for (let t = 0; t < test_cases; t++) {
  let s1 = input[i++];
  let s2 = input[i++];
  let s3 = input[i++];

  if (
    (s1 == s2 && s3 % 2 == 0) ||
    (s1 == s3 && s2 % 2 == 0) ||
    (s2 == s3 && s1 % 2 == 0)
  ) {
    console.log("YES");
  } else if (s1 + s2 == s3 || s1 + s3 == s2 || s2 + s3 == s1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
