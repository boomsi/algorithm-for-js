// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 * nums 已按升序排列
 */
var removeDuplicates = function (nums) {
    let n = 1

    while (nums[n] !== undefined) {
        if (nums[n - 1] === nums[n]) {
            nums.splice(n, 1)
        } else {
            n ++
        }
    }
    return nums.length
};

t = [0,0,1,1,1,2,2,3,3,4]
a = removeDuplicates(t)
console.log(a, t)
