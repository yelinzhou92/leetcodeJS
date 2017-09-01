function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}


/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if (graph === null) {
        return graph;
    }
    let visited = {};
    let queue = [];
    visited[graph.label] = new UndirectedGraphNode(graph.label);
    queue.push(graph);
    bfs();
    return visited[graph.label];
    
    function bfs() {
        while (queue.length > 0) {
            let node = queue.shift();
            let newNode = visited[node.label];
            for (let i = 0; i < node.neighbors.length; i++) {
                if (node.neighbors[i].label !== node.label) {
                    let neighbor = node.neighbors[i];
                    var newNeighbor = null;
                    if (!visited[neighbor.label]) {
                        newNeighbor = new UndirectedGraphNode(neighbor.label);
                        visited[neighbor.label] = newNeighbor;
                        queue.push(neighbor);
                    } else {
                        newNeighbor = visited[neighbor.label];
                    }
                    newNode.neighbors.push(newNeighbor);
                } else {
                    newNode.neighbors.push(visited[node.label]);
                }
            }
        }
    }
}

