var inputs = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);
var test_cases = inputs[0];
var index = 1;

for (let t = 0; t < test_cases; t++) {
  var a = inputs[index++];
  var b = inputs[index++];
  var c = inputs[index++];

  let time1 = Math.abs(a - 1);
  let time2 = Math.abs(b - c) + Math.abs(c - 1);

  if (time1 < time2) {
    console.log("1");
  } else if (time2 < time1) {
    console.log("2");
  } else {
    console.log("3");
  }
}
