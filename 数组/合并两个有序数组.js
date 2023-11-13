// 合并两个有序数组

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let curr;
  let sorted = new Array(m + n).fill();

  while (p1 < m || p2 < n) {
    if (p1 === m) {
      // 最后一个
      curr = nums2[p2++];
    } else if (p2 === n) {
      // 最后一个
      curr = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      // 取当前小的数
      curr = nums1[p1++];
    } else {
      curr = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = curr;
  }
  for (let i = 0; i !== m + n; i++) {
    nums1[i] = sorted[i];
  }
};
