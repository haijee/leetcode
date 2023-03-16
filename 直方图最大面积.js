

function largestRectangleArea(heights) {
  let len = heights.length;
  let maxArea = 0;
  for (let i = 0; i < len; i++) {
    let min = heights[i];
    for (let j = i; j < len; j++) {
      min = Math.min(heights[j], min);
      const area = min * (j - i + 1);
      maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
}
