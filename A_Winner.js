const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let testCases = Number(input[0])
let scoreMap = new Map()

let rounds= []
for (let i = 0; i < testCases; i++) {
    const name = input[1 + i * 2];
    const score = Number(input[2 + i * 2]);
    rounds.push([name, score])
    scoreMap.set(name, (scoreMap.get(name) || 0) + score)
    
}

let maxScore = -Infinity
for(let score of scoreMap.values()){
    maxScore = Math.max(score, maxScore)
}

let currScoreMap = new Map()
for (let [name, score] of rounds){
    currScoreMap.set(name, (currScoreMap.get(name) || 0 ) + score)
    if (currScoreMap.get(name) >= maxScore && scoreMap.get(name) === maxScore){
        console.log(name)
        break;
    }
}
