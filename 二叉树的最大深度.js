/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDepth = 0;
  function traverse(node) {
    if (node === null) return 0;
    const leftRes = traverse(node.left);
    const rightRes = traverse(node.right);
    maxDepth = Math.max(leftRes + rightRes, maxDepth);
    return Math.max(leftRes, rightRes) + 1;
  }
  traverse(root);
  return maxDepth;
};
