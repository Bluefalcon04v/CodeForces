var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);
var test_cases = input[0];
var i = 1;
for (let t = 0; t < test_cases; t++) {
  var key = input[i++];
  var array = [];
  for (let index = 0; index < 3; index++) {
    array.push(input[i++]);
  }

  let inside_key;
  for (let index = 0; index < 3; index++) {
    if (array[key - 1] >= 0) {
      inside_key = array[key - 1];
      array[key - 1] = -1;
      key = inside_key;
    }
  }

  let ans = "YES";
  for (let index = 0; index < 3; index++) {
    if (array[index] >= 0) {
      ans = "NO";
    }
  }
  console.log(ans);
}
