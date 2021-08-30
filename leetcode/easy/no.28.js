// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (!(new RegExp(needle).test(haystack))) {
        return -1
    }

    const len = needle.length
    let n = -1

    for(let i = 0; i <= haystack.length - len; i ++) {
        const str = haystack.substr(i, len)
        if (str === needle) {
            n = i
            break;
        }
    }

    return n
};


a = strStr('asdfgfhjkl', 'gfh')

console.log(a)