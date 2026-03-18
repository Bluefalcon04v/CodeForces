var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var test_case = input[0];
var inp = 1;
for (let t = 0; t < test_case; t++) {
  let n = Number(input[inp++]);
  let matrix = [];
  for (let row = 0; row < 2; row++) {
    let column = input[inp++].split("");
    matrix.push(column);
  }

  let ans = "YES";
  for (let c = 0; c < n; c++) {
    let first = matrix[0][c];
    let second = matrix[1][c];
    if (
      (first === "R" && second !== "R") ||
      (first !== "R" && second === "R")
    ) {
      ans = "NO";
      break;
    }
  }
  console.log(ans);
}
