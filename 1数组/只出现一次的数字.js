/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [2, 2,2, 1];
var singleNumber1 = function (nums) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (cache.has(curr)) {
      const val = cache.get(curr);
      cache.set(curr, val + 1);
    } else {
      cache.set(curr, 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (cache.has(curr)) {
      if (cache.get(curr) === 1) {
        return curr;
      }
    }
  }

};

var singleNumber = function(nums) {
    let ans = 0;
    for(let i = 0; i < nums.length; i++){
        console.log(ans)
        ans ^= nums[i];
    }
    return ans;
};

console.log(singleNumber(nums));
