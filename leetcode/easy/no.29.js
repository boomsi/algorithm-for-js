// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, judge, res) {

    const index = Math.ceil(nums.length - 1 / 2)
    const mid = nums[index]
    res = res !== undefined ? index : index

    if (target === mid) {
        return index
    }

    if (index <= 1) {
        // length <= 3
        // 直接返回结果
    }

    if (target < mid) {
        return searchInsert(nums.splice(0, index), target, false, res)
    }
    if (target > mid) {
        return searchInsert(nums.splice(index + 1), target, true, res)
    }

};

a = searchInsert([2, 3, 5, 7, 8, 9, 10, 31], 5)
console.log(a)


