const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let t = +input[0];
let index = 1;
while (t--) {
  let n = +input[index++];
  let arr1 = input[index++].split("");
  let arr2 = input[index++].split("");

  console.log({ n, arr1, arr2 });
} 