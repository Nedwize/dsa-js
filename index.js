const LinkedList = require('./LinkedList')

const LL = new LinkedList(1)

LL.push(2)
LL.push(3)
LL.push(4)
LL.push(5)

LL.printList('NODE_VIEW')

console.log('Popping')

const popped = LL.pop()
console.log('Popped', popped)

LL.printList('NODE_VIEW')
