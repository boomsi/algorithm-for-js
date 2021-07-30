/**
 * 队列 基于链表
 */

class Node {
    constructor(ele) {
        this.ele = ele
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enQueue(item) {
        // 进队
        const val = new Node(item)
        if (this.head === null) {
            this.head = val
            this.tail = val
        } else {
            this.tail.next = val
            this.tail = this.tail.next
        }
    }

    deQueue() {
        // 出队

        if (this.head === null) {
            return -1
        }
        const val = this.head.ele
        this.head = this.head.next
        this.tail.next = this.head
        return val
    }
}

const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)

let n = 0

while(n < 3) {
    const val = queue.deQueue()
    console.log(val)
    n += 1
}
