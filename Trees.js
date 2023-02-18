let root;
const tempArray=[]
class Node
{
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

// Function to insert nodes in level order
function insertLevelOrder(arr, i)
{
    let root = null;
    // Base case for recursion
    if (i < arr.length) {
        root = new Node(arr[i]);

        // insert left child
        root.left = insertLevelOrder(arr, 2 * i + 1);

        // insert right child
        root.right = insertLevelOrder(arr, 2 * i + 2);
    }
    return root;
}

// Function to print tree nodes in InOrder fashion
function inOrder(root)
{
    if (root != null) {
        inOrder(root.left);
        tempArray.push(root.data)
        inOrder(root.right);
    }
}

let arr = [ 1, 2, 3, 4, 5, 6, 6, 6, 6 ];
root = insertLevelOrder(arr, 0);
inOrder(root);

console.log(tempArray)
