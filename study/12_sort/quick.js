// 快排(递归)
// function sort_quick(list = [], start = 0, end = list.length - 1) {
//   if (start >= end) {
//     return;
//   }

//   const pivoteIndex = loop(list, start, end);

//   sort_quick(list, start, pivoteIndex - 1);
//   sort_quick(list, pivoteIndex + 1, end);
// }

// function loop(list, start, end) {
//   const pivotValue = list[end];
//   let pivotIndex = start;

//   for (let i = start; i < end; i++) {
//     if (list[i] < pivotValue) {
//       [list[pivotIndex], list[i]] = [list[i], list[pivotIndex]];
//       pivotIndex++;
//     }
//   }
//   [list[pivotIndex], list[end]] = [list[end], list[pivotIndex]];
//   return pivotIndex;
// }

// a = [7, -2, 4, 1, 6, 5, 0, -4, 0, 2];
// sort_quick(a);
// console.log(a);

// module.exports = sort_quick;

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

a = [7, -2, 4, 1, 6, 5, 0, -4, 0, 2];
sort_quick(a);
console.log(a);

// function sort_quick(arr = [], start = 0, end = arr.length - 1) {
//     if (start >= end) {
//         return;
//     }

//     const pivot = getPivot(arr, start, end);

//     sort_quick(arr, start, pivot - 1);
//     sort_quick(arr, pivot + 1, end);

// }

// function getPivot(arr, start, end) {
//     let pivotIndex = start;
//     let val = arr[end];
//     for (let i = start; i < end; i++) {
//         if (arr[i] < val) {
//             [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
//             pivotIndex++;
//         }
//     }

//     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

//     return pivotIndex;
// }

// function sort_quick(arr, start = 0, end = arr.length - 1) {
//     if (start >= end) return;

//     const pivot = getPivot(arr, start, end)

//     sort_quick(arr, start, pivot - 1)
//     sort_quick(arr, pivot + 1, end)
// }

// function getPivot(arr, start, end) {
//     const pivotValue = arr[end]
//     let index = start

//     for(let i = start; i < end; i ++) {
//         if (arr[i] < pivotValue) {
//             [arr[i], arr[index]] = [arr[index], arr[i]]
//             index ++
//         }
//     }

//     [arr[end], arr[index]] = [arr[index], arr[end]]

//     return index
// }

function sort_quick(list, start = 0, end = list.length - 1) {
    if (start >= end) return list;
    const pivot = getPivot(list, start, end);

    sort_quick(list, start, pivot - 1);
    sort_quick(list, pivot + 1, end);
}

function getPivot(list, start, end) {
    let pivotIndex = start;
    const pivotValue = list[end];

    for (let i = start; i < end; i++) {
        if (list[i] < pivotValue) {
            [list[pivotIndex], list[i]] = [list[i], list[pivotIndex]];
            pivotIndex++;
        }
    }

    [list[end], list[pivotIndex]] = [list[pivotIndex], list[end]];

    return pivotIndex;
}

