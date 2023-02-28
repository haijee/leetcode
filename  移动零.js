var nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (element === 0) {
          nums.splice(i,1)
          console.log('n')
          nums.push(0);
      }
    }
    return nums;
  };

console.log(moveZeroes(nums));
