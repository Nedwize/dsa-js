const LinkedList = require('./LinkedList')

const LL = new LinkedList(0)

LL.push(1)
LL.push(2)
LL.push(3)
LL.push(4)
LL.push(5)

LL.reverse()

LL.printList('VALUE')
