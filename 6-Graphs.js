class GraphsDS {
  constructor() {
    this.nodes = 0;
    this.adjentsList = {};
  }

  addVertice(node) {
    this.adjentsList[node] = [];
    this.nodes++;
  }

  addConex(from, to) {
    this.adjentsList[from].push(to);
    this.adjentsList[to].push(from);
  }
}

const myGraph = new GraphsDS();

// Vértices
myGraph.addVertice(1);
myGraph.addVertice(3);
myGraph.addVertice(4);
myGraph.addVertice(5);
myGraph.addVertice(6);
myGraph.addVertice(8);

// Conexiones
myGraph.addConex(8, 4);
myGraph.addConex(4, 1);
myGraph.addConex(1, 3);
myGraph.addConex(1, 6);
myGraph.addConex(3, 6);
myGraph.addConex(3, 5);
myGraph.addConex(5, 4);

console.log(myGraph);
