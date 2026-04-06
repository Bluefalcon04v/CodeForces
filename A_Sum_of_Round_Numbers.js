let input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let test_cases = input[0]
let index = 1
for(let t = 0; t < test_cases; t++){
    let n = input[index++]
    let curr = 0
    let arr = []
    while(n > 0){
        let last = n % 10
        if(last != 0){
            arr.push(last * (10 ** curr) )
        }
        n = Math.floor(n / 10)
        curr++
    }
    console.log(arr.length)
    console.log(arr.join(" "))
}
