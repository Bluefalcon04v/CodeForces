let input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

let t = input[0];
let index = 1;

while (t--) {
  const n = input[index++];
  const p = Array.from({ length: n }, () => input[index++]);

  let chairsSat = 0;
  for (let i = 0; i < n; i++) {
    if (p[i] <= i + 1) chairsSat++;
  }

  console.log(chairsSat);
}
