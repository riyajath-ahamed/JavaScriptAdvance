class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
    };
  };
  
  class BST {
    constructor() {
      this.root = null;
    };
  
    create(val) {
      const newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      };
      let current = this.root;
  
      const addSide = side => {
        if (!current[side]) {
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };
  
      while (true) {
        if (val === current.val) return this;
        if (val < current.val) addSide('left');
        else addSide('right');
      };
    }
  
    // BFS Method
    BFS() {
      let visited = [],
          queue = [],
          current = this.root;
  
      queue.push(current);
      while (queue.length) {
        current = queue.shift();
        visited.push(current.val);
  
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      };
  
      return visited;
    }
  
    // PreOrder Method
    preOrder() {
      let visited = [],
          current = this.root;
  
      const traverse = node => {
        visited.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      };
  
      traverse(current);
      return visited;
    }
  
    // PostOrder Method
    postOrder() {
      let visited = [],
          current = this.root;
  
      const traverse = node => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.val);
      };
  
      traverse(current);
      return visited;
    }
  
    // InOrder Method
    inOrder() {
      let visited = [],
          current = this.root;
  
      const traverse = node => {
        if (node.left) traverse(node.left);
        visited.push(node.val);
        if (node.right) traverse(node.right);
      };
  
      traverse(current);
      return visited;
    }
  };
  
  // Example usage:
  const tree = new BST();
  tree.create(20);
  tree.create(14);
  tree.create(57);
  tree.create(9);
  tree.create(19);
  tree.create(31);
  tree.create(62);
  tree.create(3);
  tree.create(11);
  tree.create(72);
  
  console.log(tree.BFS());      // [ 20, 14, 57, 9, 19, 31, 62, 3, 11, 72 ]
  console.log(tree.preOrder()); // [ 20, 14, 9, 3, 11, 19, 57, 31, 62, 72 ]
  console.log(tree.postOrder());// [ 3, 11, 9, 19, 14, 31, 72, 62, 57, 20 ]
  console.log(tree.inOrder());  // [ 3, 9, 11, 14, 19, 20, 31, 57, 62, 72 ]


  /*
    
  Binary Search Tree Structure

        20
       /  \
     14    57
    /  \   / \
   9   19 31 62
  / \           \
 3   11         72


 BFS (Breadth-First Search)
 --------------------------

        20
       /  \
     14    57
    /  \   / \
   9   19 31 62
  / \           \
 3   11         72


Order
 [20, 14, 57, 9, 19, 31, 62, 3, 11, 72]


PreOrder (Root → Left → Right)
-------------------------------

        20
       /  \
     14    57
    /  \   / \
   9   19 31 62
  / \           \
 3   11         72



 Order of Traversal: [20, 14, 9, 3, 11, 19, 57, 31, 62, 72]


 PostOrder (Left → Right → Root)
---------------------------------
    
        20
       /  \
     14    57
    /  \   / \
   9   19 31 62
  / \           \
 3   11         72

 Order of Traversal: [3, 11, 9, 19, 14, 31, 72, 62, 57, 20]


InOrder (Left → Root → Right)
------------------------------

        20
       /  \
     14    57
    /  \   / \
   9   19 31 62
  / \           \
 3   11         72

 
 Order of Traversal: [3, 9, 11, 14, 19, 20, 31, 57, 62, 72]


  */
  