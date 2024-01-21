class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    let node = this.root;
    while (true){
      if(val < node.val){
        if(node.left === null){
          node.left = new Node(val);
          return this;
        }else{
          node = node.left;
        }
      }else if(val > node.val){
        if(node.right === null){
          node.right = new Node(val);
          return this;
        }else{
          node = node.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    if(val < node.val){
      if(node.left === null){
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    }else{
      if(node.right === null){
        node.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.right);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    let found = false;

    if(val === node.val){return node;}

    while(node && !found){
      if(val < node.val){
        node = node.left;
      }else if(val > node.val){
        node = node.right
      }else{
        found = true
      }
    }
    if(!found){return undefined;}
    return node;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(this.root == null){return undefined;}

    if(val<node.val){
      if(node.left ==null){return undefined;}
      return this.findRecursively(val, node.left);
    }else if(val>node.val){
      if(node.right == null){return undefined;}
      return this.findRecursively(val, node.right);
    }
    return node;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let vals = [];
    let node = this.root;

    function traverse(node){
      vals.push(node.val);
      if(node.left){traverse(node.left);}
      if(node.right){traverse(node.right);}
    }

    traverse(node);
    return vals;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let vals = [];
    let node = this.root;

    function traverse(node){
      if(node.left){traverse(node.left);}
      vals.push(node.val);
      if(node.right){traverse(node.right);}
    }

    traverse(node);
    return vals;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let vals = [];
    let node = this.root;

    function traverse(node){
      if(node.left){traverse(node.left);}
      if(node.right){traverse(node.right);}
      vals.push(node.val);
    }

    traverse(node);
    return vals;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let vals = [];

    queue.push(node);

    while(queue.length){
      node = queue.shift();
      vals.push(node.val);
      if(node.left){queue.push(node.left);}
      if(node.right){queue.push(node.right);}
    }

    return vals;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
