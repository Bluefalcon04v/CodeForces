var input = require("fs").readFileSync(0, "utf8").trim().split(/\n/);

let matrix = [];
for (let i = 0; i < 5; i++) {
  let row = input[i].split(" ").map(Number);
  matrix.push(row);
}

let m = 1;
let n = 1;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (matrix[i][j] === 1) {
      m = i + 1;
      n = j + 1;
    }
  }
}
let calc = Math.abs(m - 3) + Math.abs(n - 3)

console.log(calc);
