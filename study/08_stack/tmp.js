'{{)(}][)'

const {CreateStack} = require('./stack')

function judge(str) {
    const stack = new CreateStack()
    const DICT = {'(': ')', '[': ']', '{': '}'}
    const LEFT_DICT = Object.keys(DICT)
    const list = str.split('')
    let num = 0, len = list.length;
    let val = true
    
    while(num < len) {
        const item = list[num]
        if (LEFT_DICT.includes(item)) {
            stack.push(item)
        } else {
            const res = stack.pop()
            if (DICT[res] !== item) {
                val = false
                break;
            }
        }
        num += 1
    }

    return val
}



let target = '{[[]()]}'
let res = judge(target)
console.log(res)

