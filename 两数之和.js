const nums = [2, 7, 11, 15];
const target = 9;
var twoSum = function (nums, target) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const val = target - current;
    if (cache.has(val)) {
      const idx = cache.get(val);
      return [idx, i];
    } else {
      cache.set(current, i);
    }
  }
  return [];
};
console.log(twoSum(nums, target));
