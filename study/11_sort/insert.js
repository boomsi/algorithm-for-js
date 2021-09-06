// 插入排序

// function sort_insert(list) {
//   const len = list.length;
//   const res = [...list];

//   for (let i = 1; i < len; i++) {
//     let j = i - 1;
//     const val = res[i];
//     while (j >= 0) {
//       // 移动
//       if (res[j] > val) {
//         res[j + 1] = res[j];
//         j -= 1;
//       } else {
//         // 只要存在比val小的就结束循环
//         break;
//       }
//     }
//     // 交换
//     res[j + 1] = val;
//   }

//   return res;
// }

const res = sort_insert([2, 32, 6, 54, 86, 9, 2, 4, 1, 0]);
console.log(res);

function sort_insert(list) {
    const len = list.length;
    let i = 1;

    while (i < len) {
        let v = i
        for (let j = v - 1; j >= 0; j--) {
            if (list[v] < list[j]) {
                [list[v], list[j]] = [list[j], list[v]];
                v = j
            } else {
                break;
            }
        }
        i++;
    }
    return list
}

module.exports = sort_insert;
