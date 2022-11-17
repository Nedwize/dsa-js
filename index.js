const LinkedList = require('./LinkedList')

const LL = new LinkedList(0)

LL.push(1)
LL.push(2)
LL.push(4)
LL.push(5)
LL.push(6)

console.log(LL.get(0))

LL.printList()
