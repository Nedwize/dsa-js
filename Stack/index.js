const Node = require('./Node')

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top.next
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined
        const temp = this.top
        temp.next = null
        this.top = this.top.next
        this.length--
        return temp
    }
}

module.exports = Stack
