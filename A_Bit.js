const input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);

let operation = input[0]
let val = 0 
for(let i = 1; i <= operation; i++){
  if(input[i] == '++X' || input[i] === "X++"){
    val++
  } else {
    val--
  }
}
console.log(val)