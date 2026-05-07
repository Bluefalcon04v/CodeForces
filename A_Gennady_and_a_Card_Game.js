var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let cardOnTable = input[0].split('');
let index = 1;
let res = 'NO'

for (let i = 0; i < 5; i++) {
    let handCard = input[index++];
    for (let j = 0; j < 2; j++) {
        if (cardOnTable[j] == handCard[j]) {
            res = 'YES'
        }
    }
}
console.log(res)