/**
 * @param {number} n
 * @return {number}
 */

var fib1 = function (n) {
  if (n < 2) {
    return n;
  }
  return fib1(n - 1) + fib1(n - 2);
};

var fib2 = function (n, start = 1, total = 1) {
  if (n < 2) {
    return total;
  }

  return fib2(n - 1, total, total + start);
};

console.log(fib2(4))

var fib2 = function (n) {
  if (n < 2) {
    return n;
  }
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 2; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
console.log(fib(10));
