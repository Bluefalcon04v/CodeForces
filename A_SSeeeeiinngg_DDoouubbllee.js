var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var total_test_cases = input[0];
var index = 1;

for (let test_case = 0; test_case < total_test_cases; test_case++) {
  var string = input[index++];
  var palindrome_string = "";

  for (let ind = 0; ind < string.length; ind++) {
    palindrome_string += string[ind];
    palindrome_string += string[string.length - 1 - ind];
  }
  console.log(palindrome_string);
}
