const str = "awehskkkknxmalxljaudh";

function findCountMax(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  let result = { count: 0, str: "" };
  for (let key in obj) {
    if (obj[key] > result.count) {
      result.count = obj[key];
      result.str = key;
    }
  }
  return result;
}

console.log(findCountMax(str))