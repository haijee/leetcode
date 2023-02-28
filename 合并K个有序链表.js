var mergeKLists = function(lists) {
    // 上面已经实现
    var mergeTwoLists = function(l1, l2) {/*上面已经实现*/};
    
    const _mergeLists = (lists, start, end) => {
        if(end - start < 0) return null;
        if(end - start == 0)return lists[end];
        let mid = Math.floor(start + (end - start) / 2);
        return mergeTwoList(_mergeLists(lists, start, mid), _mergeLists(lists, mid + 1, end));
    }
    return _mergeLists(lists, 0, lists.length - 1);
};

