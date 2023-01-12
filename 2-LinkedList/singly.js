// let sinlgyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class MySinglyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
  
      this.tail = this.head;
      this.length = 1;
    }
  
    //METHODS
    checkNode(node) {
      if (!node.next) {
        return node;
      }
      return this.checkNode(node.next);
    }
  
    // Agregar nodo a la cola
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    // Agregar nodo a la cabeza
    prepend(value) {
      const newNode = new Node(value);
  
      newNode.next = this.head;
      this.head = newNode;
  
      this.length++;
      return this;
    }
  
    insert(index, value) {
      // Validación
      if (index >= this.length) {
        this.append(value);
      }
  
      const newNode = new Node(value);
      let firstPointer = this.head;
      let holdingPointer = firstPointer.next;
  
      firstPointer.next = newNode;
      newNode.next = holdingPointer;
  
      this.length++;
  
      return this;
    }
  
    getTheIndex(index) {
      let counter = 0;
      let currentNode = this.head;
  
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
  
      return this;
    }
  }
  
  let myLinkedList = new MySinglyLinkedList(1);
  myLinkedList.append(2);
  myLinkedList.append(3);
  console.log(myLinkedList);
  myLinkedList.prepend(29);
  console.log(myLinkedList);