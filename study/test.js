// 二分法求平方根

function squareRoot(num, start = 0, end = num / 2) {
    if (num === 1 || num === 0) return num;

    if (((start + end) / 2) ** 2 > num) {
        return result(num, start, (start + end) / 2);
    }
    if (((start + end) / 2) ** 2 < num) {
        return result(num, (start + end) / 2, end);
    }

    return (start + end) / 2;
}

// 第一个值等于给定值的元素
function findValue(list, value) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (list[mid] > value) {
            high = mid - 1;
        } else if (list[mid] < value) {
            low = mid + 1;
        } else {
            if (mid === 0 || list[mid - 1] !== value) {
                return mid;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1
}

// a = findValue([2, 3, 3, 3, 5, 6, 7, 7, 7, 8, 9, 10], 7)
// console.log(a)


// 查找最后一个值等于给定值的元素
function findValue(list, value) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (list[mid] > value) {
            high = mid - 1;
        } else if (list[mid] < value) {
            low = mid + 1;
        } else {
            if (mid === list.length - 1 || list[mid + 1] !== value) {
                return mid;
            } else {
                low = mid + 1;
            }
        }
    }
    return -1
}

// a = findValue([2, 3, 3, 3, 5, 6, 7, 7, 7, 8, 9, 10], 7)
// console.log(a)

// 查找第一个大于等于给定值的元素
function findValue(list, value) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (list[mid] >= value ) {
            if (mid === 0 || list[mid - 1] < value) {
                return mid
            } else {
                high = mid - 1
            }
        } else {
            low = mid + 1;
        }
    }
    return -1
}

// a = findValue([2, 3, 3, 3, 5, 6, 7, 7, 7, 8, 9, 10], 7)
// console.log(a)


// 查找最后一个小于等于给定值的元素
// function findValue(list, value) {
//     let low = 0;
//     let high = list.length - 1;

//     while (low <= high) {
//         const mid = low + ((high - low) >> 1);
//         if (list[mid] <= value ) {
//             if (mid === list.length - 1 || list[mid + 1] > value) {
//                 return mid
//             }
//             low = mid + 1
            
//         } else {
//             high = mid - 1;
//         }
//     }
//     return -1
// }

// a = findValue([2, 3, 3, 3, 5, 6, 7, 7, 7, 8, 9, 10], 7)
// console.log(a)

// const a = {value: 'x', next: {value: 'x', next: {value: 'x', next: null}}}


// 逆序链表
function linkReverse(list) {
    
}






