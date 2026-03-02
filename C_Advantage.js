var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

var t = input[0];
var inp = 1;

for (let i = 0; i < t; i++) {
  let n = Number(input[inp++]);
  let arr = [];
  for (let j = 0; j < n; j++) {
    arr.push(Number(input[inp++]));
  }
  console.log(advantage(n, arr));
}

function advantage(n, arr) {
  let max = 0;
  let sec = -1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[max]) {
      sec = max;
      max = i;
    } else if (i !== max && (sec === -1 || arr[i] > arr[sec])) {
      sec = i;
    }
  }

  let maxElem = arr[max];
  let secElem = arr[sec];

  for (let i = 0; i < n; i++) {
    if (i === max) {
      arr[i] = maxElem - secElem;
    } else {
      arr[i] = arr[i] - maxElem;
    }
  }

  return arr.join(" ");
}
