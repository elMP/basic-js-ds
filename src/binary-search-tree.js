const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.minValue = null;
    this.maxValue = null;
  }


  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.minValue > data)
      this.minValue = data;
    if (this.maxValue < data)
      this.maxValue = data;

    if (!this.rootNode) {
      this.rootNode = new Node(data);
      this.minValue = data;
      this.maxValue = data;
    }
    else {
      let newElement = new Node(data);
      this.addToTree(newElement, this.rootNode);
      //console.log(this);
    }
  }

  addToTree(element, tree) {
    //console.log(tree)
    if (tree.data < element.data)
      if (tree.right)
        this.addToTree(element, tree.right);
      else
        tree.right = element;
    else
      if (tree.left)
        this.addToTree(element, tree.left);
      else
        tree.left = element;

  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.find(data))
      return true;
    return false;
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.rootNode.data === data)
      return this.rootNode;
    if (this.rootNode.data > data)
      return this.findInTree(data, this.rootNode.left);
    else
      return this.findInTree(data, this.rootNode.right);
  }

  findInTree(data, tree) {
    if (tree.data === data)
      return tree;
    if (tree.data > data)
      if (tree.left)
        return this.findInTree(data, tree.left);
      else
        return null;
    else
      if (tree.right)
        return this.findInTree(data, tree.right);
      else
        return null;
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = this.rootNode;
    this.removeNode(node, data);
    // while (node.right) {

  }

  removeNode(node, data) {
    if (node.data < data) {
      if (node.right.data === data) {
        node.right = node.right.right;
        //  break;
      } else {
        node = node.right;
        this.removeNode(node, data);
      }
      // }
    } else if (node.data > data) {
      if (node.left.data === data) {
        node.left = node.left.left;
        //  break;
      } else {
        node = node.left;
        this.removeNode(node, data);
      }
    } else {
      let left = node.left;
      while (left.right != null) {
        left = left.right;
      }
      console.log("left", left)
      left.right = node.right;

      this.rootNode = node.left;
      console.log("root", this.rootNode)
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.minValue;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.maxValue;
  }
}


/* 
const tree = new BinarySearchTree();

tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(31), false);
console.log(tree.has(54), false);
console.log(tree.has(1), false); */

//console.log(tree.find(8))
//console.log(tree.find(32))
module.exports = {
  BinarySearchTree
};
