// const input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
// let test_cases = input[0]
// let i = 1
// let map = {}
// for(let t = 0; t < test_cases; t++){
//     let name = input[i++]
//     let score = Number(input[i++])
//     map[name] = [(map[name]?.[0] ?? 0) + score, map[name]?.[1] ?? t]
// }

// let curr_max_score = 0
// let curr_name 
// let index 
// for(let i in map){
//     if (map[i][0] > curr_max_score) {
//         curr_max_score = map[i][0];
//         curr_name = i;
//         index = map[i][1];
//     } else if (map[i][0] === curr_max_score && i < curr_name) {
//         curr_name = i;
//         index = map[i][1];
//     }
// }

// console.log(curr_name)
