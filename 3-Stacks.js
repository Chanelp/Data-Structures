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

  pop() {
    if (!this.length) {
      console.error("There is no nodes in the stack.");
      return;
    }
    const topNode = this.top;

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return topNode;
  }
}

let stack = new Stacks();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
