// var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
// var testCases = input[0];
// let ind = 1;

// for (let i = 0; i < testCases; i++) {
//   let n = Number(input[ind++]);
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr.push(Number(input[ind++]));
//   }

//   console.log(DeletionSort(n, arr));
// }

// function DeletionSort(n, nums) {
//   // for non-decreasing arrays
//   let numsCopy = [...nums];
//   numsCopy.sort((a, b) => a - b);

//   let i = 0;
//   while (i < nums.length) {
//     if (numsCopy[i] !== nums[i]) {
//       break;
//     }
//     i++;
//   }
//   if (i === numsCopy.length) return numsCopy.length;
  
// }
