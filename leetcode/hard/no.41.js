// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const list = nums.filter((n) => n > 0);
    const len = list.length;
    const res = new Array(len);

    list.forEach((n) => {
        if (n < len + 1) {
            res[n] = n;
        }
    });

    res[0] = true;

    const val = res.findIndex((i) => !i);
    return val > 0 ? val : res.length;
};

nums = [1, 2, 4, 0, 3];
console.time();
a = firstMissingPositive(nums);
console.timeEnd();
console.log(a);
