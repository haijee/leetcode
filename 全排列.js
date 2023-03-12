/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const length = nums.length
    const path = []  // 记录路径
    const result = []  // 结果
    const search = (nodes, path) => {
        if(path.length === length){ // 当路径长度等于 nums 数组长度说明这是一个排列
            result.push([...path]) // 这时候将路径储存
            return // 推出递归
        }

        for(let i = 0; i < nodes.length; i++){  // 每次将数组的节点全部遍历一边
            path.push(nodes[i])   // 这一次遍历需要处理这个节点 首先把值存入路径数组
            const temp = [...nodes]  
            temp.splice(i,1) // 这一步和上一步意思是这个节点处理完了 不能用了 把剩下的节点继续递归处理
            search(temp, path)  // 继续递归
            path.pop()  // 这个节点递归处理完了之后把它从路径中删除  这里要好好想想
        }
    }
    search(nums, path) // 开始递归处理
    return result
};
