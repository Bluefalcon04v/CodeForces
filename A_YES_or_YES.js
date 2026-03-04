var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var tesCases = input[0];
var str = 1;

for (let i = 0; i < tesCases; i++) {
  var s = input[str++];
  let char = "YES";
  let count = 0;

  for (let i = 0; i < 3; i++) {
    let compare = char.charCodeAt(i);
    let ch = s.charCodeAt(i);
    if (compare != ch && compare + 32 != ch) {
      count++;
    }
  }
  console.log(count > 0 ? "NO" : "YES");
}
