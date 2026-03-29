let input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

let t = input[0];
let index = 1;
let output = [];

while (t--) {
  const n = input[index++];
  const p = Array.from({ length: n }, () => input[index++]);

  const marked = Array(n + 1).fill(false);
  let chairsSat = 0;

  for (let i = 1; i <= n; i++) {
    if (marked[i]) break;
    chairsSat++;
    marked[p[i - 1]] = true;
  }

  output.push(chairsSat);
}

console.log(output.join("\n"));
