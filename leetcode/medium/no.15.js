// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const list = nums.sort((a, b) => a - b);
    const len = list.length;
    const res = [];
    let n = 0;
    while (n < len - 2) {
        // 去重
        if (list[n] === list[n - 1]) {
            n++;
            continue;
        }
        let l = n + 1,
            r = len - 1;

        while (l < r) {
            const sum = list[n] + list[l] + list[r];
            if (sum < 0) {
                l++;
                continue;
            }
            if (sum > 0) {
                r--;
                continue;
            }
            res.push([list[n], list[l], list[r]]);
            l++;
            r--;
            // 去重
            while (list[l] === list[l - 1]) {
                l++;
            }
            while (list[r] === list[r + 1]) {
                r--;
            }
        }
        n++;
    }
    return res;
};

const a = threeSum([0,0,0]);
// const a = threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
console.log(a);
