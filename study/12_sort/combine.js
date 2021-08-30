// 归并

// function sort_combine(list) {
//     return loop(list, list.length)
// }

// function loop(list, len) {
//     if (len <= 1) {
//         return list
//     }
//     const mid = Math.floor(len / 2)
//     const a = list.slice(0, mid)
//     const b = list.slice(mid)

//     return merge(loop(a, a.length), loop(b, b.length))
// }

// function merge(list1, list2) {
//     let i =0, j = 0
//     const res = []

//     while(i < list1.length && j < list2.length) {
//         if (list1[i] >= list2[j]) {
//             res.push(list2[j])
//             j += 1
//         } else {
//             res.push(list1[i])
//             i += 1
//         }
//     }

//     if (list1.length >= i + 1) {
//         res.push(...list1.slice(i))
//     }
//     if (list2.length >= j + 1) {
//         res.push(...list2.slice(j))
//     }
//     return res
// }

a = sort_combine([2, 4, 8, 1]);
// a = sort_combine([2, 4, 8, 4, 2, 4, 7,111, 43, 231, 453, 5, 0, 12])
console.log(a);



function sort_combine(arr) {
    return loop(arr);
}

function loop(arr) {
    if (arr.length <= 1) return arr;

    const midIndex = Math.ceil(arr.length / 2);
    child1 = loop(arr.slice(0, midIndex));
    child2 = loop(arr.slice(midIndex));
    console.log(child1, child2, '?')
    return combine(child1, child2);
}

function combine(arr1, arr2) {
    const res = [];
    console.log(arr1, arr2)
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    // console.log(res, i, j)
    if (i < arr1.length) {
        res.push(...arr1.slice(j));
    }
    if (j < arr2.length) {
        res.push(...arr2.slice(i));
    }

    return res;
}

module.exports = sort_combine;

// 拆分
// 排序
// 合并
