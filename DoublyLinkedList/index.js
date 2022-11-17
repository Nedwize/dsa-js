const Node = require('./Node')

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.length) {
            console.log('Doubly Linked List is empty, nothing to pop')
            return undefined
        }
        const temp = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        this.tail = prev
        temp.prev = null
        this.length--
        // Edgecase: If the last element gets popped from the linked list
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
}

module.exports = DoublyLinkedList
