/**
 * @param {number} n
 * @return {number}
 */
// 递归
var climbStairs = function (n) {
  if (n === 1) return 1;
  let db = [];
  db[0] = 1;
  db[1] = 2;
  for (let i = 2; i < n; i++) {
    db[i] = db[i - 1] + db[i - 2];
  }
  return db[n-1];
};
console.log(climbStairs(2))

// 2阶 2种
// 3阶 3种
// 4阶 5种

var climbStairs = function (n) {
  let q = 0;
  let p = 0;
  let r = 1;
  for (let i = 0; i <= n; i++) {
    q = p;
    p = r;
    r = q + p;
  }
  return r;
};
console.log(climbStairs(1));
