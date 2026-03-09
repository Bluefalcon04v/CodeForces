var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let testCases = Number(input[0]);
let inp = 1;

for (let t = 0; t < testCases; t++) {
  let n = Number(input[inp++]);
  let s = input[inp++];
  if (n !== 5) {
    console.log("NO");
    continue;
  }

  let map = {};
  for (let i = 0; i < n; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let resS = "Timur";
  for (let i = 0; i < 5; i++) {
    map[resS[i]] = (map[resS[i]] || 0) - 1;
  }

  let ok = true;
  for (let i in map) {
    if (map[i] !== 0) {
      ok = false;
      break;
    }
  }
  console.log(ok ? "YES" : "NO");
}
