// 区间反转链表  https://leetcode.cn/problems/reverse-linked-list-ii/



var reverseBetween = function(head, left, right) {
    // 设置 dummyNode 是这一类问题的一般做法
    const dummy_node = null;
    dummy_node.next = head;
    let pre = dummy_node;


    for (let i = 0; i < left - 1; ++i) {
        pre = pre.next;
    }

    // 缓存
    let curr = pre.next;

    for (let i = 0; i < right - left; ++i) {
        const next = curr.next

        // 交换
        curr.next = next.next
        next.next = pre.next

        // 处理下一个
        pre.next = next;
    }
    return dummy_node.next;
};

