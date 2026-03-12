var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var tc = input[0];
var inp = 1;

for (let i = 0; i < tc; i++) {
  let a = Number(input[inp++]);
  let count = 0;
  for (let j = 1; j < 4; j++) {
    if (Number(input[inp++]) > a) {
      count++;
    }
  }
  console.log(count);
}
