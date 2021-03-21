class Node {
  constructor(data) {
    this.val = data;
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue (value) {
    const node = new Node(value)
    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node
      this.back = node
    }

  }
  isEmpty() {
    return this.front === null
  }

  print () {
    let data = "";
    let currentNode = this.front
    while (currentNode) {
      data = data + currentNode.val + " "
      currentNode = currentNode.next
    }
    return data;
  }

  dequeue () {
    if (this.isEmpty()) {
      return "Empty Quees"
    } else {
      let currentNode = this.front;
    this.front = currentNode.next
  }
  }
}

const queue = new Queue()
queue.enqueue(100)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.dequeue()
queue.dequeue()


//queue.enqueue(20)
console.log(queue.print())