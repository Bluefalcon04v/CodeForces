var input = require("fs").readFileSync(0, "utf8").trim();

var firstWord = input.charCodeAt(0);
if (firstWord > 90) {
  caps = String.fromCharCode(firstWord - 32);
  console.log(input.replace(input[0], caps))

} else {
  console.log(input);
}
