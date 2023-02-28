
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    const result = []
    function inorder(node){
        if(!node){
            return
        }
        inorder(node.left)
        result.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    return result
};