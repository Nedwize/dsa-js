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
        if (this.length === 0) {
            console.log('Doubly Linked List is empty, nothing to pop')
            return undefined
        }
        const temp = this.tail
        // Edgecase: If the last element gets popped from the linked list
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (this.length === 0) return undefined
        const temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            console.log('DoublyLinkedList index out of bounds')
            return undefined
        }
        let temp = this.head
        if (idx > this.length / 2) {
            for (let i = 0; i < idx; i++) {
                temp = temp.next
            }
        } else {
            for (let i = this.length - 1; i > idx; i--) {
                temp = temp.prev
            }
        }
        return temp
    }
}

module.exports = DoublyLinkedList
