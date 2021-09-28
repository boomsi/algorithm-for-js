// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] 按 升序 排列
// lists[i].length 的总和不超过 10^

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//     if (!lists.length) return null;
//     if (lists.length === 1) return lists[0];

//     let tmp = [];

//     for (let i = 0; i < lists.length; i++) {
//         let next = lists[i];
//         while (next) {
//             tmp.push(next.val);
//             next = next.next;
//         }
//     }
//     tmp = tmp.sort((a, b) => a - b);

//     let list = new ListNode(tmp[0]);
//     let head = list;
//     tmp.forEach((i) => {
//         head.next = new ListNode(i);
//         head = head.next;
//     });
//     return list.next;
// };

const a = [
    { val: 1, next: { val: 4, next: { val: 5, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } },
    { val: 2, next: { val: 6, next: null } },
];
// const res = mergeKLists(a);
// console.dir(res, { depth: null });

// var mergeKLists = function (lists) {
//     return lists
//         .reduce((p, n) => {
//             while (n) {
//                 p.push(n), (n = n.next);
//             }
//             return p;
//         }, [])
//         .sort((a, b) => a.val - b.val)
//         .reduceRight((p, n) => ((n.next = p), (p = n), p), null);
// };

function mergeKLists(lists) {
    return lists
        .reduce((arr, list) => {
            while (list) {
                arr.push(list);
                list = list.next;
            }
            return arr;
        }, [])
        .sort((a, b) => a.val - b.val)
        .reduceRight((link, n) => ((n.next = link), (link = n), link), null);
}

// 数组转链表
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lists = arr.reduceRight((res, n) => ((n = new ListNode(n)), (n.next = res), (res = n), res), null);
console.dir(lists, { depth: null });

// 链表转数组
const arrs = ((n) => {
    const res = [];
    while (n) {
        res.push(n.val);
        n = n.next;
    }
    return res;
})(lists);
console.log(arrs);
