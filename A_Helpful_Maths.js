var input = require("fs").readFileSync(0, "utf8").trim();

function rearrange(str) {
  let nums = str.split("+").map(Number);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; 
      }
    }
  }

  return nums.join("+");
}

console.log(rearrange(input));
