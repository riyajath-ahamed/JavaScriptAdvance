
## Breadth-First Search (BFS)

### Graph Class Definition

```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
```

- **Graph Class**: This defines a [`Graph`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A6%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") class.
- **Constructor**: Initializes an empty object [`adjacencyList`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A13%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") to store the graph's vertices and edges.

### Adding Vertices

```javascript
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
```

- **addVertex Method**: Adds a new vertex to the graph.
- **Check**: If the vertex doesn't already exist in the [`adjacencyList`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A13%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition"), it initializes it with an empty array.

### Adding Edges

```javascript
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
```

- **addEdge Method**: Adds an edge between two vertices [`v1`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A12%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") and [`v2`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A16%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition").
- **Bidirectional**: Since this is an undirected graph, it adds [`v2`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A16%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") to the adjacency list of [`v1`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A12%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") and vice versa.

### Breadth-First Search (BFS)

```javascript
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}
```

- **bfs Method**: Performs a Breadth-First Search starting from the [`start`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A8%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") vertex.
- **Queue Initialization**: Initializes a queue with the [`start`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A8%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") vertex.
- **Result Array**: Stores the order of visited vertices.
- **Visited Object**: Keeps track of visited vertices to avoid cycles.
- **Mark Start as Visited**: Marks the [`start`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A8%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") vertex as visited.

#### BFS Loop

- **While Loop**: Continues as long as there are vertices in the queue.
- **Dequeue**: Removes the first vertex from the queue and assigns it to [`currentVertex`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A12%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition").
- **Visit**: Adds [`currentVertex`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A12%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") to the [`result`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A16%2C%22character%22%3A14%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") array.
- **Neighbors**: Iterates over each neighbor of [`currentVertex`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A12%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition").
  - **Check Visited**: If the neighbor hasn't been visited:
    - **Mark Visited**: Marks the neighbor as visited.
    - **Enqueue**: Adds the neighbor to the queue.

- **Return Result**: Returns the array of visited vertices in BFS order.

### Example Usage

Here's how you might use this [`Graph`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FProgramming%2FJavaScript%2FTraversal%2FdepthFirstSearch.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A6%7D%7D%5D%2C%224a949f32-f1f6-4b1f-b21a-7f1c1be41452%22%5D "Go to definition") class:

```javascript
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'C');

console.log(g.bfs('A')); // Output: ['A', 'B', 'C']
```

### Summary

- **Graph Class**: Manages vertices and edges.
- **addVertex**: Adds vertices.
- **addEdge**: Adds edges between vertices.
- **bfs**: Performs Breadth-First Search to traverse the graph.

This code effectively demonstrates how to implement and traverse a graph using BFS in JavaScript.