// 参考文档 https://www.runoob.com/w3cnote/ten-sorting-algorithm.html

// 冒泡排序 不停把大的往右边移动
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 左边的都是小的
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[i] < arr[j]) {
      }
    }
  }
  return arr;
}

// 选择排序 标记出最小值，然后移动到左边
function selectionSort(arr) {
  let minIndex;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    maxIndex = i;
    // 对比标记最小值的索引
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 把最小值交换到i的位置，当前值移走
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// 插入排序
function insertionSort(arr) {
  let preIndex, current;
  for (let i = 1; i < arr.length - 1; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}


