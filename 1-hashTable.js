class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      // Recorriendo el espacio
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0]) {
          // guardo el espacio para retornarlo luego
          let deletedSpace = currentBucket[i];

          // elimino el espacio
          delete currentBucket[i];

          // elimino el espacio vacio para que los demás espacios recorran
          currentBucket.splice(i, 1);
          return deletedSpace;
        }
      }
    }
  }

  getAllKeys() {
    const array = this.data;
    let key = [];

    array.forEach((ar) => {
      ar.forEach((k) => {
        key.push(k[0]);
      });
    });

    return key;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("color", "blue");
myHashTable.set("currency", "dop");
myHashTable.set("meal", "bread");
console.log(myHashTable.get("color"));
console.log(myHashTable.getAllKeys());
