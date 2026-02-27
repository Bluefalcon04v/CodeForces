var input  = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);

var tesCases = input[0]
var index = 1;

for(let i = 0; i< tesCases; i++){
    let n = Number(input[index++])
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Number(input[index++]));
    }
    console.log(EatingGames(n,arr))
}

function EatingGames(n,nums){
    let max= 0
    let count = 0
    for(let i = 0; i < n; i++){
        max = Math.max(max, nums[i])
    }
    for(let i = 0; i< n; i++){
        if(nums[i] === max){
            count++
        }
    }
    return count
}
