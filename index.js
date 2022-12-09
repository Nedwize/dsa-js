const DoublyLinkedList = require('./DoublyLinkedList')
// const LinkedList = require('./LinkedList')

// const LL = new LinkedList(0)

// LL.push(1)
// LL.push(2)
// LL.push(3)
// LL.push(4)
// LL.push(5)

// LL.reverse()

// LL.printList('VALUE')
let myDLL = new DoublyLinkedList(1)
myDLL.push(3)

console.log('DLL before insert():')
myDLL.printList()

myDLL.insert(1, 2)

console.log('\nDLL after insert(2) in middle:')
myDLL.printList()

myDLL.insert(0, 0)

console.log('\nDLL after insert(0) at beginning:')
myDLL.printList()

myDLL.insert(4, 4)

console.log('\nDLL after insert(4) at end:')
myDLL.printList()
