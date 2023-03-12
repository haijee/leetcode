// 二分查找 有序数组

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid - 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};


// 双指针
const doubleSearch = (arr, target) => {
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] === target) {
      return i;
    } else if (arr[j] === target) {
      return j;
    }
  }
  return -1;
};
