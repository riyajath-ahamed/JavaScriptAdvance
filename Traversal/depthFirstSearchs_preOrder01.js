class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    preorderDFS(node, result = []) {
        if (node === null) {
            return result;
        }

        result.push(node.value);
        this.preorderDFS(node.left, result);
        this.preorderDFS(node.right, result);

        return result;
    }
}

// Example usage:
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

const result = tree.preorderDFS(tree.root);
console.log(result); // Output: [1, 2, 4, 5, 3]


/*

        1
       / \
      2   3
     / \
    4   5
*/