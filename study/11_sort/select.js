// 选择排序

// function sort(list) {
//   const res = [];
//   const len = list.length;

//   for (let i = 0; i < len - 1; i++) {
//     const min = findMin(list);
//     res.push(min);
//   }

//   return res;
// }

// function findMin(list) {
//   let min = list[0];
//   let index = 0;
//   list.forEach((n, num) => {
//     if (n <= min && (arr.length ? n > arr[arr.length - 1] : true)) {
//       min = n;
//       index = num;
//     }
//   });
//   return min;
// }

function sort(list) {
    const len = list.length;
    let v = 0;

    for (let i = 0; i < len; i++) {
        // 循环找出最小值，插入左侧已排序的最后一位
        let min = v;
        for (let j = v; j < len; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        ;[list[v], list[min]] = [list[min], list[v]];
        v++;
    }

    return list;
}

const res = sort([3, 7, 1, 6, 324, 8, 2, 321, 9, 0]);
console.log(res);
