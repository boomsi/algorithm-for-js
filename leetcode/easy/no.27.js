// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。


// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。



/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let n = 0
    let k = 0
    let len = nums.length

    while(nums[k] !== undefined) {
        if (nums[k] === val) {
            [nums[k], nums[len - 1 - n]] = [nums[len - 1 - n], nums[k]]
            nums.pop()
            n ++
        } else {
            k ++
        }
    }
    return nums.length
};

a = [1, 3, 4, 4, 4, 6,0,0, 7, 8, 8, 9]

l = removeElement(a, 0)
console.log(l, a)