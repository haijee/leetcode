/**
 * @param {string} s
 * @return {string}
 */
const s = "babad";
var longestPalindrome = function (s) {
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    // 每个位置都可能出现两种可能性的回文
    helper(i, i); // 奇数
    helper(i, i + 1); //偶数
  }

  function helper(l, r) {
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    const str = s.slice(l + 1, r + 1 - 1);
    if (str.length > maxStr.length) maxStr = str;
  }
  return maxStr;
};

console.log(longestPalindrome(s));
