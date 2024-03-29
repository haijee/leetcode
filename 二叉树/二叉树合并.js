/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

var mergeTrees = function (root1, root2) {
  function merge(root1, root2) {
    if (root1 === null) {
      return root2;
    }
    if (root2 === null) {
      return root1;
    }

    root1.val = root1.val + root2.val;
    root1.left = merge(root1.left, root2.left);
    root1.right = merge(root1.right, root2.right);
    return root1
  }
  return merge(root1, root2);
};
