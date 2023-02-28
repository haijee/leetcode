// 206. 反转链表  https://leetcode.cn/problems/reverse-linked-list/

// 循环
var reverseList = function(head) {
    let prev = null
    let current = head

    while(current){
        // 缓存
        const next = current.next
        // 交换
        current.next = prev
        prev = current
        // 处理下一个
        current = next
    }
    return prev
};

//  递归

var reverseList = function(head) {
    let reverse = function (prev,curr){ 
            if(!curr) return prev
            const next = curr.next
            curr.next = prev
            
            return reverse(curr,next)
        }
    return reverse(null,head)
};