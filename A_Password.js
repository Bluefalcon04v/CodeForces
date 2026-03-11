var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

var testCases = input[0];
var inp = 1;

while (testCases--) {
  let n = Number(input[inp++]);
  inp += n;
  let allowed = 10 - n;

  let res = ((allowed * (allowed - 1)) / 2) * 6;
  console.log(res);
}
