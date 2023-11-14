// 二分查找 有序数组

// 在有序数组中寻找给定值，最快的方式通常是使用二分查找（Binary Search），也称为折半查找。二分查找是一种高效的搜索算法，它的时间复杂度为 O(log n)，其中 n 是数组的大小。以下是使用二分查找来寻找一个有序数组中给定值的示例 JavaScript 代码：


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
