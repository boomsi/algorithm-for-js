// 快排(递归)
function sort_quick(list = [], start = 0, end = list.length - 1) {
  if (start >= end) {
    return;
  }

  const pivoteIndex = loop(list, start, end);

  sort_quick(list, start, pivoteIndex - 1);
  sort_quick(list, pivoteIndex + 1, end);
}

function loop(list, start, end) {
  const pivotValue = list[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (list[i] < pivotValue) {
      [list[pivotIndex], list[i]] = [list[i], list[pivotIndex]];
      pivotIndex++;
    }
  }
  [list[pivotIndex], list[end]] = [list[end], list[pivotIndex]];
  return pivotIndex;
}

a = [7, -2, 4, 1, 6, 5, 0, -4, 0, 2];
sort_quick(a);
console.log(a);

module.exports = sort_quick;



// 快排(循环)
function quickSortIterative(arr) {
  // 用push()和pop()函数创建一个将作为栈使用的数组
  stack = [];

  // 将整个初始数组做为“未排序的子数组”
  stack.push(0);
  stack.push(arr.length - 1);

  // 没有显式的peek()函数
  // 只要存在未排序的子数组，就重复循环
  while (stack[stack.length - 1] >= 0) {
    // 提取顶部未排序的子数组
    end = stack.pop();
    start = stack.pop();

    pivotIndex = partition(arr, start, end);

    // 如果基准的左侧有未排序的元素，
    // 则将该子数组添加到栈中，以便稍后对其进行排序
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // 如果基准的右侧有未排序的元素，
    // 则将该子数组添加到栈中，以便稍后对其进行排序
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}
