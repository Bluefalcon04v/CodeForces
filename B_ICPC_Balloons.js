var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var test_cases = input[0];
var index = 0;
for (let t = 0; t < test_cases; t++) {
  var s = input[(index += 2)];
  var array = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let ch = s.charCodeAt(i) - 65;
    array[ch] += 1;
  }

  let max_balloons = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 1) {
      max_balloons += array[i] + 1;
    } else if (array[i] === 1) {
      max_balloons += 2;
    }
  }
  console.log(max_balloons);
}
