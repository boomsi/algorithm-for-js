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
    return -1;
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
    return -1;
}

// a = findValue([2, 3, 3, 3, 5, 6, 7, 7, 7, 8, 9, 10], 7)
// console.log(a)

// 查找第一个大于等于给定值的元素
function findValue(list, value) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (list[mid] >= value) {
            if (mid === 0 || list[mid - 1] < value) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

// a = findValue([2, 3, 3, 3, 5, 6, 7, 7, 7, 8, 9, 10], 7)
// console.log(a)

// 查找最后一个小于等于给定值的元素
function findValue(list, value) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (list[mid] <= value ) {
            if (mid === list.length - 1 || list[mid + 1] > value) {
                return mid
            }
            low = mid + 1

        } else {
            high = mid - 1;
        }
    }
    return -1
}

// a = findValue([2, 3, 3, 3, 5, 6, 7, 7, 7, 8, 9, 10], 7)
// console.log(a)

// 逆序链表
function reverse(list) {
    let now = list;
    let prev = null;
    while (now.next) {
        const next = now.next;
        now.next = prev;
        prev = now;
        now = next;
    }

    now.next = prev;

    return now;
}

// const a = { value: "x1", next: { value: "x2", next: { value: "x3", next: { value: "x4", next: null } } } };
// b = reverse(a);
// console.dir(b, { depth: null });

// 遍历二叉树
function twoTree(tree) {
    if (!tree) return null

    console.log(tree)
    twoTree(tree.leftChild)
    twoTree(tree.rightTree)
}

// [1, 3, 5, 6, 9, 10]

// function level(tree) {
//     if (!tree) return null

//     console.log(tree)
//     let list = []
//     while(list.length) {
//         let arr = []
//         list.forEach (
//             console.log(item)
//             arr.push(item.leftChild)
//             arr.push(item.rightChild)
//         )
//         list = arr
//     }
// }

// 二叉树查找
function find(tree, target) {
    let node = tree
    while(tree) {
        if (node.value > target) {
            node = node.leftChild
        } else if (node.value < target) {
            node = node.rightChild
        } else {
            return node
        }
    }

    return null
}

// 二叉树插入
function insert(tree, target) {
    let node = tree;
    while (node) {
        if (node.value > target) {
            if (!node.leftChild) {
                node.leftChild = { value: target };
                return;
            }
            node = node.leftChild;
        } else {
            if (!node.rightChild) {
                node.rightChild = { value: target };
                return;
            }
            node = node.rightChild;
        }
    }
}


// 二叉树删除
// function del(tree, target) {
//     let node = tree
//     const origin = find(node, target)
//     ...
// }








































