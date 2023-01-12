class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stacks {
  constructor() {
    this.top = null;
    this.buttom = null;
    this.length = 0;
  }

  //retornar el ultimo ingresado
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.buttom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }
}

let stack = new Stacks();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
