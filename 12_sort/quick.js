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


// 再来亿遍
// function sort_quick (list = [], start = 0, end = list.length - 1) {
//     if (start >= end) {
//         return;
//     }

//     const pivot = generatePivot(list, start, end)

//     sort_quick(list, start, pivot - 1)
//     sort_quick(list, pivot + 1, end)
    
// }

// function generatePivot(list, start, end) {
//     const pivotValue = list[end]
//     let pivotIndex = start

//     for(let i = start; i < end; i ++) {
//         if (list[i] < pivotValue) {
//             [list[i], list[pivotIndex]] = [list[pivotIndex], list[i]]
//             pivotIndex ++
//         }
//     }

//     [list[pivotIndex], list[end]] = [list[end], list[pivotIndex]]

//     return pivotIndex
// }


// a = [7, -2, 4, 1, 6, 5, 0, -4, 0, 2];
// sort_quick(a);
// console.log(a);


