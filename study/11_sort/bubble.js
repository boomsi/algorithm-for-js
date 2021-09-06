// 冒泡排序
// 原地排序算法 | 稳定排序算法 | 负责度O(n) - O(n^2)

// function sort_buble(list) {
//   const res = [...list];
//   const len = list.length;
//   let num = 0;

//   while (num < len) {
//     let flag = false;
//     for (let i = 0; i < len - 1; i++) {
//       if (res[i] > res[i + 1]) {
//         [res[i], res[i + 1]] = [res[i + 1], res[i]];
//         flag = true
//       }
//     }
//     if (!flag) {
//         break;
//     }
//     num += 1;
//   }
//   return res;
// }

// const result = sort([1, 2, 3, 4, 5]);
// const result = sort_buble([1, 2, 3, 4, 5, 6]);
const result = sort_buble([4, 2, 8, 2, 7, 4, 1, 210, 324, 128]);
console.log(result);

// function sort_buble(arr) {
//     const res = [...arr];
//     const len = res.length;
//     let num = 0;
//     let frag = true;

//     while (num < res.length) {
//         for (let i = 0; i < len; i++) {
//             if (res[i] > res[i + 1]) {
//                 [res[i], res[i + 1]] = [res[i + 1], res[i]];
//                 frag = false;
//             }
//         }
//         if (frag) {
//             break;
//         }
//         num++;
//     }
//     return res;
// }

function sort_buble(list) {
    const len = list.length;
    let i = 0;
    let n = len;
    let flag = true;

    while (i < len) {
        for (let j = 0; j < n; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]];
                flag = false;
            }
        }
        n--;
        i++;
        if (flag) break;
    }
    return list;
}

module.exports = sort_buble;
