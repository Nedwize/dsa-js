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

    set(idx, value) {
        const node = this.get(idx)
        if (node) {
            node.value = value
            return true
        }
        return false
    }

    insert(idx, value) {
        if (idx === 0) return this.unshift(value)
        if (idx === this.length) return this.push()
        if (idx < 0 || idx > this.length) return false

        const newNode = new Node(value)

        const before = this.get(idx - 1)
        const after = before.next
        after.prev = newNode
        before.next = newNode

        newNode.next = after
        newNode.prev = before

        this.length++
        return true
    }
}

module.exports = DoublyLinkedList
