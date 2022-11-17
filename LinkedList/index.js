const Node = require('./Node')

// Three Members
// 1. Head
// 2. Tail
// 3. Length
class LinkedList {
    constructor(value) {
        // Create a new LL Node
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // Push a node into the LL
    push(value) {
        // Create a new LL Node
        const newNode = new Node(value)
        // If head and tail are pointing to null
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            // Point the last node to newNode
            this.tail.next = newNode
            // Point tail to newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        // Remove last node from LL

        // If head and tail are null
        if (!this.head) {
            console.log('LinkedList is empty, nothing to pop')
            return undefined
        }

        // If LL has only 1 Node
        if (this.length === 1) {
            const lastNode = this.head
            this.head = null
            this.tail = null
            this.length--
            return lastNode
        }

        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        // Detach last node from second last node
        // Second last node is this.tail right now
        this.tail.next = null
        this.length--
        // Return last node
        return lastNode
    }

    getTail() {
        console.log('Tail: ', this.tail)
        return
    }

    getHead() {
        console.log('Head: ', this.head)
        return
    }

    // Print the LL
    printList(type = 'NODE_VIEW') {
        let temp = this.head
        if (type === 'NODE_VIEW') {
            console.log(JSON.stringify(temp, null, 2))
            return
        }
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }
}

module.exports = LinkedList
