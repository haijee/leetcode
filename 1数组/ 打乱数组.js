// 洗牌算法

var Solution = function (nums) {
  this.nums = nums;
  this.original = nums.slice();
};

Solution.prototype.reset = function () {
  this.nums = this.original.slice();
  return this.nums;
};

Solution.prototype.shuffle = function () {
  const shuffled = new Array(this.nums.length).fill(0);
  const list = [];
  this.nums.forEach((num) => list.push(num));

  for (let i = 0; i < this.nums.length; ++i) {
    const j = Math.random() * list.length;
    shuffled[i] = list.splice(j, 1);
  }

  this.nums = shuffled.slice();
  return this.nums;
};

Solution.prototype.shuffle1 = function () {
  for (let i = 0; i < this.nums.length; ++i) {
    const j = Math.floor(Math.random() * (this.nums.length - i)) + i;
    const temp = this.nums[i];
    this.nums[i] = this.nums[j];
    this.nums[j] = temp;
  }
  return this.nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(nums) {
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    let idx = Math.floor(Math.random() * nums.length);
    let val = nums.splice(idx);
    newNums.push(...val);
  }
  return newNums;
}
console.log(shuffle(nums));
