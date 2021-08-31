// 选择排序

function sort(list) {
  const res = [];
  const len = list.length;

  for (let i = 0; i < len - 1; i++) {
    const min = findMin(list);
    res.push(min);
  }

  return res;
}

// ？循环找出最小值？
function findMin(list) {
  let min = list[0];
  let index = 0;
  list.forEach((n, num) => {
    if (n <= min && (arr.length ? n > arr[arr.length - 1] : true)) {
      min = n;
      index = num;
    }
  });
  return min;
}

const res = sort([3, 7, 1, 6, 324, 8, 2, 321]);
console.log(res);
