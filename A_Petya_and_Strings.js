var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

let s1 = input[0].toLocaleLowerCase();
let s2 = input[1].toLocaleLowerCase();

for (let i = 0; i < s1.length; i++) {
  let char1 = s1.charCodeAt(i);
  let char2 = s2.charCodeAt(i);
  if (char1 < char2) {
    console.log(-1);
    return;
  } else if (char1 > char2) {
    console.log(1);
    return;
  }
}

console.log(0);
