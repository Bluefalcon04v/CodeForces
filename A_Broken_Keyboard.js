var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var test_cases = input[0];
var index = 1;

for (let t = 0; t < test_cases; t++) {
  var s = input[index++];
  var result = new Set();

  let i = 0;
  while (i < s.length) {
    let j = i;
    while (j < s.length && s[i] == s[j]) {
      j++;
    }
    var count = j - i;
    if (count % 2 === 1) {
      result.add(s[i]);
    }
    i = j;
  }

  console.log([...result].sort().join(""));
}
