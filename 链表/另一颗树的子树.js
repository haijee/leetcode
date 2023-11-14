var isSubtree = function(s, t) {
    if(!s){
      return false;
    }
    let result = compare(s,t);
    
    if(result){
      return true;
    }
    return isSubtree(s.left,t) || isSubtree(s.right,t);
  };


  function compare(s,t){
      if(s &&!t){
        return false;
      }
      //两边都没有
      if(!s&&!t){
        return true;
      }
      //只有一个
      if(!s||!t){
        return false;
      }
      if(s.val !== t.val){
        return false;
      }
      return compare(s.left,t.left) && compare(s.right,t.right)
  }
  