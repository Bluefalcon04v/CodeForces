var s = require("fs").readFileSync(0, "utf8").trim();

var n = s.length;
var lps = new Array(n).fill(0);

let i = 0;
let j = 1;

while (j < n) {
  if (s[i] == s[j]) {
    lps[j] = i + 1;
    i++;
    j++;
  } else {
    if (i === 0) {
      lps[j] = 0;
      j++;
    } else {
      i = lps[i - 1];
    }
  }
}

let len = lps[n - 1];

while (len > 0) {
  // check if this length exists in middle
  let found = false;

  for (let i = 0; i < n - 1; i++) {
    if (lps[i] === len) {
      found = true;
      break;
    }
  }

  if (found) {
    console.log(s.slice(0, len));
    return;
  }

  // try next smaller border
  len = lps[len - 1];
}

console.log("Just a legend");
