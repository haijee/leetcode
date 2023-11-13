
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// https://www.jianshu.com/p/3b2fff217bb3


// 解构赋值前面一定要加分号否则会报错

var shuffleArray = function (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // 生成 0 到 i 之间的随机索引
        const j = Math.floor(Math.random() * (i + 1));
        // console.log(i);

        // 交换 array[i] 和 array[j]
        [arr[i], arr[j]] = [arr[j], arr[i]]

    }
    return arr
};


// 使用示例
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);

console.log(shuffledArray);