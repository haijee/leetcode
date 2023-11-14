

// 深度优先搜索
function dfs(node) {
  if (!node) {
    return;
  }
  console.log(node.val);
  dfs(node.left);
  dfs(node.right);
}



// 广度优先搜索
function bfs(root) {
  let quene = [root];
  let result = [];
  while (quene.length > 0) {
    let len = quene.length;
    let curr = [];
    for (let i = 0; i < len; i++) {
      let node = quene.shift();
      console.log(node.val);
      curr.push(node.val);
      if (node.left) {
        quene.push(node.left);
      }
      if (node.right) {
        quene.push(node.right);
      }
    }
    result.push(curr);
  }
  return result;
