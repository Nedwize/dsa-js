const LinkedList = require('./LinkedList')

const LL = new LinkedList(1)

LL.push(2)
LL.push(3)
LL.push(4)
LL.push(5)
LL.push(6)

console.log(LL.set(1, 100))
console.log(LL.get(1))
