// linked list implementation

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const newNode = new Node(100)

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

   prependNode(data) {
    const n = new Node(data);
    if (this.size === 0) {
      this.head = n;
      this.tail = n
    } else {
      n.next = this.head;
      this.head = n;
    }
    this.size++
  }

  appendNode(data) {
    const n = new Node(data);
    if (this.size === 0) {
      this.head = n;
    } else {
      const temp = this.tail;
      this.tail = n
      temp.next = this.tail
    }
    this.size++
  }
  

  printNode() {
    let data = ""
    let current = this.head
    while (current !== null) {
      data = data + current.data + " ";
      current = current.next;
    }
    return data;
  }

  removefirst() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const previousHead = this.head
    this.head = previousHead.next
    this.size--
    }
    
  }

  removeLast() {
    if (this.size === 0) {
      return null
    }
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentLastnode = this.tail
      let currentNode = this.head;
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.size--
  }

  insertAt(pos, data) {
    if (pos < 0 || pos > this.size) {
      return null;
    }
    if (pos === 0) {
      this.prependNode(data)
    } else if (pos === this.size) {
      this.appendNode(data)
    } else {
      const n = new Node (data)
      let posCount = 0
      let currentNode = this.head;
      let previousNode = null;

      while (currentNode.next !== null && posCount !== pos) {
        previousNode = currentNode
        currentNode = currentNode.next
        posCount++
      }
      
      previousNode.next = n;
      n.next = currentNode
      this.size++
    }
    
  }
}

const linkedListOne = new LinkedList()
linkedListOne.prependNode(100)
linkedListOne.prependNode(50)
linkedListOne.appendNode(150)

linkedListOne.insertAt(2, 700)



console.log(linkedListOne.printNode())