/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    max = 0;
  while (left < right) {
    let leftVal = height[left];
    let rightVal = height[right];
    let area = Math.min(leftVal, rightVal) * (right - left);
    max = Math.max(max, area);
    if (leftVal > rightVal) {
      right++;
    } else {
      left++;
    }
  }
  return max;
};
