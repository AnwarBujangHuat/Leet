// Node class
const dataNode=[10,5,15,3,7,null,18]
class Node
{
  constructor(data)
  {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let root=null
const insert=(data)=>
{
  let newNode = new Node(data);
  if(this.root === null)
    this.root = newNode;
  else
    insertNode(this.root, newNode);
}

const insertNode=(node, newNode)=>
{
  if(newNode.data < node.data)
  {
    if(node.left === null)
      node.left = newNode;
    else
      this.insertNode(node.left, newNode);
  }
  else
  {
    if(node.right === null)
      node.right = newNode;
    else
      this.insertNode(node.right,newNode);
  }
}
