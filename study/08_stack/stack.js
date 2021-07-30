/**
 * 栈 基于链表
 */

class Node {
    constructor(ele) {
        this.ele = ele
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(item) {
        // 进栈
        const node = new Node(item)
        if (this.top === null) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
    }

    pop() {
        // 出栈
        if (this.top === null) {
            return -1
        }
        const val = this.top.ele
        this.top = this.top.next
        return val
    }
    
}

// Test

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.dir(stack, {depth: null})
// let res = 3
// while(res > 0) {
//     let val = stack.pop()
//     console.log(val)
//     res -= 1
// }

exports.CreateStack = Stack
