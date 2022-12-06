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
myDLL.push(2)
myDLL.push(3)
myDLL.push(4)
myDLL.push(5)

console.log('DLL before remove():')
myDLL.printList('VALUE')

console.log('\nRemoved node:')
console.log(myDLL.remove(2).value)
console.log('DLL after remove() in middle:')
myDLL.printList('VALUE')

console.log('\nRemoved node:')
console.log(myDLL.remove(0).value)
console.log('DLL after remove() of first node:')
myDLL.printList('VALUE')

console.log('\nRemoved node:')
console.log(myDLL.remove(2).value)
console.log('DLL after remove() of last node:')
myDLL.printList('VALUE')
