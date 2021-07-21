// 冒泡
function sort_buble(list) {
  const res = [...list];
  const len = list.length;
  let num = 0;
  
  while (num < len) {
    let flag = false;
    for (let i = 0; i < len - 1; i++) {
      if (res[i] > res[i + 1]) {
        [res[i], res[i + 1]] = [res[i + 1], res[i]];
        flag = true
      }
    }
    if (!flag) {
        break;
    }
    num += 1;
  }
  return res;
}

// const result = sort([1, 2, 3, 4, 5]);
const result = sort_buble([4, 2, 8, 2, 7, 4, 1, 210, 324, 128]);
console.log(result);

module.exports = sort_buble
