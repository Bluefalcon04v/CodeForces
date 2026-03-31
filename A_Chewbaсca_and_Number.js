let num = require('fs').readFileSync(0, 'utf8').trim();

let res = "";

for (let i = 0; i < num.length; i++) {
    let digit = Number(num[i]);

    if (i === 0 && digit === 9) {
        res += '9';
    } else {
        if (digit >= 5) {
            res += (9 - digit);
        } else {
            res += digit;
        }
    }
}

console.log(res);
