// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const list = nums.sort((a, b) => a - b);
    const len = list.length;
    const href = Math.ceil(len / 2)
    let n = 0;
    let num;

    while(n < len) {
        if (list[n + href - 1] === list[n]) {
            num = list[n]
            break;
        }
        n ++
    }
    return num
};

a = [2,2,1,1,1,2,2]

b = majorityElement(a);
console.log(b);
