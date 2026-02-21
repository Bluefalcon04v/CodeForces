var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

let testcases = +input[0];
let val = input.slice(1);

for (let i = 0; i < testcases; i++) {
  let n = +val[2 * i];
  let s = val[2 * i + 1];
  console.log(minimumLetterReq(n, s));
}

function minimumLetterReq(n, s) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, s.charCodeAt(i) - 96);
  }
  return res;
}
