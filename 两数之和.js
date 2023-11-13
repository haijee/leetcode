const nums = [111, 2, 7, 11, 15];
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

function twoSum2(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right && nums[left] + nums[right] != target) {
    const sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [left, right];
}
console.log(twoSum2(nums, target));

// 乱序
function twoSum3(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (map.has(val)) {
      return [map.get(val), i];
    }
    map.set(nums[i], i);
  }
  return null;
}

console.log(twoSum3(nums, target));
