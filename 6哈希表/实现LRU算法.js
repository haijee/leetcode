const data = new Map();
data.set("a", "1");
data.set("b", "2");
data.set("c", "3");
data.data.set("d", "4");
console.log(data.keys());
// 时间复杂度 O(1)
// LRU 是 Least Recently Used 的缩写，即最近最少使用，
// 是一种常用的页面置换算法，选择内存中最近最久未使用的页面予以淘汰。
class LRU {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (this.cache.has(key)) {
      // 存在即更新
      let temp = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, temp);
      return temp;
    }
    return -1;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      // 存在即更新（删除后加入）
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // 不存在即加入
      // 缓存超过最大值，则移除最近没有使用的
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}


const lru = new LRU(3)

lru.put('a',1)
lru.put('b',2)
lru.put('c',3)
lru.put('d',4)
console.log(lru.get('b'),lru.get('a'))






