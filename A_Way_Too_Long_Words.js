const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  const word = input[i];
  const n = word.length;

  if (n > 10) {
    console.log(word[0] + (n - 2) + word[n - 1]);
  } else {
    console.log(word);
  }
}
