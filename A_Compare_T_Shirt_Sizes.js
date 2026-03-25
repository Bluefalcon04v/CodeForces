var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var test_cases = input[0];
var i = 1;

for (let t = 0; t < test_cases; t++) {
  let a = input[i++];
  let b = input[i++];

  let len_a = a.length;
  let len_b = b.length;
  let res;

  let lastA = a[len_a - 1];
  let lastB = b[len_b - 1];

  if (lastA === lastB) {
    if (lastA === "S") {
      if (len_a > len_b) res = "<";
      else if (len_a < len_b) res = ">";
      else res = "=";
    } else if (lastA === "L") {
      if (len_a > len_b) res = ">";
      else if (len_a < len_b) res = "<";
      else res = "=";
    } else {
      res = "=";
    }
  } else {
    if ((lastA === "S" || lastA === "M") && (lastB === "M" || lastB === "L")) {
      res = "<";
    } else {
      res = ">";
    }
  }

  console.log(res);
}
