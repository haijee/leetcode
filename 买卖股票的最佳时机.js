const prices = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let minPrice = prices[0];
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i];
    minPrice = Math.min(currPrice, minPrice);
    result = Math.max(result, currPrice - minPrice);
  }
  return result
};

console.log(maxProfit(prices));
