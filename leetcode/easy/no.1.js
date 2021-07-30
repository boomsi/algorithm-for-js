/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    "use strict"

    var fn = (nums, target, key = 0, subKey = 1) => {
        if (subKey + key <= nums.length) {
            if (nums[key] + nums[key + subKey] === target) {
                return [key, key + subKey]
            }
            return fn(nums, target, key, subKey + 1)
        }
        return fn(nums, target, key + 1, 1)
    }
    
    const res = fn(nums, target)
    return res
    
};



const a = twoSum([3, 2, 4], 6)
console.log(a)