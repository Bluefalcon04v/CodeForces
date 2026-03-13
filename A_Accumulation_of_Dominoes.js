const [n, m] = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(BigInt);

console.log((m === 1n ? n - 1n : n * (m - 1n)).toString());
