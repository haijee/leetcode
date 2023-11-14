/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function check(q, p) {
    if (!q && !p) return true;
    if (!q || !p) return false;
    return q.val === p.val && check(q.left, p.right) && check(q.right, p.left);
  }
  return check(root, root);
};
