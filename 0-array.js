class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--;
    return lastItem;
  }

  myDelete(index){
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  // Reacomodar los elementos en el índice que tienen que estar
  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++){
        this.data[i] = this.data[i + 1]; //Eliminación o "reemplazo del item"
    }

    //Eliminación de la longitud y posición
    delete this.data[this.length - 1]; 
    this.length--;
  }

  //Agrega un elemento al inicio del array
  unshift(item){
    for(let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;

    return this.data;
  }

  //Eliminar el primer elemento del array
  shift() {
    const firstItem = this.data[0];
    delete this.data[0];

    for(let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length -1];
    this.length--;
    
    return firstItem;
  }
}

const myArray = new MyArray();
myArray.push("Data structures");
myArray.push("Array");
myArray.push(12345);

console.log(myArray);
console.log(myArray.get(2));
console.log(myArray.pop());
console.log(myArray);

myArray.push(9876);
myArray.myDelete(0);
console.log(myArray);