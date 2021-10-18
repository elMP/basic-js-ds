const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.minValue = 1;
    this.maxValue = 1;
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

    if (!this.rootNode)
      this.rootNode = new Node(data);
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

  remove(/* data */) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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

//const tree = new BinarySearchTree();
/*
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);

console.log(tree.find(8))
console.log(tree.find(32))  */