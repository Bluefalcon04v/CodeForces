var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

var n = +input[0];
var val = input.splice(1);

function xVal(n, arr) {
  let out = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == "X++" || arr[i] == "++X") {
      out += 1;
    } else {
      out -= 1;
    }
  }
  console.log(out);
}

xVal(n, val);
