var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

var tc = input[0];
var inp = 1;

for (let i = 0; i < tc; i++) {
  let dogFood = input[inp++];
  let catFood = input[inp++];
  let allFood = input[inp++];
  let dogs = input[inp++];
  let cats = input[inp++];

  let dogsNeed = Math.max(0, dogs - dogFood);
  allFood -= dogsNeed;

  let catsNeed = Math.max(0, cats - catFood);
  allFood -= catsNeed;

  if (allFood >= 0) console.log("YES");
  else console.log("NO");
}
