const prices = [7, 1, 5, 3, 6, 4];
var maxProfit1 = function (prices) {
  if (prices.length === 0) return 0;
  let minPrice = prices[0];
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i];
    minPrice = Math.min(currPrice, minPrice);
    result = Math.max(result, currPrice - minPrice);
  }
  return result;
};

console.log(maxProfit1(prices));

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];
    prev = prices[i - 1];
    if (curr > prev) {
      profit += curr - prev;
    }
  }
  return profit
};

console.log(maxProfit2(prices));
