const sort_buble = require('./bubble')
const sort_insert = require('./insert')
const sort_combine = require('../11_sort/combine')
const sort_quick = require('../11_sort/quick')


let list = [];
for(let i = 0; i < 2000; i ++) {
    list.push(Math.random(100).toFixed(2))
}

// 冒泡
console.time()
sort_buble(list)
console.timeEnd()

// 插入
console.time()
sort_insert(list)
console.timeEnd()

// 归并
console.time()
sort_combine(list)
console.timeEnd()

// 快排
console.time()
sort_quick(list)
console.timeEnd()
