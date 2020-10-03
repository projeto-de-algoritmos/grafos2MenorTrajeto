class Kruskal {

  constructor(gNodes, gEdges, gFrom, gTo, gWeight) {
    this.gNodes = gNodes;
    this.gEdges = gEdges;
    this.gFrom = gFrom;
    this.gTo = gTo;
    this.gWeight = gWeight;
  }

  krk(gNodes, gEdges, gFrom, gTo, gWeight) {
    let i = 0, j = 0, cost = 0;
    let subsets = new Map(),
      result = [];

    let graph = new Graph(gNodes, gEdges);

    while (i < gEdges) {
      graph.addEdge(new Edge(gFrom[i], gTo[i], gWeight[i]));
      i++;
    }

    graph.getEdges().sort((edge1, edge2) => {
      if (edge1.w === edge2.w) {
        return 1;
      }

      return edge1.w < edge2.w ? -1 : 1;
    });

    console.log('sorted edges:', graph.getEdges());

    graph.getNodes().forEach(node => {
      subsets.set(node, { parent: node, rank: 0 });
    });

    i = 0;
    while (j < gNodes - 1) {
      let edge = graph.getEdge(i++);
      let root1 = graph.find(subsets, edge.v1);
      let root2 = graph.find(subsets, edge.v2);

      if (root1 != root2) {
        result[j++] = edge;
        cost += edge.w;
        graph.union(subsets, root1, root2);
      }
    }

    i = 0;
    var d = document;
    let table = d.getElementById('table')
    table.classList.remove("hide")

  
    while (i < j) {
      var newRow = d.createElement('tr');
      newRow.insertCell(0).innerHTML = result[i].v1
      newRow.insertCell(1).innerHTML = result[i].v2
      newRow.insertCell(2).innerHTML = result[i++].w
      table.appendChild(newRow);

    }
    var newRow = d.createElement('tr');
    newRow.insertCell(0).innerHTML = ['Tempo: ' + cost]
    table.appendChild(newRow);
    console.log('Tempo: ', cost);
  }

}
