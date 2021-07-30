// 归并

function sort_combine(list) {
    return loop(list, list.length)
}

function loop(list, len) {
    if (len <= 1) {
        return list
    } 
    const mid = Math.floor(len / 2)
    const a = list.slice(0, mid)
    const b = list.slice(mid)

    return merge(loop(a, a.length), loop(b, b.length))
}

function merge(list1, list2) {
    let i =0, j = 0
    const res = []

    while(i < list1.length && j < list2.length) {
        if (list1[i] >= list2[j]) {
            res.push(list2[j])
            j += 1
        } else {
            res.push(list1[i])
            i += 1
        }
    }

    if (list1.length >= i + 1) {
        res.push(...list1.slice(i))
    }
    if (list2.length >= j + 1) {
        res.push(...list2.slice(j))
    }
    return res
}

a = sort_combine([2, 4, 8, 4, 2, 4, 7,111, 43, 231, 453, 5, 0, 12])
// a = merge([2, 4], [3, 4])
console.log(a)


module.exports = sort_combine

