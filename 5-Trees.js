//       10
//   4        20
// 2   8   17   170

class Node {
  constructor(value) {
    this.left = null;
    this.rigth = null;
    this.value = value;
  }
}

class TreeBinarySearch {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    // Validaciones
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      // Bucle
      while (true) {
        //Validación si valor es menor y no existe
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        }

        //Validación si valor es mayor y no existe
        else {
          if (!currentNode.rigth) {
            currentNode.rigth = newNode;
            return this;
          }

          currentNode = currentNode.rigth;
        }
      }
    }
  }
}

const tree = new TreeBinarySearch();
tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);
console.log(tree);
