var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let n = input[0];
let i = 1;
let res = "EASY";
while (n--) {
    if (input[i++] === '1') {
        res = "HARD";
    }
}

console.log(res)
