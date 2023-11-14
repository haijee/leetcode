

var intersect = function(nums1, nums2) {
    const ans = [];
    for(let item of nums1){
        const index = nums2.indexOf(item);
        if(index !== -1){
            nums2[index] = false;
            ans.push(item);
        }
    }
    return ans;
};
