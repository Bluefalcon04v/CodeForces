var input = require("fs").readFileSync(0, "utf8").trim();

function genderIdentifier(s) {
  let distinct = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let dup = 0;
    for (let j = i; j < n; j++) {
      if (s[i] === s[j]) {
        dup++;
      }
    }
    if (dup === 1) distinct++;
  }
  console.log(distinct % 2 === 0 ? "CHAT WITH HER!" : "IGNORE HIM!");
}

genderIdentifier(input);
