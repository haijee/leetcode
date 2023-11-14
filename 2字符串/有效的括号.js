/**
 * @param {string} s
 * @return {boolean}
 */

// '('，')'，'{'，'}'，'['，']'
const s = "(){[]{}";

var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  let cache = [];
  for (let idx = 0; idx < n; idx++) {
    const curr = s[idx];
    if (curr === "(" || curr === "{" || curr === "[") {
      cache.push(curr);
    } else {
      if (!cache.length) {
        return false;
      }
      const val = cache.pop();
      if (curr === ")" && val !== "(") {
        return false;
      }
      if (curr === "}" && val !== "{") {
        return false;
      }
      if (curr === "]" && val !== "[") {
        return false;
      }
    }
  }
  return cache.length === 0;
};

console.log(isValid(s));

// 优化版本
function isValid2(s) {
  let stack = [];
  for (let str of s) {
    if (str === "(") {
      stack.push(")");
    } else if (str === "{") {
      stack.push("}");
    } else if (str === "[") {
      stack.push("]");
    } else if (stack.pop() !== str) {
      return false;
    }
  }
  return !stack.length
}
console.log(isValid2(s));
