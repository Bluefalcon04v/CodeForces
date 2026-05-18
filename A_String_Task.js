var input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let text = input[0];
let str = text.toLocaleLowerCase()
let res = [];
let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
for(let i of str){
    if(!vowels.includes(i)){
        res.push('.', i)
    }

}

console.log(res.join(''))